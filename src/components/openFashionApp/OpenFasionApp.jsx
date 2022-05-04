import { useState } from "react";
import Badge from "../../common/Badge";
import HomePage from "../HomePage";
import "./OpenFashionApp.css"
import Prada from "../../assets/brands/Prada.png";
import Burberry from "../../assets/brands/Burberry.png";
import Catier from "../../assets/brands/Catier.png";
import Gucci from "../../assets/brands/Gucci.png";
import Boss from "../../assets/brands/Boss.png";
import Tiffany from "../../assets/brands/Tiffany.png";
import JustForYou from "../justForYou/JustForYou";
import cover from "../../assets/cover.png"
const OpenFashionApp = () => {
    const [category, setCategory] = useState("");
    const selectCategory = (e) => {
        let category = e.target.innerText.toLowerCase();
        let item =  document.querySelectorAll(".category-title")
        item.forEach((c)=>{if(c.classList.value!=="category-title"){
           c.classList.remove("active")
        }})
        document.getElementById((e.target.id)).classList.add("active")
        switch (category) {
          case "man":
            setCategory("men's clothing");
            break;
          case "jewelery":
            setCategory("jewelery");
            break;
          case "electronics":
            setCategory("electronics");
            break;
          case "women":
            setCategory("women's clothing");
            break;
    
          default:
            setCategory("");
            break;
        }
      };
  return (
    <div className="open-fashion-app container">
      <div className="cover-container">
        <p className="cover-text"><span>LUXURY</span><span>FASHION</span><span>&ACCESSORIES</span></p>
        <div className="cover-link"><h1>EXPLORE COLLECTION</h1></div>
      </div>
      <h1 className="open-fashion-app-title">NEW ARRIVAL</h1>
      <Badge />
      <div className="product-category">
        <h3 className="category-title active" id="all"onClick={(e) => selectCategory(e)}>
          All
          <span></span>
        </h3>
        <h3 className="category-title" id="man" onClick={(e) => selectCategory(e)}>
          Man
          <span></span>
        </h3>
        <h3 className="category-title" id="women" onClick={(e) => selectCategory(e)}>
          Women
          <span></span>
        </h3>
        <h3 className="category-title" id="jewelery" onClick={(e) => selectCategory(e)}>
          Jewelery
          <span></span>
        </h3>
        <h3 className="category-title" id="electronics" onClick={(e) => selectCategory(e)}>
          Electronics
          <span></span>
        </h3>
      </div>
      <HomePage category={category}/>
      <Badge />
      <div className="brands container">
        <span>
          <img src={Prada} alt="" />
        </span>
        <span>
          <img src={Burberry} alt="" />
        </span>
        <span>
          <img src={Boss} alt="" />
        </span>
        <span>
          {" "}
          <img src={Catier} alt="" />
        </span>
        <span>
          <img src={Gucci} alt="" />
        </span>
        <span>
          <img src={Tiffany} alt="" />
        </span>
      </div>
      <Badge />
      <JustForYou/>
    </div>
  );
};

export default OpenFashionApp;
