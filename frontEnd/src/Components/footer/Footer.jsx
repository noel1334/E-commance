import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Info Section */}
        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>
            Phone: <span>08098361220</span>
          </p>
          <p>
            Email: <span>info@laraholic.ng</span>
          </p>
          <p>
            Working Days/Hours: <span>Mon - Fri: 9am - 6pm</span>
          </p>
        </div>

        {/* User Section */}
        <div className="footer-column">
          <h4>User Links</h4>
          <Link to="/auth">Register/Login</Link>
          <Link to="/my-account">My Account</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/order-tracking">Order Tracking</Link>
        </div>

        {/* Information Section */}
        <div className="footer-column">
          <h4>Information</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/shipping">Shipping</Link>
          <Link to="/refunds">Refunds & Returns</Link>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/product-guarantee">Product Guarantee</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="#" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="#" className="social-icon">
          <FaTwitter />
        </a>
        <a href="#" className="social-icon">
          <FaInstagram />
        </a>
        <div className="whatsapp-icon">
          <FaWhatsapp />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© Laraholic Ltd. 2021. All Rights Reserved</p>
        <p>
          Website designed by <span>G2Net Nigeria</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
