import {
  FaFacebookF,
  FaInstagram,
  FaPhoneVolume,
  FaRegHeart,
  FaShoppingBag,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  console.log(cart);
  return (
    <div className="navegation">
      <div className="header">
        <div className="dis_header">
          <p>Laraholic: Vitamins, Supplements & Natural Health Products.</p>
        </div>
        <div className="socio-icons">
          <div className="icons">
            <FaInstagram fill="white" />
          </div>
          <div className="icons">
            <FaFacebookF fill="white" />
          </div>
          <div className="icons">
            <FaTwitter fill="white" />
          </div>
        </div>
      </div>
      <div className="secondheader">
        <div className="logoContent">
          <div className="logo">
            <Link to="/">
              <h1>LARAHOLIC</h1>
            </Link>
          </div>
          <div className="inputText">
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>
        </div>
        <div className="hot-line">
          <div className="phone-icon">
            <FaPhoneVolume />
          </div>
          <div className="hot">
            <p>Hot-line</p>
            <p>(+234) 809-8361-220</p>
          </div>
        </div>
        <div className="user-icons">
          <div className="icons">
            <Link to="/auth">
              <FaUserAlt fill="gray" />
            </Link>
          </div>
          <div className="icons">
            <FaRegHeart />
          </div>
          <div className="icons">
            <Link to="/shop">
              <FaShoppingBag fill="gray" className="icon cart" />
            </Link>
            <p className="couut">{cart.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
