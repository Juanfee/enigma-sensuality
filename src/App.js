import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Formulario from "./components/Formulario";


function App() {
  return(
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/formulario" element={<Formulario />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;