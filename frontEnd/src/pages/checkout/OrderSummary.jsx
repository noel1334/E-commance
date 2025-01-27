import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const OrderSummary = ({
  cart,
  totalPrice,
  setSlide,
  setFormHeight,
  slide1Ref,
  slide3Ref,
  shippingPrice,
  setShippingPrice,
}) => {
  return (
    <section>
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
            onClick={() => setShippingPrice(2700)}
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
            onClick={() => setShippingPrice(4500)}
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
          thousandSeparator
          prefix="₦"
          displayType="text"
        />
      </div>
      <div className="btn-container">
        <Link to="/shop">
          <p>Back to cart</p>
        </Link>
        <div className="btn-next">
          <p
            onClick={() => {
              setSlide(0);
              setFormHeight(slide1Ref.current.clientHeight + 250);
            }}
          >
            Previous
          </p>
          <p
            onClick={() => {
              setSlide(2);
              setFormHeight(slide3Ref.current.clientHeight + 250);
            }}
          >
            Next
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
