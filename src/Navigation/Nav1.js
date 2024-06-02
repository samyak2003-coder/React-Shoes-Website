import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlinePhoneLocked } from "react-icons/md";
import "./Nav.css";

const Nav1 = ({ handleInputChange, query }) => {
  return (
    <nav>
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
        <a href="/">
          <MdOutlinePhoneLocked  className="nav-icons" />
        </a>
        <a href="/">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="/login">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav1;