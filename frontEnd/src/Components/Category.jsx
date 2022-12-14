import { shopCategory } from "../assets/Constant";

const Category = () => {
  return (
    <div className="shop-container">
      <div>
        <h3>SHOP BY CATEGORY</h3>
      </div>
      <ul className="sup-nav">
        {shopCategory.map(function (items) {
          return <li className="supNav-list">{items}</li>;
        })}
      </ul>
    </div>
  );
};

export default Category;
