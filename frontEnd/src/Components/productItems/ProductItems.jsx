import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import "./productItems.css";

const ProductItems = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-discount">-{item.discount}%</div>
        <img src={item.img} alt={item.name} className="product-image" />
        <div className="product-overlay">
          <button className="cart-button" onClick={addToCart}>
            <FaShoppingBag />
          </button>
        </div>
      </div>
      <div className="product-details">
        <div className="product-name-icons">
          <h3 className="product-name">{item.name}</h3>
          <FaRegHeart className="wishlist-icon" onClick={addToCart} />
        </div>
        <div className="product-prices">
          <strike className="original-price">₦{item.price}</strike>
          <span className="discounted-price">
            ₦{item.price - (item.discount / 100) * item.price}
          </span>
        </div>
        <Link to={`/product/${item._id}`} className="quick-view-button">
          Quick View
        </Link>
      </div>
    </div>
  );
};

export default ProductItems;
