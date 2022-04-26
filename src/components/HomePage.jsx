import "./HomePage.css";
import Badge from "../common/Badge";
import ProductList from "./productList/ProductList";
import { getAllProductsData } from "./feature/allProducts/allProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Prada from "../assets/brands/Prada.png";
import Burberry from "../assets/brands/Burberry.png";
import Catier from "../assets/brands/Catier.png";
import Gucci from "../assets/brands/Gucci.png";
import Boss from "../assets/brands/Boss.png";
import Tiffany from "../assets/brands/Tiffany.png";
import Loading from "./loading/Loading";
const HomePage = ({ category }) => {
  const { data, loading, error } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsData(category));
  }, [category]);

  if (loading) return <Loading/>;
  if (error) return <p>rejected</p>;

  return (
    <div>
      <ProductList data={data} />
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
    </div>
  );
};

export default HomePage;
