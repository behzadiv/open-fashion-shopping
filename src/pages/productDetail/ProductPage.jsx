import { useLocation } from "react-router-dom";
import "./ProductPage.css";
import star from "../../assets/icons/star.png";
import heart from "../../assets/icons/Heart.png";
import dontWash from "../../assets/icons/Do Not Wash.png";
import dontBleach from "../../assets/icons/Do Not Bleach.png";
import dontDry from "../../assets/icons/Do Not Tumble Dry.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, decrementCart } from "../../components/feature/cart/cartsSlice";
import trash from "../../assets/icons/trash.png";
import close from "../../assets/icons/Close.png";
import { getAllProductsData } from "../../components/feature/allProducts/allProductSlice";
import Product from "../../components/product/Product";
import Badge from "../../common/Badge";
import Loading from "../../components/loading/Loading";
const ProductPage = () => {
  const carts = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [showDesc, setShowDesc] = useState(false);
  const product = state.product;
  const isProductInCart = carts.find((item) => item.id === product.id);
  const { image, category, price, rating, title, description } = product;
  const showDescription = () => {
    setShowDesc(showDesc ? false : true);
    document.getElementById("show-desc").classList.toggle("show");
    document.getElementById("desc-toggle").classList.toggle("opened");
  };
  useEffect(() => {
    dispatch(getAllProductsData());
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);
  //filter same category products
  const { data, loading, error } = useSelector((state) => state.allProducts);
  const filteredData = data.filter(
    (item) => item.category === category && item.id !== product.id
  );
  const showImage = () => {
    document.getElementById("image").classList.add("show");
  };
  const closeImage = () => {
    document.getElementById("image").classList.remove("show");
  };
  return (
    <section className="product-detail-container container">
      <div className="image-fullSize-container" id="image">
        <img src={image} alt="" className="image-fullSize" />
        <span onClick={() => closeImage()} className="close-img-icon">
          <img src={close} alt="" />
        </span>
      </div>
      <div className="product-detail">
        <div className="product-detail-image-section">
          <img
            src={image}
            alt=""
            className="product-detail-img"
            onClick={() => showImage()}
          />
          {isProductInCart ? (
            <div className="in-cart-style">
              <span onClick={() => dispatch(decrementCart(isProductInCart))}>
                {isProductInCart.quantity > 1 ? (
                  "-"
                ) : (
                  <img src={trash} className="trash-icon" />
                )}
              </span>
              <span>{isProductInCart.quantity}</span>
              <span onClick={() => dispatch(addToCarts(product))}>+</span>
            </div>
          ) : (
            <div
              onClick={() => dispatch(addToCarts(product))}
              className="btn btn-primary"
            >
              Add to cart
            </div>
          )}
        </div>
        <div className="product-detail-desc">
          <h3 className="product-detail-title">{title}</h3>
          <p className="product-detail-price">${price}</p>
          <div className="product-detail-rating">
            <img src={star} alt="" className="product-detail-desc-star" />
            <span>{rating.rate} Ratings</span>
          </div>
          {category === "jewelery" || category === "electronics" ? (
            <div className="product-detail-desc-size-container">
              <span className="product-detail-desc-fav">
                <img src={heart} alt="" />
              </span>
            </div>
          ) : (
            <div className="product-detail-desc-size-container">
              <span>Size</span>
              <span className="product-detail-desc-size">S</span>
              <span className="product-detail-desc-size">M</span>
              <span className="product-detail-desc-size">L</span>
              <span className="product-detail-desc-fav">
                <img src={heart} alt="" />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="product-description">
        <div
          className="product-description-header"
          id="desc-toggle"
          onClick={() => showDescription()}
        >
          <span>Description</span>
          <span className="product-description-icon">
            {showDesc ? "-" : "+"}
          </span>
        </div>
        <div className="product-description-text" id="show-desc">
          <p>{description}</p>
          {category === "jewelery" || category === "electronics" ? null : (
            <div>
              <span>
                <img src={dontWash} alt="" />
              </span>
              <span>
                <img src={dontBleach} alt="" />
              </span>
              <span>
                <img src={dontDry} alt="" />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="similar-products-container">
        <h1 className="similar-products-title">Similar Products</h1>
        <Badge />
        {loading ? (
          <Loading />
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <div className="similar-products">
            {filteredData.map((product) => {
              return (
                <Product
                  key={product.id}
                  productImage={product.image}
                  productTitle={product.title}
                  productPrice={product.price}
                  productId={product.id}
                  addProduct={() => dispatch(addToCarts(product))}
                  isProductInCart={carts.find((item) => item.id === product.id)}
                  product={product}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
