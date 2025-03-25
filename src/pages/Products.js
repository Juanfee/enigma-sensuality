import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <h1>Enigma Sensuality</h1>
      {/* <div className="filters"> */}
        {/* Aquí puedes agregar filtros por categoría, talla, etc. */}
        {/* <select>
          <option value="all">Todas las categorías</option>
          <option value="bras">Sostenes</option>
          <option value="panties">Panties</option>
          <option value="sets">Conjuntos</option>
        </select>
      </div> */}
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;