import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, addToCart, removeFromCart, clearItem, closeCart }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h2>Carrito de Compras</h2>
          <button onClick={closeCart} className="close-btn">✖</button>
        </div>
  
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>${item.price.toLocaleString()}</p>
                    <div className="controls">
                      <button onClick={() => removeFromCart(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                    <button onClick={() => clearItem(item)} className="remove-btn">Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: ${total.toLocaleString()}</h3>
            <button className="pay-btn">Pagar</button>
          </>
        )}
      </div>
    );
  };

export default Cart;
