import "./Product.css";
const Product = ({ productImage, productTitle, productPrice }) => {
  return (
    <div className="card">
      <img src={productImage} alt="" />
      <div className="card-body">
        <h3 className="product-title">{productTitle}</h3>
        <h2 className="product-price">${productPrice}</h2>
      </div>
    </div>
  );
};

export default Product;
