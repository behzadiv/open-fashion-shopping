import "./ProductList.css";
import Product from "../product/Product";
import { useState } from "react";
import foewardArrow from "../../assets/icons/ForwardArrow.png"
const ProductList = ({ data }) => {
  const [moreProduct, setMoreProduct] = useState(false);
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
                />
              ))
          : data.map((product) => (
              <Product
                key={product.id}
                productImage={product.image}
                productTitle={product.title}
                productPrice={product.price}
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
