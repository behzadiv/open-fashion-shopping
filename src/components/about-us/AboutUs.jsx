import Badge from "../../common/Badge";
import story from "../../assets/story.png";
import "./AboutUs.css";
import { useEffect } from "react";
const AboutUs = () => {
    useEffect(()=>{
        window.scroll({top:0,behavior:"smooth"})
    },[])
  return (
    <section className="container">
      <div className="aboutUs-container">
        <h1>OUR STORY</h1>
        <Badge />
        <div className="aboutUs-text">
          <p>
            Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You
            can open Open Fashion - Free Ecommerce UI Kit file by Figma.
          </p>
          <p>
            Create stunning shop with bulletproof guidelines and thoughtful
            components. Its library contains more than 50+ components supporting
            Light & Dark Mode and 60+ ready to use mobile screens.
          </p>
        </div>
        <div className="aboutUs-image"></div>
        <div className="aboutUs-sign-up">
          <h1>SIGN UP</h1>
          <Badge />
          <p className="sign-up-txt">
            Receive early access to new arrivals, sales, exclusive content,
            events and much more!
          </p>
          <input
            type="email"
            placeholder="Email adress"
            className="sign-up-input"
          />
          <button className="btn aboutUs-btn">SUBMIT</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
