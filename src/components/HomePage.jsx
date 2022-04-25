import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Badge from "../common/Badge";
import { getAllProductsData } from "./feature/allProducts/allProductSlice";
import "./HomePage.css";

const HomePage = () => {
  const {data,loading,error} = useSelector(state=>state.allProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsData())
  }, []);
  console.log(data[(0, 3)]);
  const selectCategory = () => {};
  if(loading)return <p>loading...</p>
  if(error)return <p>rejected</p>
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
      <div className="productList">
        {data.slice(0,4).map((product) => (
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
