import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlinePhoneLocked } from "react-icons/md";
import "./Nav.css";

const Nav2 = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className='logo-container'>
        <Link to="/" className="logo-link">
          <h1>Shoes.com</h1>
        </Link>
      </div>
      <div className="profile-container">
        <a href="/">
          <MdOutlinePhoneLocked className="nav-icons" />
        </a>
        <a href="/">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav2;
