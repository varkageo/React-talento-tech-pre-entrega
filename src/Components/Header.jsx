import React from 'react';
import '../Styles/Header.css';
import Serpiente from '../img/Serpiente.jpg';



const Header = ({ toggleCart }) => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={Serpiente} alt="Logo" className="logo" />
                <h1 className="store-name">Varka Store</h1>
            </div>
            <nav className="nav">
                <a href="#home">Inicio</a>
                <a href="#productos">Productos</a>
                <a href="#contacto">Contacto</a>
                <a href="#contacto" onClick={toggleCart} className="nav-btn">🛒</a>
            </nav>
        </header>
);
};

export default Header;