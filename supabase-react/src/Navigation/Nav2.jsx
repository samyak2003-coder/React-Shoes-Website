import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlinePhoneLocked } from "react-icons/md";
import "./Nav.css";

const Nav2 = ({ handleInputChange, query }) => {
  return (
    <>
        <div className='logo-container'>
        <Link to="/" className="logo-link">
          <h1>Shoes.com</h1>
        </Link>
      </div>
      <div className="profile-container">
        <a href="/contact">
          <MdOutlinePhoneLocked className="nav-icons" />
        </a>
        <a href="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="/login">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </>
  );
};

export default Nav2;
