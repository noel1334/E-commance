import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import { productFeture } from "../assets/FutureConstant";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";

const FeatureProduct = () => {
  return (
    <div className="swiper-main">
      <b>FEATURED PRODUCTS</b>
      <div className="swiper-container">
        <Swiper
          modules={[FreeMode, Autoplay]}
          autoplay
          loop={true}
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={30}
          loopFillGroupWithBlank={true}
        >
          {productFeture.map((item) => {
            return (
              <SwiperSlide>
                <div className="product-container">
                  <div className="product-items">
                    <div className="percent">-{item.discount}%</div>
                    <div className="product-image">
                      <img src={item.img} alt="" className="imgg" />
                      <div className="image-cart">
                        <FaShoppingBag fill="darkgray" />
                      </div>
                    </div>
                    <div className="quick-view">
                      <p>Quick view</p>
                    </div>
                    <div className="img-infor">
                      <div>
                        <p>{item.desc} </p>
                      </div>
                      <div className="icons">
                        <FaRegHeart />
                      </div>
                    </div>
                  </div>
                  <div className="product-price">
                    <strike>₦{item.price}</strike>
                    <p>₦{item.price - (item.discount / 100) * item.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProduct;
