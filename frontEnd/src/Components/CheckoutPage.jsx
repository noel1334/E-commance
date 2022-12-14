import { useEffect, useState, useRef } from "react";
import { Country, State, City } from "country-state-city";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const countries = Country.getAllCountries();
  const [country, setCountry] = useState("");
  const [state, setState] = useState([]);
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState([]);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [slide, setSlide] = useState(0);
  const cart = useSelector((state) => {
    return state.cart.cart;
  });

  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  console.log(slide3);

  const [formHeight, setFormHeight] = useState(1150);
  const styles = {
    formSlide: {
      // transform: `translateX(${-100 * slide}%)`,
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

  let totalPrice = () => {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div>
      {/* <MultiStep activeStep={0} showNavigation={true} steps={steps} /> */}
      <div className="checkout_container" style={{ height: `${formHeight}px` }}>
        <div className="Shipping-container">
          <div className="Shipping-text">
            <p style={{ backgroundColor: `${slide == 0 ? "blue" : "green"}` }}>
              1
            </p>
            <p>Billing & Shipping</p>
          </div>
          <div className="Shipping-text">
            <p style={{ backgroundColor: `${slide == 1 ? "blue" : "green"}` }}>
              2
            </p>
            <p>Order</p>
          </div>
          <div className="Shipping-text">
            <p
              style={{
                position: "relative",
                zIndex: "3",
                backgroundColor: `${slide == 2 ? "blue" : "green"}`,
              }}
            >
              3
            </p>
            <p>Payment</p>
          </div>
        </div>
        <form className="multi_step_form" style={styles.formSlide}>
          <section ref={slide1}>
            <div className="namediv">
              <div className="nametext">
                <label htmlFor="fname">
                  First name<span>*</span>
                </label>
                <input type="text" id="fname" />
              </div>
              <div className="nametext">
                <label htmlFor="lname">
                  Last name <span>*</span>
                </label>
                <input type="text" id="lname" />
              </div>
            </div>
            <div className="nametext">
              <label htmlFor="cname">Company name (optional)</label>
              <input type="text" id="cname" />
            </div>
            <div className="nametext">
              <label htmlFor="Country">Country / Region *</label>
              <select
                name=""
                id="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              >
                <option hidden selected>
                  Select Country
                </option>
                {countries.map((item) => {
                  return <option value={item.isoCode}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="nametext">
              <label htmlFor="State">State *</label>
              <select
                onChange={(e) => {
                  setStateCode(e.target.value);
                }}
                id="State"
              >
                <option hidden selected>
                  Select State
                </option>
                {state?.map((item) => {
                  return <option value={item.isoCode}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="nametext">
              <label htmlFor="">city *</label>
              <select name="" id="city">
                <option hidden selected>
                  Select City
                </option>
                {city.map((item) => {
                  return <option value={item.isoCode}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="nametext">
              <label htmlFor="Street">Street address *</label>
              <input
                type="text"
                id="Street"
                placeholder="House Number And Street Name"
              />
            </div>
            <div className="nametext">
              <label htmlFor="Email">Email address *</label>
              <input
                type="email"
                id="Email"
                placeholder="Please youre email address is require"
              />
            </div>
            <div className="nametext">
              <label htmlFor="Phone">Phone *</label>
              <input
                type="phone"
                id="Phone"
                placeholder="Please phone number is require"
              />
            </div>
            <div className="nametext">
              <label htmlFor="Order">Order notes (optional)</label>
              <textarea
                name=""
                id="Order"
                cols="30"
                rows="10"
                placeholder="note about your order e.g specail note for delivery"
              ></textarea>
            </div>
            <div className="btn">
              <Link to="/shop">
                <p>Back to cart</p>
              </Link>
              <p
                onClick={() => {
                  setSlide(1);
                  setFormHeight(slide2.current.clientHeight + 250);
                }}
              >
                Next
              </p>
            </div>
          </section>
          <section ref={slide2}>
            {/* <div className="Shipping-container">
              <div className="Shipping-text">
                <p>1</p>
                <p>Billing & Shipping</p>
              </div>
              <div className="Shipping-text">
                <p>2</p>
                <p>Order</p>
              </div>
              <div className="Shipping-text">
                <p style={{ position: "relative", zIndex: "3" }}>3</p>
                <p>Payment</p>
              </div>
            </div> */}
            <div className="shopcart-container2">
              <table>
                <thead>
                  <th>PRODUCT</th>
                  <th></th>
                  <th></th>
                </thead>

                {cart.length < 1 ? (
                  <p style={{ padding: "15px" }}>Nothing in cart</p>
                ) : (
                  cart.map((item) => {
                    return (
                      <tr>
                        <td>
                          <div className="shop-img">
                            <img src={item.img} alt="" className="imgg" />
                          </div>
                        </td>
                        <td colSpan={2}>
                          <div
                            className="disciption"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "15px",
                            }}
                          >
                            <Link to={`/product/${item.id}`}>
                              <p>{item.desc + " " + `* ${item.quantity}`}</p>
                            </Link>
                            <CurrencyFormat
                              value={item.price * item.quantity}
                              thousandSeparator={true}
                              prefix={"₦"}
                              displayType={"text"}
                            />
                          </div>
                        </td>
                        {/* <td>hello</td> */}
                      </tr>
                    );
                  })
                )}
              </table>
              <div className="subTotal">
                <p>SUBTOTAL</p>
                <CurrencyFormat
                  value={totalPrice()}
                  thousandSeparator={true}
                  prefix={"₦"}
                  displayType={"text"}
                />
              </div>
            </div>
            <div className="deliverytype">
              <div className="delivery">
                <input
                  type="radio"
                  name="deliveryType"
                  id="ordinary"
                  onClick={() => {
                    setShippingPrice(2700);
                  }}
                />
                <label htmlFor="ordinary">
                  Delivery in 4-7 Working Days <span>₦2700</span>
                </label>
              </div>

              <div className="delivery">
                <input
                  type="radio"
                  name="deliveryType"
                  id="dhl"
                  onClick={() => {
                    setShippingPrice(4500);
                  }}
                />
                <label htmlFor="dhl">
                  DHL in(3-5 Working Days)<span>₦4500</span>
                </label>
              </div>
            </div>

            <div className="total">
              <p>TOTAL</p>
              <CurrencyFormat
                value={totalPrice() + shippingPrice}
                thousandSeparator={true}
                prefix={"₦"}
                displayType={"text"}
              />
            </div>

            <div>
              <div className="btn-container">
                <Link to="/shop">
                  <p>Back to cart</p>
                </Link>
                <div className="btn-next">
                  <p
                    onClick={() => {
                      setSlide(0);
                      setFormHeight(1150);
                    }}
                  >
                    Previous
                  </p>
                  <p
                    onClick={() => {
                      setSlide(2);
                      setFormHeight(slide3.current.clientHeight + 250);
                    }}
                  >
                    Next
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section ref={slide3}>
            {/* <div className="Shipping-container">
              <div className="Shipping-text">
                <p>1</p>
                <p>Billing & Shipping</p>
              </div>
              <div className="Shipping-text">
                <p>2</p>
                <p>Order</p>
              </div>
              <div className="Shipping-text">
                <p style={{ position: "relative", zIndex: "3" }}>3</p>
                <p>Payment</p>
              </div>
            </div> */}

            <div className="deliverytype">
              <div>
                <h3>PAYMENT METHOD</h3>
              </div>
              <div className="delivery" style={{ marginBottom: "0" }}>
                <input type="radio" name="deliveryType" />
                <label htmlFor="ordinary">Direct Bank Transfer</label>
              </div>
              <p style={{ margin: "0 10px", paddingBottom: "5px" }}>
                Make your payment directly into our bank account. Please use
                your Order Id as your payment preference. Your orders will not
                be shipped until your funds have been cleared from your account
              </p>
            </div>

            <div className="total" style={{ fontWeight: "1" }}>
              <p style={{ marginLeft: "10px", padding: "10px 0" }}>
                Your personal Details will be use to process your Order, Support
                aypur expirence throughout this website, and for other purposes
                discribed in our privacy policy.
              </p>
            </div>
            <div className="order-btn">
              <button>PLACE ORDER</button>
            </div>
            <div>
              <div className="btn-container">
                <Link to="/shop">
                  <p>Back to cart</p>
                </Link>
                <div className="btn-next">
                  <p
                    onClick={() => {
                      setSlide(1);
                      setFormHeight(slide2.current.clientHeight + 250);
                    }}
                  >
                    Previous
                  </p>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
