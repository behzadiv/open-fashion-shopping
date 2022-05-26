import { NavLink } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import backwardArrow from "../../assets/icons/BackwardArrow.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <section className="notFound-container container">
      <h1>PAGE NOT FOUND</h1>

      <img src={notFound} alt="" />
      <p className="notFound-text">
        We can't find the page you looking for, it will return to the
      </p>
      <NavLink to={"/"} className="notFound-btn">
        <span>
          <img src={backwardArrow} alt="" />
        </span>
        <span>HOME PAGE</span>
      </NavLink>
    </section>
  );
};

export default NotFound;
