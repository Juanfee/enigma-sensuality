import React, { useState } from "react";
import "./ProductCard.css";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const whatsappNumber = "573176744519";
    // Mensaje predeterminado
    const whatsappMessage = `¡Hola! Estoy interesad@ en el producto: ${product.name} (Código: ${product.image}). ¿Podrías darme más información?`;

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <div 
            className="product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-container">
                <img 
                    src={isHovered ? product.secondaryImage || product.image : product.image} 
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
            <button 
                className="whatsapp-button"
                onClick={handleWhatsAppClick}
            >
                <FaWhatsapp className="whatsapp-icon" />
                Preguntános
            </button>
        </div>
    );
};

export default ProductCard;