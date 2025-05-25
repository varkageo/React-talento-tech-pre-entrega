
import './App.css'
import { useState } from 'react';
import Cart from './Components/Cart';
import Header from './Components/Header'
import Hero from './Components/Hero';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Login from './Components/Login';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearItem = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };


  return (
    <>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && (
        <>
      <Header toggleCart={toggleCart} />
      <Hero />
      <Products addToCart={addToCart} />
      {showCart && (
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearItem={clearItem}
          closeCart={() => setShowCart(false)}
        />
      )}
      <Footer />
    
        </>
      )}
    </>
  );
}

export default App;
