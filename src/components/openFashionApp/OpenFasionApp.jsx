import { useEffect, useState } from "react";
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
import group1 from "../../assets/group/group1.png";
import group2 from "../../assets/group/group2.png";
import group3 from "../../assets/group/group3.png";
import group4 from "../../assets/group/group4.png";
import groupinstagramlogo from "../../assets/group/groupInstagram.png";
import logo from "../../assets/Logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsData } from "../feature/allProducts/allProductSlice";
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
  const { data } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsData(category));
  }, [category]);
  const[showCover,setShowCover]=useState(true)
  const hideCover=()=>{
    document.getElementById("cover").classList.toggle("hide")
  }
  return (
    <div className="open-fashion-app container">
      <section className="cover-container" id="cover">
        <div className="small-cover-container">
          <div className="small-cover-text">
            <span>LUXURY</span>
            <span>FASHION</span>
            <span>&ACCESSORIES</span>
          </div>
          <div className="cover-link" onClick={()=>hideCover()}>
            <h1>EXPLORE COLLECTION</h1>
          </div>
        </div>
        <div className="big-cover-container">
          <img src={logo} alt="" className="big-cover-img" />
          <h2 className="big-cover-text">
            Free UI Kit with elegant and modern style will help you to quickly
            create your own design. Come with 30 essential screens, Open Fashion
            Free eCommerce UI Kit is the perfect fit for designers, developers,
            startups... to quickly adapt to design. Open Fashion support auto
            layout, variant components, and free fontS.
          </h2>
          <div className="cover-link" onClick={()=>hideCover()}>
            <h1>EXPLORE COLLECTION</h1>
          </div>
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
      <HomePage data={data} />
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
      <section className="group-container">
        <h1>FOLLOW US</h1>
        <img src={groupinstagramlogo} alt="" />
        <div className="group-member">
          <img src={group1} alt="" />
          <img src={group2} alt="" />
          <img src={group3} alt="" />
          <img src={group4} alt="" />
        </div>
      </section>
    </div>
  );
};

export default OpenFashionApp;
