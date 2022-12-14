import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { remove, increase, decrease } from "../redux/cartSlice";

import myKind from "../assets/image/myKind-adrenal.png";
import strawberry from "../assets/image/uva-ursi.png";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart.cart;
  });

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="shopcart-container">
      <table>
        <thead>
          <th></th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </thead>

        {cart.length < 1 ? (
          <p style={{ padding: "15px" }}>Nothing in cart</p>
        ) : (
          cart.map((item) => {
            return (
              <tr>
                <td>
                  <div className="shop-img">
                    <p
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    >
                      x
                    </p>
                    <img src={item.img} alt="" className="imgg" />
                  </div>
                </td>
                <td>
                  <div className="disciption">
                    <Link to={`/product/${item.id}`}>
                      <p>{item.desc}</p>
                      {/* <p>Green Tea, Ceremonial grade, 156g </p> */}
                    </Link>
                  </div>
                </td>
                <td>
                  <CurrencyFormat
                    value={item.price}
                    thousandSeparator={true}
                    prefix={"₦"}
                    displayType={"text"}
                  />
                  {/* {item.price} */}
                </td>
                <td>
                  <div className="qauntity">
                    <p
                      onClick={() => {
                        dispatch(decrease(item.id));
                      }}
                    >
                      -
                    </p>
                    <input type="text" value={item.quantity} disabled />
                    <p
                      onClick={() => {
                        dispatch(increase(item.id));
                      }}
                    >
                      +
                    </p>
                  </div>
                </td>
                <td>
                  <b>
                    <CurrencyFormat
                      value={item.price * item.quantity}
                      thousandSeparator={true}
                      prefix={"₦"}
                      displayType={"text"}
                    />
                  </b>
                </td>
              </tr>
            );
          })
        )}
      </table>

      <div className="update-cart">
        {/* <p>UPDATE CART</p> */}
        <Link to="/checkout">{cart.length > 0 && <p>CHECKOUT</p>}</Link>
        {/* <p style={{ display: `${cart.length > 0 ? "block" : "none"}` }}>
          CHECKOUT
        </p> */}
      </div>
      {/* <div className="CHECKOUT">
      </div> */}
    </div>
  );
};

export default ShoppingCart;
