import { useState } from "react";
import Badge from "../../common/Badge";
import HomePage from "../HomePage";
import "./OpenFashionApp.css"
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
      <h2 className="open-fashion-app-title">NEW ARRIVAL</h2>
      <Badge />
      <div className="product-category">
        <h3 className="category-title active" id="all"onClick={(e) => selectCategory(e)}>
          All
        </h3>
        <h3 className="category-title" id="man" onClick={(e) => selectCategory(e)}>
          Man
        </h3>
        <h3 className="category-title" id="women" onClick={(e) => selectCategory(e)}>
          Women
        </h3>
        <h3 className="category-title" id="jewelery" onClick={(e) => selectCategory(e)}>
          Jewelery
        </h3>
        <h3 className="category-title" id="electronics" onClick={(e) => selectCategory(e)}>
          Electronics
        </h3>
      </div>
      <HomePage category={category}/>
    </div>
  );
};

export default OpenFashionApp;
