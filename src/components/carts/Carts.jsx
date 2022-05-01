import close from "../../assets/icons/Close.png";
import shoppingBag from "../../assets/icons/shoppingBag2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCarts,
  decrementCart,
} from "../../components/feature/cart/cartsSlice";
import "./Carts.css";
import { NavLink } from "react-router-dom";
const Carts = () => {
  const { total, carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  return (
    <section className="container">
      <div className="carts-container">
        <div className="carts-header">
          <NavLink to="/">
            <img src={close} alt="" />
          </NavLink>
          <h1>CARTS</h1>
        </div>
        <div className="carts-body">
          {carts.map((item) => {
            return (
              <div className="checkout-item">
                <img src={item.image} alt="" />
                <div className="checkout-item-desc">
                  <h3>{item.title}</h3>
                  <p></p>
                  <div className="checkout-item-qty">
                    <p onClick={() => dispatch(decrementCart(item))}>-</p>
                    <p>{item.quantity}</p>
                    <p onClick={() => dispatch(addToCarts(item))}>+</p>
                  </div>
                  <p className="checkout-item-price">
                    ${Number(item.price) * Number(item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <span className="carts-border"></span>
        <div className="carts-total">
          <h1>SUB.TOTAL</h1>
          <span className="carts-total-price">${total.toFixed(2)}</span>
        </div>
        <NavLink to="/checkout" className="btn btn-primary cart-btn">
          <span>
            <img src={shoppingBag} alt="" />
          </span>
          <p>CHECKOUT</p>
        </NavLink>
      </div>
    </section>
  );
};

export default Carts;
