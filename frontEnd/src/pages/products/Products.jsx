import ProductItems from "../../Components/productItems/ProductItems";
import { productSample } from "../../assets/Constant";
import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";

const AllProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/api/products/");
      setData(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="allproduct">
      {productSample.map((item) => (
        <ProductItems key={item._id} item={item} />
      ))}
    </div>
  );
};

export default AllProduct;
