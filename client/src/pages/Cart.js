// CartPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const user = JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {
    // Fetch the cart items when the component mounts
    axios
      .get('http://localhost:3008/cart', { headers: { 'x-user-id': user._id } })
      .then((response) => {
        if (response.data.status === 'success') {
          setCart(response.data.data);
        } else {
          alert('Failed to fetch cart items');
        }
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
        alert('An error occurred while fetching the cart.');
      });
  }, [user._id]);

  if (!cart) {
    return <div>Loading... </div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.items.length > 0 ? (
        cart.items.map((item, index) => (
          <div key={index}>
            <p>Item ID: {item.itemId}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
