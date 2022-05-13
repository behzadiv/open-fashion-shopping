import "./ProductList.css";
import Product from "../product/Product";
import { useState } from "react";
import foewardArrow from "../../assets/icons/ForwardArrow.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, decrementCart } from "../feature/cart/cartsSlice";
import ProductPage from "../productDetail/ProductPage";
const ProductList = ({ data }) => {
  const [moreProduct, setMoreProduct] = useState(false);
  const { carts } = useSelector((state) => state.carts);
  
  const dispatch = useDispatch();
  const addProduct = (id) => {
    let selectedId = Number(id);
    const myProduct = data.filter((product) => product.id === selectedId);
    //pass as object
    console.log(myProduct[0]);
    dispatch(addToCarts(myProduct[0]));
  };
  
  const renderProductList = () => {
    return (
      <div className="productList">
        {!moreProduct
          ? data
              .slice(0, 4)
              .map((product) => (
                <Product
                  key={product.id}
                  productImage={product.image}
                  productTitle={product.title}
                  productPrice={product.price}
                  productId={product.id}
                  addProduct={() => addProduct(product.id)}
                  isProductInCart = {carts.find((item) => item.id === product.id)}
                  product={product}
                />
              ))
          : data.map((product) => (
              <Product
                key={product.id}
                productImage={product.image}
                productTitle={product.title}
                productPrice={product.price}
                productId={product.id}
                addProduct={() => addProduct(product.id)}
                isProductInCart = {carts.find((item) => item.id === product.id)}
                product={product}
              />
            ))}
      </div>
    );
  };
  
  return (
    <section>
      {renderProductList()}
      <div
        className={
          !moreProduct
            ? "showProduct showProduct-more"
            : "showProduct showProduct-less"
        }
        onClick={() => {
          if (!moreProduct) {
            setMoreProduct(true);
          } else {
            setMoreProduct(false);
            window.scroll({ top: 1132, behavior: "smooth" });
          }
        }}
      >
        <h2>{!moreProduct ? "Explore More" : "Less"}</h2>
        <span>
          <img src={foewardArrow} alt="" />
        </span>
      </div>
    </section>
  );
};

export default ProductList;
