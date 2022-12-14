import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import myKind from "../assets/image/myKind-adrenal.png";
import strawberry from "../assets/image/uva-ursi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import { Bestsaller } from "../assets/FutureConstant";

const BestSellaar = () => {
  return (
    <div className="swiper-saller">
      <b>BEST SELLERS</b>
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
          {Bestsaller.map((item) => {
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
                        <p>{item.desc}</p>
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

export default BestSellaar;
