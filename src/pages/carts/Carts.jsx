import close from "../../assets/icons/Close.png";
import shoppingBag from "../../assets/icons/shoppingBag2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCarts,
  decrementCart,
} from "../../components/feature/cart/cartsSlice";
import "./Carts.css";
import {NavLink, useNavigate } from "react-router-dom";
const Carts = () => {
  const navigate =useNavigate() 
  const { total, carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const renderCarts = ()=>{
    return <>
        <div className="carts-body">
          {carts.map((item) => {
            return (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="checkout-item-desc">
                  <NavLink to={`/product/${item.id}`} state={{product:item}}><h3>{item.title}</h3></NavLink>
                  <div className="checkout-item-qty">
                    <p onClick={() => dispatch(decrementCart(item))}>-</p>
                    <p>{item.quantity}</p>
                    <p onClick={() => dispatch(addToCarts(item))}>+</p>
                  </div>
                  <p className="checkout-item-price">
                    ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        <span className="carts-border"></span>
        </div>
        <div className="carts-total">
          <h1>SUB.TOTAL</h1>
          <span className="carts-total-price">${total.toFixed(2)}</span>
        </div>
        <div>
            <p className="cart-tax-messeage">*shipping charges, taxes and discount codes are calculated at the time of accounting.</p>
        </div>
    </>
  }
  return (
    <section className="container">
      <div className="carts-container">
        <div className="carts-header">
          <span onClick={()=>navigate(-1)}> {/*push previous route  */}
            <img src={close} alt="" />
          </span>
          <h1>CARTS</h1>
        </div>
        {carts.length>0? renderCarts() : <p className="cart-empty">You have no items in your Shopping Bag</p>}
        <NavLink to={carts.length? "/signup?redirect=/checkout" : "/"} className="btn btn-primary cart-btn">
          <span>
            <img src={shoppingBag} alt="" />
          </span>
          <p>{carts.length ? "CHECKOUT" : "CONTINUE SHOPPING"}</p>
        </NavLink>
      </div>
    </section>
  );
};

export default Carts;
