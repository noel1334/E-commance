import { useDispatch } from "react-redux";
import { productSample } from "../assets/Constant";
import { add } from "../redux/cartSlice";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import myKind from "../assets/image/myKind-adrenal.png";
import { useState } from "react";

const ProductDiscription = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [item, setState] = useState(productSample[id - 1]);

  const addToCart = () => {
    dispatch(add(item));
  };
  return (
    <div className="discription-container">
      <div className="product-disc">
        <div className="product-dis-img">
          <div className="percent">-8%</div>
          <div className="product-disc-image">
            <img src={item.img} alt="" className="imgg" />
          </div>
        </div>
        <div className="dis-infor">
          <div className="dis-title">
            <h3>{item.desc}</h3>
            <div className="price">
              <strike>₦{item.price} </strike>
              <b>₦30,000.00</b>
            </div>
          </div>
          <div className="dis-text">
            <b>DESCRIPTION</b>
            <p>
              RED RAPSBERRY LEAF TEA BAGS – 100 Tea Bags filled with premium red
              raspberry leaf from Germany. ORGANIC RED RASPBERRY LEAF TEA – The
              tea is filled into tea bags and packed into foil-lined kraft bags
              in California 100 ECO-CONSCIOUS TEA BAGS – Our premium tea bags
              are constructed of Abacá Hemp Fiber Paper. They are free of dyes,
              adhesive, glue and chlorine bleach. No staples, strings, bags or
              extra waste – just delicious tea! CERTIFIED USDA ORGANIC & NON-GMO
              – All our products are certified USDA Organic and certified
              Non-GMO. Look for the USDA Organic and Non-GMO Project seals on
              our products! USDA Organic* Raspberry Tea Bags (Rubus idaeus)
              Though known for its sweet and tangy berries, the leaves of the
              raspberry plant produce a light and refreshing herbal tea. Our
              organic raspberry leaf tea produces a smooth and mild flavor
              similar to black tea, but without the caffeine! Add a bit of honey
              or sugar for a sweeter sip. FGO sells certified organic, 100% Raw
              Raspberry Leaf Tea from Germany in resealable bags of 20 or 100
              tea bags. Individual Tea Bags in Resealable Bags
            </p>
          </div>
          <div className="qauntity-container">
            <div className="qauntity">
              <p>-</p>
              <input type="number" />
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

export default ProductDiscription;
