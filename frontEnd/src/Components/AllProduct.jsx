import ProductItems from "./ProductItems";
import { productSample } from "../assets/Constant";

const AllProduct = () => {
  return (
    <div className="allproduct">
      {productSample.map((item) => {
        return (
          <div key={item.id}>
            <ProductItems item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default AllProduct;
