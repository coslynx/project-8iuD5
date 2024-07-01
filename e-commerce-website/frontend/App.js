import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import ShoppingCart from './components/ShoppingCart';
import UserAuth from './components/UserAuth';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Update local storage when cart items change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home addToCart={addToCart} />
        </Route>
        <Route path="/product/:id">
          <ProductDetail addToCart={addToCart} />
        </Route>
        <Route path="/checkout">
          <Checkout cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
        </Route>
        <Route path="/cart">
          <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
        </Route>
        <Route path="/login">
          <UserAuth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;