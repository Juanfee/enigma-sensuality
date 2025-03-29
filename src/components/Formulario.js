import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./Formulario.css";

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [busqueda, setBusqueda] = useState("");
    const [interes, setInteres] = useState("");
    const [requerimientos, setRequerimientos] = useState("");
    const [fantasia, setFantasia] = useState("");
    const navigate = useNavigate();

    const enviarAWhatsApp = () => {
        const numeroWhatsApp = "573182724666";
        const texto = `✨ *Solicitud de Información Confidencial* ✨
        
    👤 *Nombre:* ${nombre}  
    🌀 *Soy:* ${genero}  
    🔍 *Busco en mi encuentro:* ${busqueda}  
    💖 *Mi mayor interés en el evento:* ${interes}  
    📋 *Requerimientos adicionales:* ${requerimientos}  
    🌟 *Mi fantasía:* ${fantasia}`;
        
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank");

        setNombre("");
        setGenero("");
        setBusqueda("");
        setInteres("");
        setRequerimientos("");
        setFantasia("");
    };
    

    return (
        <div className="form-container">
            <h2>Solicita Información Confidencial</h2>

            <input 
                type="text" 
                placeholder="Tu nombre" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
            />

            <label>¿Eres chico, chica o pareja?</label>
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
                <option value="" disabled>Selecciona una opción</option>
                <option value="Chico">Chico</option>
                <option value="Chica">Chica</option>
                <option value="Pareja">Pareja</option>
            </select>

            <label>¿Qué buscas en tu encuentro?</label>
            <select value={busqueda} onChange={(e) => setBusqueda(e.target.value)}>
                <option value="" disabled>Selecciona una opción</option>
                <option value="Diversión">Diversión</option>
                <option value="Conexión emocional">Conexión emocional</option>
                <option value="Exploración sensual">Exploración sensual</option>
                <option value="Nuevas experiencias">Nuevas experiencias</option>
            </select>

            <label>¿Cuál es tu mayor interés en el evento?</label>
            <textarea 
                placeholder="Escribe aquí..." 
                value={interes} 
                onChange={(e) => setInteres(e.target.value)} 
            />

            <label>¿Tienes algunos requerimientos adicionales?</label>
            <textarea 
                placeholder="Escribe aquí..." 
                value={requerimientos} 
                onChange={(e) => setRequerimientos(e.target.value)} 
            />

            <label>Cuéntanos brevemente tu fantasía</label>
            <textarea 
                placeholder="Escribe aquí..." 
                value={fantasia} 
                onChange={(e) => setFantasia(e.target.value)} 
            />

            <button className="send-button" onClick={enviarAWhatsApp}>
                <FaWhatsapp className="icon"/> Enviar a WhatsApp
            </button>
            <button className="back-button" onClick={() => navigate(-1)}>Volver</button>
        </div>
    );
};

export default Formulario;
