import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Badge from "../../common/Badge";
import { getAllProductsData } from "../feature/allProducts/allProductSlice";
import { addToCarts } from "../feature/cart/cartsSlice";
import { getJustForYou } from "../feature/justForYou/justForYouSlice";
import Loading from "../loading/Loading";
import Product from "../product/Product";
import "./JustForYou.css"
const JustForYou = () => {
  const { data, loading, error } = useSelector((state) => state.justForYou);
 const[randomInt,setRandomInt]= useState()
  const dispatch = useDispatch();
  console.log(randomInt);
  useEffect(() => {
    dispatch(getJustForYou());
    setRandomInt(Math.floor(Math.random()*15))

  }, []);
  const addProduct =(id)=>{
    console.log(id);
    let selectedId= Number(id)
    const myProduct =data.filter((product)=>product.id === selectedId)
    //pass as object
    dispatch(addToCarts(myProduct[0]))
  }
  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  return (
    <section className="justforyou-container">
      <h1>JUST FOR YOU</h1>
      <Badge/>
      <div className="justforyou">
        {data.slice(randomInt,randomInt+5).map((product) => {
          return (
              <Product
              key={product.id}
              productImage={product.image}
              productTitle={product.title}
              productPrice={product.price}
              productId={product.id}
              addProduct={()=>addProduct(product.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default JustForYou;
