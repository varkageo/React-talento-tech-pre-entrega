import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import hero1 from '../img/hero1.webp';
import hero2 from '../img/hero2.webp';
import hero3 from '../img/hero3.jpg';

const slides = [
    {
        title: 'Equipá tu setup con lo último en tecnología',
        button: 'Ver productos',
        link: '#productos',
        image: hero1,
    },
    {
        title: 'Asesoramiento personalizado para tu PC ideal',
        button: 'Contactanos',
        link: '#contacto',
        image: hero2,
    },
    {
        title: 'Componentes de alto rendimiento y marcas top',
        button: 'Explorar',
        link: '#productos',
        image: hero3,
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // cambia cada 5 segundos

    return () => clearInterval(interval);
    }, []);

    return (
    <section className="hero">
        {slides.map((slide, index) => (
        <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
        >
            <div className="overlay">
            <h2>{slide.title}</h2>
            <a href={slide.link} className="cta-btn">{slide.button}</a>
            </div>
        </div>
        ))}
    </section>
);
};

export default Hero;
