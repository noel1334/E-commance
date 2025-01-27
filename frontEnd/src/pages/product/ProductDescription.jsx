import { useDispatch } from "react-redux";
import { productSample } from "../../assets/Constant";
import { add } from "../../redux/cartSlice";
import "./productDescription.css";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import myKind from "../../assets/image/myKind-adrenal.png";
import { useEffect, useState } from "react";
import axios from "axios";
import img from "../../assets/image/green-tea.png";

const ProductDescription = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [item, setItem] = useState();
  const fetch = async () => {
    const res = await axios.get(`http://localhost:5000/api/products/${id}`);
    setItem(res.data);
  };
  useEffect(() => {
    fetch();
  });

  const addToCart = () => {
    dispatch(add(item));
  };
  return (
    <div className="discription-container">
      <div className="product-disc">
        <div className="product-dis-img">
          <div className="percent">-{item?.discount}%</div>
          <div className="product-disc-image">
            <img src={img} alt="" className="imgg" />
          </div>
        </div>
        <div className="dis-infor">
          <div className="dis-title">
            <h3>{item?.name}</h3>
            <div className="price">
              <strike>₦{item?.price} </strike>
              <b>₦30,000.00</b>
            </div>
          </div>
          <div className="dis-text">
            <b>DESCRIPTION</b>
            <p>{item?.desc}</p>
          </div>
          <div className="qauntity-container">
            <div className="qauntity">
              <p>-</p>
              <input type="number" value={item?.quantity} />
              <p>+</p>
            </div>
            <div className="qauntity-btn">
              <b onClick={addToCart}>ADD TO CART </b>
              <Link to="/shop">
                <b className="VIEW ">VIEW CART</b>
              </Link>
            </div>
          </div>
          <div className="socio-container2">
            <div className="social-ic">
              <div className="icon">
                <FaFacebookF fill="" />
              </div>
              <p className=" try">Facebook</p>
            </div>
            <div className="social-ic">
              <div className="icon">
                <FaTwitter fill="" />
              </div>
              <p className=" try">Twitter</p>
            </div>
            <div className="social-ic">
              <div className="icon">
                <FaInstagram fill="" />
              </div>
              <p className=" try">Instagram</p>
            </div>
            <div className="social-ic">
              <div className="icon">
                <FaEnvelope fill="" />
              </div>
              <p className=" try">Email</p>
            </div>
            <div className="social-ic">
              <div className="icon">
                <FaWhatsapp fill="" />
              </div>
              <p className=" try">Whatsapp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
