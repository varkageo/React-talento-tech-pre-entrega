import React from 'react';
import '../styles/Products.css';
import hero3 from '../img/hero3.jpg';
import monitor from '../img/monitor.jpeg';
import teclado from '../img/Teclado.webp';

const products = [
    {
    id: 1,
    name: 'Placa de Video RTX 3060',
    price: 380000,
    image: hero3,
    },
    {
    id: 2,
    name: 'Monitor Gamer 144Hz',
    price: 250000,
    image: monitor,
    },
    {
    id: 3,
    name: 'Teclado Mecánico RGB',
    description: 'Teclado Mecánico RGB',
    price: 90000,
    image: teclado,
    },
];

const Products = ({ addToCart }) => {
  return (
    <section className="products" id="productos">
      <h2>Productos</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>${prod.price.toLocaleString()}</p>
            <button onClick={() => addToCart(prod)}>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
