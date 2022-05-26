import "./Blog.css";
import blog1 from "../../assets/blogs/blog1.png";
import blog2 from "../../assets/blogs/blog2.png";
import blog3 from "../../assets/blogs/blog3.png";
import blog4 from "../../assets/blogs/blog4.png";
import bookmark from "../../assets/blogs/Bookmark.png";
import plus from "../../assets/blogs/Plus.png";
import Badge from "../../common/Badge";
import { useEffect } from "react";
const Blog = () => {
  useEffect(()=>{
    window.scroll({top:0,behavior:"smooth"})
},[])
  return (
    <section className="blog-section container">
      <h1>BLOG</h1>
      <Badge />
      <div className="blog-tags">
        <span>Fashion</span>
        <span>Promo</span>
        <span>Policy</span>
        <span>Lookbook</span>
        <span>Style</span>
        <span>Guide</span>
        <span>Tips</span>
      </div>
      <div className="blogs-container">
        <div className="blog">
          <div className="blog-image-container">
            <img src={blog1} alt="" className="blog-image" />
            <img src={bookmark} alt="" className="blog-bookmark" />
            <h2 className="blog-title">
              2021 Style Guide: The Biggest Fall Trends
            </h2>
          </div>
          <div className="blog-desc">
            <div>
              <span className="blog-desc-hashtag">#Fashion</span>
              <span className="blog-desc-hashtag">#Tips</span>
            </div>
            <span>4 days ago</span>
          </div>
          <span className="blog-hover-plus">+</span>
        </div>
        <div className="blog">
          <div className="blog-image-container">
            <img src={blog2} alt="" className="blog-image" />
            <img src={bookmark} alt="" className="blog-bookmark" />
            <h2 className="blog-title">
              2021 Style Guide: The Biggest Fall Trends
            </h2>
          </div>
          <div className="blog-desc">
            <div>
              <span className="blog-desc-hashtag">#Fashion</span>
              <span className="blog-desc-hashtag">#Tips</span>
            </div>
            <span>4 days ago</span>
          </div>
          <span className="blog-hover-plus">+</span>
        </div>
        <div className="blog">
          <div className="blog-image-container">
            <img src={blog3} alt="" className="blog-image" />
            <img src={bookmark} alt="" className="blog-bookmark" />
            <h2 className="blog-title">
              2021 Style Guide: The Biggest Fall Trends
            </h2>
          </div>
          <div className="blog-desc">
            <div>
              <span className="blog-desc-hashtag">#Fashion</span>
              <span className="blog-desc-hashtag">#Tips</span>
            </div>
            <span>4 days ago</span>
          </div>
          <span className="blog-hover-plus">+</span>
        </div>
        <div className="blog">
          <div className="blog-image-container">
            <img src={blog4} alt="" className="blog-image" />
            <img src={bookmark} alt="" className="blog-bookmark" />
            <h2 className="blog-title">
              2021 Style Guide: The Biggest Fall Trends
            </h2>
          </div>
          <div className="blog-desc">
            <div>
              <span className="blog-desc-hashtag">#Fashion</span>
              <span className="blog-desc-hashtag">#Tips</span>
            </div>
            <span>4 days ago</span>
          </div>
          <span className="blog-hover-plus">+</span>
        </div>
      </div>
      <div className="blog-more">
          <h2>LOAD MORE</h2>
          <span><img src={plus} alt="" /></span>
      </div>
    </section>
  );
};

export default Blog;
