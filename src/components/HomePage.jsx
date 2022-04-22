import { useEffect, useState } from "react";
import Badge from "../common/Badge";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data[(0, 3)]);
const selectCategory=()=>{

}
  return (
    <div className="homepage">
        <h2 className="homepage-title">NEW ARRIVAL</h2>
        <Badge/>
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
      <div className="productList">
        {data.slice(0, 4).map((product) => (
          <div className="container">
            <div className="card">
              <img src={product.image} alt="" />
              <div className="card-body">
                <h3 className="product-title">{product.title}</h3>
                <h2 className="product-price">${product.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
