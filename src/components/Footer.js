import React from "react";
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import { GiSensuousness, GiPartyFlags, GiSecretDoor } from 'react-icons/gi';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3 className="logo-text">ENIGMA Sensuality <GiSensuousness className="emoji-icon"/></h3>
                    <p className="tagline">Libera tu sensualidad sin límites</p>
                    <div className="contact">
                        <span><FaEnvelope className="icon"/> enigmaemporio3@gmail.com</span>
                        <span><FaWhatsapp className="icon"/> +57 3176744519</span>
                    </div>
                </div>
                
                <div className="footer-section provocative">
                    <h3>¿Eventos Exclusivos?</h3>
                    <p className="discreet-text">
                        Experiencias para adultos consensuadas y discretas
                    </p>
                    <button className="discreet-button">
                        <FaWhatsapp className="icon"/> Info confidencial
                    </button>
                </div>
                
                <div className="footer-section social">
                    <h3>Conéctate</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/profile.php?id=61566515183978" aria-label="Facebook">
                            <FaFacebook className="icon"/>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="icon"/>
                        </a>
                        <a href="https://wa.me/573176744519" aria-label="WhatsApp">
                            <FaWhatsapp className="icon"/>
                        </a>
                    </div>
                    <div className="newsletter">
                        <p>Suscríbete para recibir nuestras novedades íntimas</p>
                        <form>
                            <input type="email" placeholder="PROXIMAMENTE"/>
                            <button type="submit">Suscribir</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} ENIGMA Sensuality - Todos los derechos reservados | 
                {/* <a href="/privacidad"> Política de Privacidad</a> | 
                <a href="/terminos"> Términos y Condiciones</a> */}
            </div>
        </footer>
    );
};

export default Footer;