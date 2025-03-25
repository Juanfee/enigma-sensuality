import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Home.css";

const Home = () => {
    // Selecciona solo algunos productos destacados
    const featuredProducts = products.slice(0, 4);
    
    return (
        <div className="home">
            {/* Hero Banner */}
            <section className="hero-banner">
                <div className="hero-content">
                    <h1>ENIGMA SENSUALITY</h1>
                    <h2>Descubre tu lado más audaz</h2>
                    <p className="hero-description">
                        Lencería fina que celebra la sensualidad femenina. 
                        Diseños exclusivos que realzan tus curvas con elegancia 
                        y sofisticación. Hecho para mujeres que se atreven.
                    </p>
                    <Link to="/products" className="cta-button">
                        Explora Nuestra Colección
                    </Link>
                </div>
            </section>

            {/* Sección de Beneficios */}
            <section className="benefits-section">
                <div className="benefit-card">
                    <h3>Calidad</h3>
                    <p>Materiales suaves y duraderos que cuidan tu piel</p>
                </div>
                <div className="benefit-card">
                    <h3>Hermosos Diseños</h3>
                    <p>Piezas que te harán sentir única</p>
                </div>
                {/* <div className="benefit-card">
                    <h3>Talles Inclusivos</h3>
                    <p>Para todas las siluetas y cuerpos reales</p>
                </div> */}
            </section>

            {/* Productos Destacados */}
            <section className="featured-products">
                <h2>Nuestros Favoritos</h2>
                <p className="section-description">
                    Las piezas más deseadas
                </p>
                <div className="product-grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />  
                    ))}
                </div>
                <Link to="/products" className="view-all">
                    Ver todos los productos →
                </Link>
            </section>

            {/* Sección de Testimonios */}
            {/* <section className="testimonials">
                <h2>Lo que dicen nuestras clientas</h2>
                <div className="testimonial-card">
                    <p>"Me sentí empoderada y sexy como nunca. La calidad superó todas mis expectativas."</p>
                    <span>- Valentina M.</span>
                </div>
            </section> */}
        </div>
    );
};

export default Home;