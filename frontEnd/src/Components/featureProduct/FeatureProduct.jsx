import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import { productFeture } from "../../assets/FutureConstant";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "./FeatureProduct.css";
import ProductItems from "../productItems/ProductItems";

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
                <ProductItems key={item._id} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProduct;
