import React from "react";
import "./Products.css";

const Products = ({ result, selectedProduct, clearSelectedProduct }) => {
  if (selectedProduct) {
    return (
      <div className="product-details">
        <h1>{selectedProduct.title}</h1>
        <img src={selectedProduct.img} alt={selectedProduct.title} />
        <p>{selectedProduct.description}</p>
        <p>Price: ${selectedProduct.newPrice}</p>
        <p>Company: {selectedProduct.company}</p>
        <p>Color: {selectedProduct.color}</p>
        <p>Category: {selectedProduct.category}</p>
        <button onClick={clearSelectedProduct}>Back to Products</button>
      </div>
    );
  }

  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;
