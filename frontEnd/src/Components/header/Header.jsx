import {
  FaFacebookF,
  FaInstagram,
  FaPhoneVolume,
  FaShoppingBag,
  FaTwitter,
  FaUserAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { navBar, healthGoal } from "../../assets/Constant";
import { logout } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);

  const logoutUser = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/");
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="header-container">
      {/* Top Section */}
      <div className="top-bar">
        <p className="top-bar-text">
          Laraholic: Vitamins, Supplements & Natural Health Products.
        </p>
        <div className="social-icons">
          <FaInstagram className="social-icon" />
          <FaFacebookF className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>
      </div>

      {/* Main Section */}
      <div className="main-header">
        <div className="logo-search">
          <Link to="/" className="logo">
            <h1>LARAHOLIC</h1>
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>
        </div>
        <div className="contact-info">
          <FaPhoneVolume className="phone-icon" />
          <div>
            <p>Hot-line</p>
            <p>(+234) 809-8361-220</p>
          </div>
        </div>
        <div className="user-actions">
          {user ? (
            <p>{user.username}</p>
          ) : (
            <Link to="/auth">
              <FaUserAlt className="action-icon" />
            </Link>
          )}
          {user && (
            <FaSignOutAlt className="action-icon" onClick={logoutUser} />
          )}
          <Link to="/shop" className="cart-icon">
            <FaShoppingBag />
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
        <button
          className="nav-toggle-button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleNav}>
          Home
        </Link>
        <Link to="/about" onClick={toggleNav}>
          About
        </Link>
        <Link to="/contact" onClick={toggleNav}>
          Contact
        </Link>
        <Link to="/shop" onClick={toggleNav}>
          Shop
        </Link>
        <div className="dropdown-container" onClick={toggleDropdown}>
          Health Goal
          <ul className={`dropdown ${isDropdownOpen ? "visible" : ""}`}>
            {healthGoal.map((item, index) => (
              <li key={index} className="dropdown-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {navBar.map((item, index) => (
          <Link key={index} className="nav-item">
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
