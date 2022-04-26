import "./HomePage.css";
import Badge from "../common/Badge";
import ProductList from "./productList/ProductList";

const HomePage = () => {
  const selectCategory = () => {};
  
  return (
    <div className="homepage">
      <h2 className="homepage-title">NEW ARRIVAL</h2>
      <Badge />
      <div className="product-category">
        <h3 className="title" onClick={(e) => selectCategory(e)}>
          All
        </h3>
        <h3 className="title" onClick={(e) => selectCategory(e)}>
          Apparel
        </h3>
        <h3 className="title" onClick={(e) => selectCategory(e)}>
          Dress
        </h3>
        <h3 className="title" onClick={(e) => selectCategory(e)}>
          Tshirt
        </h3>
        <h3 className="title" onClick={(e) => selectCategory(e)}>
          Bag
        </h3>
      </div>
      <ProductList/>
     
    </div>
  );
};

export default HomePage;
