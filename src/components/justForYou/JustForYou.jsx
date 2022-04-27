import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Badge from "../../common/Badge";
import { getAllProductsData } from "../feature/allProducts/allProductSlice";
import { getJustForYou } from "../feature/justForYou/justForYouSlice";
import Loading from "../loading/Loading";
import Product from "../product/Product";
import "./JustForYou.css"
const JustForYou = () => {
  const { data, loading, error } = useSelector((state) => state.justForYou);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJustForYou());
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  return (
    <section className="justforyou-container container">
      <h1>JUST FOR YOU</h1>
      <Badge/>
      <div className="justforyou">
        {data.slice(14,19).map((product) => {
          return (
            <Product
              key={product.id}
              productImage={product.image}
              productTitle={product.title}
              productPrice={product.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default JustForYou;
