import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItems = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
  };
  return (
    <div className="product-container">
      <div className="product-items">
        <div className="percent">-{item.discount}%</div>
        <div className="product-image">
          <img src={item.img} alt="" className="imgg" />
          <div className="image-cart">
            <FaShoppingBag fill="darkgray" onClick={addToCart} />
          </div>
        </div>
        <div className="quick-view">
          <Link to={`/product/${item.id}`}>
            <p>Quick view</p>
          </Link>
        </div>
        <div className="img-infor">
          <div>
            <p>{item.desc}</p>
          </div>
          <div className="icons">
            <FaRegHeart onClick={addToCart} />
          </div>
        </div>
      </div>
      <div className="product-price">
        <strike>₦{item.price}</strike>
        <p>₦{item.price - (item.discount / 100) * item.price}</p>
      </div>
    </div>
  );
};

export default ProductItems;
