import React from "react";
import "./about.css";
import { FaSearchPlus, FaThumbsUp, FaDeaf } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-satifac">
        <div className="about_icons">
          <FaThumbsUp fill="white" />
        </div>
        <div className="satifac">
          <b>100% SATISFACTION, NOTHING LESS:</b>
          <p>
            We provide a great A-Z customer experience by shipping your
            authentic products, directly from the manufacturer or reliable
            distributors, starting from the moment of searching for your
            required products till getting them directly to you.
          </p>
        </div>
      </div>
      <div className="about-satifac">
        <div className="about_icons">
          <FaSearchPlus fill="white" />
        </div>
        <div className="satifac">
          <b>GRAND PRODUCTS SELECTION</b>
          <p>
            We carefully curate our selection and only work with brands that
            share our high standard, so when you shop with us, you are getting
            the products you can trust, directly from the manufacturer or
            reliable distributors.
          </p>
        </div>
      </div>
      <div className="about-satifac">
        <div className="about_icons">
          <FaDeaf fill="white" />
        </div>
        <div className="satifac">
          <b>GREAT PRICES</b>
          <p>
            We believe healthy living should be affordable, that is why we try
            our best to decrease our prices so you can have a complete
            satisfaction and then we can delightfully have you among our loyal
            customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
