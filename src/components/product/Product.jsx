import "./Product.css";
const Product = ({ productImage, productTitle, productPrice,productId,addProduct}) => {
  
  return (
    <div className="card">
      <img src={productImage} alt="" />
      <div className="card-body">
        <h3 className="product-title">{productTitle}</h3>
        <h2 className="product-price">${productPrice}</h2>
      </div>
        <button onClick={()=>addProduct({productId})} className="btn btn-primary">Add to cart</button>
    </div>
  );
};

export default Product;
