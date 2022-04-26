import { getAllProductsData } from "../feature/allProducts/allProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import Prada from "../../assets/brands/Prada.png";
import Burberry from "../../assets/brands/Burberry.png";
import Catier from "../../assets/brands/Catier.png";
import Gucci from "../../assets/brands/Gucci.png";
import Boss from "../../assets/brands/Boss.png";
import Tiffany from "../../assets/brands/Tiffany.png";
import Badge from "../../common/Badge";
import Product from "../product/Product";

const ProductList = () => {
  const { data, loading, error } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsData());
  }, []);
  console.log(data[(0, 3)]);
  if (loading) return <p>loading...</p>;
  if (error) return <p>rejected</p>;
  const renderProductList = () => {
    return (
      <div className="productList">
        {data.slice(0, 4).map((product) => (
          <Product
            key={product.id}
            productImage={product.image}
            productTitle={product.title}
            productPrice={product.price}
          />
        ))}
        <h1>
          <a href="">Explore More</a>
        </h1>
      </div>
    );
  };
  return (
    <section>
      {renderProductList()}

      <Badge />
      <div className="brands container">
        <span>
          <img src={Prada} alt="" />
        </span>
        <span>
          <img src={Burberry} alt="" />
        </span>
        <span>
          <img src={Boss} alt="" />
        </span>
        <span>
          {" "}
          <img src={Catier} alt="" />
        </span>
        <span>
          <img src={Gucci} alt="" />
        </span>
        <span>
          <img src={Tiffany} alt="" />
        </span>
      </div>
      <Badge />
    </section>
  );
};

export default ProductList;
