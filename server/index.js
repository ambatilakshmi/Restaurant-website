const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const UserModel = require('./User'); // Import the User model once
const Cart = require('./models/Cart'); // Import the Cart model, ensure this path is correct
const { MongoClient } = require('mongodb');
const queryModel = require('./models/Query');
const bookModel = require('./models/book');


dotenv.config();

const app = express(); // Initialize 'app' before using it

// Middleware setup
app.use(cors()); // CORS setup must come after app initialization
app.use(express.json()); // Parse incoming requests with JSON payloads


const client = new MongoClient(process.env.MONGO_URI);

// Connect to MongoDB using a secure connection string
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.log("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process if the connection fails
  });

app.listen(3008, () => {

  console.log("Server is running on port 3008");
});




// Sign up route
app.post("/sign", async (req, res) => {
  try {
    const { email, fname, lname, password, phonenumber } = req.body;

    if (!email || !fname || !lname || !password || !phonenumber) {
      return res.status(400).json({ error: "All fields are required." });
    }

    console.log(`Received signup data: ${email}, ${fname}, ${lname}`);

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      fname,
      lname,
      email,
      password: hashedPassword,
      phonenumber
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  }
  catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fetch the user from the database using the provided email
    const user = await UserModel.findOne({ email });
    if (user) {
      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        console.log("Login successful, sending user data:", user._id);
        // Send a success response with the user's ID
        res.status(200).json({ status: "success", userId: user._id });
      } else {
        // Password mismatch error
        res.status(400).json({ error: "Password does not match" });
      }
    } else {
      // User not found error
      console.log("User not found in database.");
      return res.status(401).json({ error: "No records found!" });
    }
  } catch (error) {
    // Log any errors and send a 500 Internal Server Error response
    console.error("Error during login:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});



// Menu list route
app.get("/menulist", async (req, res) => {
  try {
    await client.connect();
    const database = client.db('restaurant');
    const result = await database.collection('menulist').find({}).toArray();
    console.log(result);
    res.send({ status: "success", data: result });
  } catch (error) {
    console.error("Error fetching menu list:", error);
    res.status(500).json({ error: error.message });
  }
});
app.get("/menulist",(req,res)=>{
 

  const Menu=async()=>{
    
    await client.connect();
    await client.db("admin").command({ping:1});
    const database=client.db('restaurant');
    const result=await database.collection('menulist').find({}).toArray();
   // const menulist=await result.find().toArray();
    console.log(result)
    res.send({status:"success",data:result})
  
  }
  Menu()
  
  })

app.get('/itemdetail', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('restaurant');
    const result = await database.collection('menulist').findOne({ itemid: req.query.item_id });
    res.send({ status: 'success', data: result });
  } catch (error) {
    console.error("Error fetching item detail:", error);
    res.status(500).json({ error: error.message });
  }
});

// Route to get the user's cart items
app.get('/cart', async (req, res) => {
  try {
    const userId = req.user._id; // Assuming user ID is available after login
    const cart = await Cart.findOne({ userId }).populate('items.itemId');

    res.json({ status: 'success', data: cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to add an item to the cart
app.post('/cart/add', async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [{ itemId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex((item) => item.itemId === itemId);

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ itemId, quantity });
      }
    }

    await cart.save();
    res.json({ status: 'success', data: cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Middleware to authenticate user
const authenticateUser = (req, res, next) => {
  const userId = req.headers['x-user-id'];
  if (!userId) {
    return res.status(401).json({ error: 'User not authenticated' });
  }
  UserModel.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
      req.user = user;
      next();
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// Use the middleware in routes where needed



app.post("/contact",async(req,res)=>{

  const { query,email }=req.body;

  const newquery=new queryModel({
    email,query
  });
  const savedQuery=await newquery.save();
  res.status(201).json(savedQuery);
  
});



app.post("/book", async (req, res) => {
  const { uname, email, date, request } = req.body;

  try {
    if (!email || !uname || !date || !request ) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const newBookingData = new bookModel({
      uname,
      email,
      date,
      request
    });
    const savedBook = await newBookingData.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

app.post("/api/cart/add", async (req, res) => {
  const { userId, productId, quantity, image } = req.body; // Add image to destructuring

  try {
      const database = client.db('restaurant');
      
      // Check if the cart item already exists
      const existingCartItem = await database.collection('cart').findOne({ userId, productId });

      if (existingCartItem) {
          // If the item exists, increment the quantity
          const updatedCartItem = await database.collection('cart').updateOne(
              { userId, productId },
              { $inc: { quantity: quantity } }
          );

          res.send({ status: 'success', message: 'Item quantity updated' });
      } else {
          // If the item is not in the cart, add a new entry
          const newCartItem = { userId, productId, quantity, image }; // Include image in the new cart item
          await database.collection('cart').insertOne(newCartItem);
          res.status(201).send({ status: 'success', message: 'Item added to cart' });
      }
  } catch (err) {
      console.error('Error adding product to cart:', err);
      res.status(500).send("Internal Server Error");
  }
});
app.post("/api/items/add", async (req, res) => {
  const { name, price } = req.body;

  try {
      const database = client.db('restaurant');
      
      const newItem = {
          name,
          price,
          createdAt: new Date(),
      };

      const result = await database.collection('cart').insertOne(newItem);
      console.log(`New item created with ID: ${result.insertedId}`);

      res.status(201).send({
          status: 'success',
          item: {
              _id: result.insertedId,
              name: newItem.name,
              price: newItem.price,
          }
      });
  } 
  catch (err) {
      console.error('Error during item addition:', err);
      res.status(500).send("Internal Server Error");
  }
});
app.get("/api/items/cart", async (req, res) => {
  const { userId } = req.query;

  try {
      const database = client.db('restaurant');
      // Assuming userId is used as a field in your cart collection to identify which user's cart items to retrieve
      const cartItems = await database.collection('cart').find({ userId: userId }).toArray();

      res.send({ status: "success", data: cartItems });
  } catch (err) {
      console.error('Error fetching cart items:', err);
      res.status(500).send("Internal Server Error");
  }
});



app.get("/cartitems",(req,res)=>{
  const cart=async()=>{
    await client.connect();
    await client.db("admin").command({ ping: 1});
    const database=client.db("restaurant")
    const collect=database.collection("cart");

    const products = await collect.find({}).toArray()

    if(products){
      console.log(products)
      res.send({status:"success",data:products})
    }
  }
  cart()
})

    
app.get("/search", async (req, res) => {
  const { query } = req.query; // Get the search query from query parameters

  console.log(`Received search request for query: ${query}`);

  try {
      const database = client.db('restaurant');
      const searchResults = await database.collection('menulist').find({
          $or: [
              { name: { $regex: query, $options: 'i' } },
              { description: { $regex: query, $options: 'i' } }
          ]
      }).toArray();

      res.send({ status: "success", data: searchResults });
  } catch (err) {
      console.error('Error during search:', err);
      res.status(500).send({ status: 'error', message: 'Internal Server Error' });
  }
});
