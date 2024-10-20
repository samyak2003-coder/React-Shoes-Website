import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlinePhoneLocked } from "react-icons/md";
import "./Nav.css";

const Nav1 = ({ handleInputChange, query }) => {
  return (
    <>
      <div className="wrapper">
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="/contact">
          <MdOutlinePhoneLocked  className="nav-icons" />
        </a>
        <a href="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="/login">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      </div>
        
    </>

  );
};

export default Nav1;