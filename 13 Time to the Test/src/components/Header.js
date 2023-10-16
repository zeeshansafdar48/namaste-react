import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-pink-50">
      <div className="header-container-logo">
        <img src={LOGO_URL} alt="logo" />
        <span>Foodish</span>
      </div>
      <div className="header-container-nav_items">
        <ul className="header-nav_items">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
