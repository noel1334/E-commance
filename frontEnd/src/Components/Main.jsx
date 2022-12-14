import React from "react";
import AboutPage from "./AboutPage";
import AllProduct from "./AllProduct";
import BestSellaar from "./BestSellaar";
import Category from "./Category";
import FeatureProduct from "./FeatureProduct";
import { Navegation } from "./Navegation";

const Main = () => {
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <FeatureProduct />
          <BestSellaar />
        </div>
        <div className="BIG ">
          <h2>BIG SALE</h2>
          <h2>SHOP AUTHENTIC, EFFECTIVE & SAFE PRODUCTS UP TO 25% OFF</h2>
        </div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <Category />
        <AllProduct />
      </div>
      <div>
        <AboutPage />
      </div>
    </div>
  );
};

export default Main;
