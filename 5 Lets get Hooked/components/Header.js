import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container-logo">
        <img src={LOGO_URL} alt="logo" />
        <span>Foodish</span>
      </div>
      <div className="header-container-nav_items">
        <ul className="header-nav_items">
          <li>About</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
