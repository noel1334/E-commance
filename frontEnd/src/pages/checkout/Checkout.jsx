import { useEffect, useState, useRef } from "react";
import { Country, State, City } from "country-state-city";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BillingShipping from "./BillingShipping";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import "./checkout.css";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const countries = Country.getAllCountries();
  const [country, setCountry] = useState("");
  const [state, setState] = useState([]);
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState([]);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [slide, setSlide] = useState(0);
  const [formHeight, setFormHeight] = useState(1150);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);

  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  const styles = {
    formSlide: {
      transform: `translateX(calc(${-100 * slide}% - ${slide * 70}px))`,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setState(State.getStatesOfCountry(country));
    }, 1000);
  }, [country]);

  useEffect(() => {
    setTimeout(() => {
      setCity(City.getCitiesOfState(country, stateCode));
    }, 1000);
  }, [stateCode]);

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout_container" style={{ height: `${formHeight}px` }}>
      <div className="Shipping-container">
        <div className="Shipping-text">
          <p style={{ backgroundColor: `${slide === 0 ? "blue" : "green"}` }}>
            1
          </p>
          <p>Billing & Shipping</p>
        </div>
        <div className="Shipping-text">
          <p style={{ backgroundColor: `${slide === 1 ? "blue" : "green"}` }}>
            2
          </p>
          <p>Order</p>
        </div>
        <div className="Shipping-text">
          <p
            style={{
              position: "relative",
              zIndex: "3",
              backgroundColor: `${slide === 2 ? "blue" : "green"}`,
            }}
          >
            3
          </p>
          <p>Payment</p>
        </div>
      </div>
      <form className="multi_step_form" style={styles.formSlide}>
        <BillingShipping
          countries={countries}
          setCountry={setCountry}
          state={state}
          setStateCode={setStateCode}
          city={city}
          setSlide={setSlide}
          setFormHeight={setFormHeight}
          slide2Ref={slide2}
        />
        <OrderSummary
          cart={cart}
          totalPrice={totalPrice}
          setSlide={setSlide}
          setFormHeight={setFormHeight}
          slide1Ref={slide1}
          slide3Ref={slide3}
          shippingPrice={shippingPrice}
          setShippingPrice={setShippingPrice}
        />
        <PaymentMethod
          setSlide={setSlide}
          setFormHeight={setFormHeight}
          slide2Ref={slide2}
        />
      </form>
    </div>
  );
};

export default CheckoutPage;
