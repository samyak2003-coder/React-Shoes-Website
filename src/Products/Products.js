import React from "react";
import "./Products.css";

const Products = ({ result }) => {
  console.log(result)
  return (
    <section className="card-container">
      {result}
    </section>
  );
};

export default Products;