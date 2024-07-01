import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter(product => product !== productToRemove);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(product => {
      total += product.price;
    });
    return total;
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : (
        <div>
          {cartItems.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          ))}
          <h4>Total: ${calculateTotal()}</h4>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;