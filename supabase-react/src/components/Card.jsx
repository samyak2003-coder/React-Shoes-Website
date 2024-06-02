import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({img, title, star, reviews, prevPrice, newPrice, cardClick }) => {
  return (
    <section className="card" onClick={cardClick}>
      <Link to={`/product/${title}`}>
        <img src={img} alt={title} className="card-img" />
      </Link>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
