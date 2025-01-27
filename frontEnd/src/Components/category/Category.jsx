import { shopCategory } from "../../assets/Constant";
import axios from "axios";
import "./category.css";

const Category = () => {
  const handleFilter = async (items) => {
    const res = await axios.get(
      `http://localhost:5000/api/products/filter?query=${items}`
    );
    console.log(res.data);
  };

  return (
    <div className="shop-container">
      <div>
        <h3>SHOP BY CATEGORY</h3>
      </div>
      <ul className="sup-nav">
        {shopCategory.map(function (items) {
          return (
            <li
              className="supNav-list"
              onClick={() => {
                handleFilter(items);
              }}
            >
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
