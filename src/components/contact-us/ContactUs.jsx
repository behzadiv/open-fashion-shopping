import "./ContactUs.css"
import chatMessage from "../../assets/contact-us/ChatMessage.png"
import twitter from "../../assets/contact-us/Twitter.png"
import addMessage from "../../assets/contact-us/AddMessage.png"
import Badge from "../../common/Badge"
const ContactUs = () => {
    return ( 
        <section className="contactUs-section container">
            <h1>CONTACT US</h1>
            <Badge/>
            <div className="contactUs-container">
            <div className="contactUs">
               <img src={chatMessage} alt="" /> 
                <p className="contactUs-text">Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.</p>
                <button className="btn contactUs-btn">CHAT WITH US</button>
            </div>
            <div className="contactUs">
               <img src={addMessage} alt="" /> 
                <p className="contactUs-text">You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.</p>
                <button className="btn contactUs-btn">TEXT US</button>
            </div>
            <div className="contactUs">
               <img src={twitter} alt="" /> 
                <p className="contactUs-text">To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!</p>
                </div>
            </div>
        </section>
     );
}
 
export default ContactUs;