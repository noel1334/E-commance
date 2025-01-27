import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import myKind from "../../assets/image/myKind-adrenal.png";
import strawberry from "../../assets/image/uva-ursi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "./bestSeller.css";
import { Bestsaller } from "../../assets/FutureConstant";
import ProductItems from "../productItems/ProductItems";

const BestSeller = () => {
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
                <ProductItems key={item._id} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
