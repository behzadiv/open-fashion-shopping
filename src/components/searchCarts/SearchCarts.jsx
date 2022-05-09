import "./SearchCarts.css";
import search from "../../assets/icons/Search.png";
import close from "../../assets/icons/Close.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProductsData } from "../feature/allProducts/allProductSlice";
const SearchCarts = () => {
  const { state } = useLocation(); //recieve state(allProducts)by navlink to our search function has hight speed
  const allProducts = state.allProducts;
  const navigate = useNavigate();
  const [resultSearch, setResultSearch] = useState([]);

  const changeHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (allProducts.length) {
      const searchedCarts = allProducts.filter((item) => {
        if (inputValue && item.title.toLowerCase().includes(inputValue)) {
          return item;
        }
      });
      setResultSearch(searchedCarts);
    }
  };
  return (
    <section className="search-container container">
      <div className="search-header">
        <input
          type="text"
          placeholder="Search items"
          onChange={(e) => changeHandler(e)}
        />
        <span className="search-icon">
          <img src={search} alt="" />
        </span>
        <span className="close-icon" onClick={() => navigate(-1)}>
          <img src={close} alt="" />
        </span>
      </div>
      <div className="search-body">
        {resultSearch.map((cart) => {
          return (
            <div key={cart.id}>
              <div className="result-container">
                <span>
                  <img src={cart.image} />
                </span>
                <p className="result-title">{cart.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SearchCarts;
