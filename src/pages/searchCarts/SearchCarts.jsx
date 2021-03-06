import "./SearchCarts.css";
import search from "../../assets/icons/Search.png";
import close from "../../assets/icons/Close.png";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProductsData } from "../../components/feature/allProducts/allProductSlice";
const SearchCarts = () => {
  const { state } = useLocation(); //recieve state(allProducts)by navlink to our search function has hight speed
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsData());
  }, []);
  const allProducts = useSelector((state) => state.allProducts.data);//we need to all products to searching
  const data = state.allProducts && allProducts; //untill loaded allProducts searched on categorized products that sent by state
  const navigate = useNavigate();
  const [resultSearch, setResultSearch] = useState([]);

  const changeHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (data.length) {
      const searchedCarts = data.filter((item) => {
        if (inputValue && item.title.toLowerCase().includes(inputValue)) {
          return item;
        }
      });
      setResultSearch(searchedCarts);
    }
  };
  return (
    <section className="search-container container">
      <div className="search-header container">
        <input
          type=""
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
            <NavLink to={`/product/${cart.id}`}state={{product:cart}} key={cart.id}>
              <div className="result-container">
                <span>
                  <img src={cart.image} />
                </span>
                <p className="result-title">{cart.title}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default SearchCarts;
