import React from "react";
import About from "../about/About";
import Products from "../products/Products";
import Category from "../../Components/category/Category";
import FeatureProduct from "../../Components/featureProduct/FeatureProduct";
import BestSeller from "../../Components/bestSeller/BestSeller";
import "./main.css";

const Main = () => {
  return (
    <main className="main-container">
      {/* Feature & Best Seller Section */}
      <section className="feature-best-seller-section">
        <FeatureProduct />
        <BestSeller />
      </section>

      {/* Big Sale Section */}
      <section className="big-sale-section">
        <h2 className="big-sale-title">BIG SALE</h2>
        <p className="big-sale-description">
          SHOP AUTHENTIC, EFFECTIVE & SAFE PRODUCTS UP TO 25% OFF
        </p>
      </section>

      {/* Category & Products Section */}
      <section className="category-products-section">
        <div className="category">
          <Category />
        </div>
        <div className="products">
          <Products />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <About />
      </section>
    </main>
  );
};

export default Main;
