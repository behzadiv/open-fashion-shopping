import { useDispatch, useSelector } from "react-redux";
import { matchRoutes, NavLink, useLocation } from "react-router-dom";
import Badge from "../../common/Badge";
import "./CartPage.css";
import voucher from "../../assets/icons/Voucher.png";
import shoppingBag from "../../assets/icons/shoppingBag2.png";
import delivery from "../../assets/icons/Door to Door Delivery.png";
import { addToCarts, decrementCart } from "../feature/cart/cartsSlice";
const CartPage = () => {
  const { carts, total } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  //console.log(carts.carts);
  return (
    <section className="container">
      <div className="checkout-container">
        <h1 className="checkout-title">CHECKOUT</h1>
        <Badge />
        <div className="checkout-body">
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
        <span className="checkout-border"></span>
        <div className="checkout-voucher">
          <img src={voucher} alt="" />
          <input type="text" placeholder="Add promo code" />
          {/* <button className="btn voucher-btn">add</button> */}
        </div>
        <span className="checkout-border"></span>
        <div className="checkout-delivery">
          <img src={delivery} alt="" />
          <h2>Delivery</h2>
          <span>Free</span>
        </div>
        <span className="checkout-border"></span>
        <div className="checkout-summery">
          <div className="checkout-total">
            <h1>EST.TOTAL</h1>
            <span className="checkout-total-price">${total.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary checkout-btn">
            <span>
              <img src={shoppingBag} alt="" />
            </span>
            <p>CHECKOUT</p>
          </button>
        </div>
      </div>
      {/* <NavLink to="/">gotohome</NavLink> */}
    </section>
  );
};

export default CartPage;
