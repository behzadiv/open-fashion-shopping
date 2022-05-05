import Badge from "../common/Badge";
import "./Footer.css"
import twitter from "../assets/icons/Twitter.png";
import youtube from "../assets/icons/YouTube.png";
import instagram from "../assets/icons/Instagram.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
        <section className="footer-container">
            <div className="footer-social">
            <a>
              <img src={twitter} alt="" />
            </a>
            <a>
              <img src={instagram} alt="" />
            </a>
            <a>
              <img src={youtube} alt="" />
            </a>
          </div>
          <Badge/>
          <div className="footer-address">
              <h2>support@openui.design</h2>
              <h2>+60 825 876</h2>
              <h2>08:00 - 22:00 - Everyday</h2>
          </div>
            <Badge/>
          <div className="footer-links">
              <h2><NavLink to="about-us">About</NavLink></h2>
              <h2><NavLink to="contact-us">Contact</NavLink></h2>
              <h2><NavLink to="/blogs">Blog</NavLink></h2>
          </div>
          <div className="footer-copyright"><p>Copyright OpenUl All Rights Reserved.</p></div>
        </section>
     );
}
 
export default Footer;