import "./ProductList.css";
import Product from "../product/Product"
const ProductList = ({data}) => {
  
  const renderProductList = () => {
    return (
      <div className="productList">
        {data.map((product) => (
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
      <h1 className="explore-more">
          <a>Explore More</a>
        </h1>
    </section>
  );
};

export default ProductList;
