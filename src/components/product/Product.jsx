import { useDispatch, useSelector } from "react-redux";
import { decrementCart } from "../feature/cart/cartsSlice";
import "./Product.css";
import trash from "../../assets/icons/trash.png"
const Product = ({
  productImage,
  productTitle,
  productPrice,
  productId,
  addProduct,
  decrementProduct,
  isProductInCart
}) => {
  // const { carts } = useSelector((state) => state.carts);
  // const productInCart = carts.find((item) => item.id === productId)
  // console.log(productInCart);
  const dispatch=useDispatch()
  return (
    <div className="card">
      <img src={productImage} alt="" className="card-img"/>
      <div className="card-body">
        <h3 className="product-title">{productTitle}</h3>
        <h2 className="product-price">${productPrice}</h2>
      </div>
      <div className="card-btn">
        {isProductInCart ? (
          <div className="in-cart-style">
            <span onClick={()=>dispatch(decrementCart(isProductInCart))}>{isProductInCart.quantity>1 ? "-": <img src={trash} className="trash-icon" />}</span>
            <span>
              {isProductInCart.quantity}
            </span>
            <span onClick={() => addProduct({ productId })}>+</span>
          </div>
        ) : (
          <div onClick={() => addProduct({ productId })} className="btn btn-primary">Add to cart</div>
        )}
      </div>
    </div>
  );
};

export default Product;
