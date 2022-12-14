import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="contact-infor">
          <div className="contact">
            <b>CONTACT INFO</b>
            <p>
              PHONE:
              <span>08098361220</span>
            </p>
            <p>
              EMAIL:
              <span>info@laraholic.ng</span>
            </p>
            <p>
              WORKING DAYS/HOURS:
              <span>Mon - Fri : 9am - 6pm</span>
            </p>
          </div>
          <div className="user-cont">
            <b>CONTACT INFO</b>
            <Link to="/auth">
              <p className="p">Register/Login</p>
            </Link>
            <p className="p">My Account</p>
            <p>Cart</p>
            <p> Wishlist</p>
            <p>Order Tracking </p>
          </div>
          <div className="inforqick">
            <b>INFORMATION</b>
            <p className="p">Privacy Policy</p>
            <p>Terms of Use </p>
            <p>Shipping</p>
            <p> Refunds, Returns & Exchange</p>
          </div>
          <div className="inforqick">
            <b>QUICK LINK</b>
            <Link to="/">
              <p className="p">Home </p>
            </Link>
            <p>About Us </p>
            <p> Product Guarantee </p>
            <p> Contact us</p>
          </div>
        </div>
        <div className="socio-container">
          <div className="social-ic">
            <div className="icon">
              <FaFacebookF fill="" />
            </div>
            <p className=" try">Facebook</p>
          </div>
          <div className="social-ic">
            <div className="icon">
              <FaTwitter fill="" />
            </div>
            <p className=" try">Twitter</p>
          </div>
          <div className="social-ic">
            <div className="icon">
              <FaInstagram fill="" />
            </div>
            <p className=" try">Instagram</p>
          </div>
        </div>
        <div className="copy-content">
          <p>© Laraholic Ltd. 2021. All Rights Reserved</p>
          <p>
            Website designed by <span>G2Net Nigeria</span>
          </p>
        </div>
      </div>
      <div className="whatsapp">
        <FaWhatsapp fill="white" />
      </div>
    </div>
  );
};

export default Footer;
