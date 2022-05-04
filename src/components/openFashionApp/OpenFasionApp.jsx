import { useState } from "react";
import Badge from "../../common/Badge";
import HomePage from "../HomePage";
import "./OpenFashionApp.css";
import Prada from "../../assets/brands/Prada.png";
import Burberry from "../../assets/brands/Burberry.png";
import Catier from "../../assets/brands/Catier.png";
import Gucci from "../../assets/brands/Gucci.png";
import Boss from "../../assets/brands/Boss.png";
import Tiffany from "../../assets/brands/Tiffany.png";
import JustForYou from "../justForYou/JustForYou";
import collection1 from "../../assets/collection1.png";
import sticker1 from "../../assets/MiroodlesSticker1.png";
import sticker2 from "../../assets/MiroodlesSticker2.png";
import sticker3 from "../../assets/MiroodlesSticker3.png";
import sticker4 from "../../assets/MiroodlesSticker4.png";
import sticker5 from "../../assets/MiroodlesSticker5.png";
import logo from "../../assets/Logo.png";
const OpenFashionApp = () => {
  const [category, setCategory] = useState("");
  const selectCategory = (e) => {
    let category = e.target.innerText.toLowerCase();
    let item = document.querySelectorAll(".category-title");
    item.forEach((c) => {
      if (c.classList.value !== "category-title") {
        c.classList.remove("active");
      }
    });
    document.getElementById(e.target.id).classList.add("active");
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
      <section className="cover-container">
        <p className="cover-text">
          <span>LUXURY</span>
          <span>FASHION</span>
          <span>&ACCESSORIES</span>
        </p>
        <div className="cover-link">
          <h1>EXPLORE COLLECTION</h1>
        </div>
      </section>
      <h1 className="open-fashion-app-title">NEW ARRIVAL</h1>
      <Badge />
      <section className="product-category">
        <h3
          className="category-title active"
          id="all"
          onClick={(e) => selectCategory(e)}
        >
          All
          <span></span>
        </h3>
        <h3
          className="category-title"
          id="man"
          onClick={(e) => selectCategory(e)}
        >
          Man
          <span></span>
        </h3>
        <h3
          className="category-title"
          id="women"
          onClick={(e) => selectCategory(e)}
        >
          Women
          <span></span>
        </h3>
        <h3
          className="category-title"
          id="jewelery"
          onClick={(e) => selectCategory(e)}
        >
          Jewelery
          <span></span>
        </h3>
        <h3
          className="category-title"
          id="electronics"
          onClick={(e) => selectCategory(e)}
        >
          Electronics
          <span></span>
        </h3>
      </section>
      <HomePage category={category} />
      <Badge />
      <section className="brands">
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
      </section>
      <Badge />
      <section className="collections">
        <h1>COLLECTIONS</h1>
        <img src={collection1} alt="" />
        <div className="collection-autumn">
          <span>Autumn</span>
          <span>COLLECTION</span>
        </div>
      </section>
      <JustForYou />
      <section className="trending">
        <h1>@TRENDING</h1>
        <div className="trending-hashtags">
          <span>#2022</span>
          <span>#spring</span>
          <span>#collection</span>
          <span>#fall</span>
          <span>#dress</span>
          <span>#autumncollection</span>
          <span>#openfashion</span>
        </div>
      </section>
      <section className="store-detail">
        <img src={logo} alt="" />
        <p className="store-detail-desc">
          Making a luxurious lifestyle accessible for a generous group of women
          is our daily drive.
        </p>
        <Badge />
        <div className="store-detail-sticker-container">
          <div className="store-detail-sticker">
            <img src={sticker1} alt="" />
            <span>Fast shipping. Free on orders over $25.</span>
          </div>
          <div className="store-detail-sticker">
            <img src={sticker2} alt="" />
            <span>Sustainable process from start to finish.</span>
          </div>
          <div className="store-detail-sticker">
            <img src={sticker3} alt="" />
            <span>Unique designs and high-quality materials.</span>
          </div>
          <div className="store-detail-sticker">
            <img src={sticker4} alt="" />
            <span>Fast shipping. Free on orders over $25.</span>
          </div>
        </div>
        <img src={sticker5} alt="" />
      </section>
    </div>
  );
};

export default OpenFashionApp;
