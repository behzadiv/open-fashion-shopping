import "./ProductList.css";
import Product from "../product/Product";
import { useState } from "react";
import foewardArrow from "../../assets/icons/ForwardArrow.png"
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";
const ProductList = ({ data }) => {
  const [moreProduct, setMoreProduct] = useState(false);
  const dispatch = useDispatch()
  const addProduct = (id)=>{
    let selectedId= Number(id.productId)
    const myProduct =data.filter((product)=>product.id === selectedId)
    //pass as object
    dispatch(addToCart(myProduct[0]))
  }
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
                  productId = {product.id}
                 addProduct={(e)=>addProduct(e)}
                />
              ))
          : data.map((product) => (
              <Product
                key={product.id}
                productImage={product.image}
                productTitle={product.title}
                productPrice={product.price}
                productId = {product.id}
                addProduct={(e)=>addProduct(e)}
              />
            ))}
      </div>
    );
  };
  return (
    <section>
      {renderProductList()}
      <div className={!moreProduct? "showProduct showProduct-more":"showProduct showProduct-less"}  onClick={() => setMoreProduct(!moreProduct ? true : false)}>
        <h2>
          {!moreProduct ? "Explore More" : "Less"}
        </h2>
        <span><img src={foewardArrow} alt="" /></span>
      </div>
    </section>
  );
};

export default ProductList;
