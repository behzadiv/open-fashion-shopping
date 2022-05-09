import "./HomePage.css";
import Badge from "../common/Badge";
import ProductList from "./productList/ProductList";
import { getAllProductsData } from "./feature/allProducts/allProductSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "./loading/Loading";
const HomePage = () => {
  const { data, loading, error } = useSelector((state) => state.allProducts);
  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  return <ProductList data={data} />;
};

export default HomePage;
