import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import productsData from "../data/products.json";
import "./HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData); // I should edit this later when integrating backend,Don't forget.
  }, []);

  return (
    <div className="home-container">
      <h2>Our Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            image={product.image} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
