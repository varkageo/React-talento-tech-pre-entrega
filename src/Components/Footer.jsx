import React from 'react';
import '../styles/Footer.css';
import x from '../img/x.png';
import face from '../img/face.svg';
import ig from '../img/ig.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Varka Store</h4>
          <p>Tu tienda de confianza en artículos de computación.</p>
        </div>

        <div className="footer-col">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Política de Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>¿Querés trabajar con nosotros?</h4>
          <p>Envíanos tu CV a: <br /><a href="mailto:rrhh@varkastore.com">rrhh@varkastore.com</a></p>
        </div>

        <div className="footer-col">
          <h4>Seguinos</h4>
          <div className="social-icons">
            <a href="#"><img src={face} alt="Facebook" /></a>
            <a href="#"><img src={ig} alt="Instagram" /></a>
            <a href="#"><img src={x} alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Varka Store - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
