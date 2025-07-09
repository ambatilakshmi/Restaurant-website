
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../menu.css";

const Viewcart = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [cartproducts, setCartproducts] = useState([]);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get("http://localhost:3008/cartitems");
            if (response && response.data.status === "success") {
                setCartproducts(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
            setError("Error fetching cart items.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, [userId]);

    const handleCheckout = () => {
        alert("Proceeding to checkout...");
    };

    const navigateToHome = () => {
        navigate('/');
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (cartproducts.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div className="cart">
            <h1 className="cart-1">Your Cart</h1>
            {cartproducts.map((item) => (
                <div key={item._id}>
                    <h2>{item.name}</h2> 
                    <p>Price: {item.price}</p>
                </div>
            ))}
            <Button onClick={handleCheckout} style={{ backgroundColor: 'rgb(255 165 0)', color: 'black', border: "transparent" }}>
                Checkout
            </Button>
            <Button onClick={navigateToHome} style={{ marginLeft: '10px' }}>
                Continue Shopping
            </Button>
        </div>
    );
};

export default Viewcart;
