import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { remove, increase, decrease } from "../../redux/cartSlice";
import myKind from "../../assets/image/myKind-adrenal.png";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="shopcart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length < 1 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="shop-img">
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item._id)}
                      >
                        ×
                      </button>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="product-img"
                      />
                    </div>
                  </td>
                  <td>
                    <Link to={`/product/${item._id}`} className="product-link">
                      {item.name}
                    </Link>
                  </td>
                  <td>
                    <CurrencyFormat
                      value={item.price}
                      displayType={"text"}
                      thousandSeparator
                      prefix="₦"
                    />
                  </td>
                  <td>
                    <div className="quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch(decrease(item._id))}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="quantity-input"
                      />
                      <button
                        className="quantity-btn"
                        onClick={() => dispatch(increase(item._id))}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <b>
                      <CurrencyFormat
                        value={item.price * item.quantity}
                        displayType={"text"}
                        thousandSeparator
                        prefix="₦"
                      />
                    </b>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-section">
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
