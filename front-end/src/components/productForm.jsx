import React, { useState } from "react";
import "./productForm.css"

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Product submitted:", product);
    alert("Product added successfully!");
    setProduct({ name: "", description: "", price: "", images: [] });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={product.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <input type="file" multiple onChange={handleImageUpload} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
