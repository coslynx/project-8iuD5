import React, { useState, useEffect } from 'react';
import { getCartItems, removeCartItem, updateCartItem } from '../../utils/cartUtils';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const items = await getCartItems();
    setCartItems(items);
  };

  const handleRemoveItem = async (itemId) => {
    await removeCartItem(itemId);
    fetchCartItems();
  };

  const handleUpdateQuantity = async (itemId, quantity) => {
    await updateCartItem(itemId, quantity);
    fetchCartItems();
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
          />
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;