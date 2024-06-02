import React from "react";
import { useParams } from "react-router-dom";
import Nav2 from "./Navigation/Nav2";
import products from "./db/data";
import './ProductView.css';  // Import the CSS file

function ProductView() {
  const { productTitle } = useParams();
  const product = products.find((p) => p.title === productTitle);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Nav2 />
      <div className="product-view-container">
        <div className="product-details">
          <div className="product-image-box">
            <img src={product.img} alt={product.title} className="product-image"/>
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.newPrice}</p>
            <p>Company: {product.company}</p>
            <p>Color: {product.color}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </>
  );
}

export default ProductView;
