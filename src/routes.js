import AboutUs from "./components/about-us/AboutUs";
import NotFound from "./components/NotFound";
import Blog from "./components/blog/Blog";
import Carts from "./components/carts/Carts";
import Checkout from "./components/checkout/Checkout";
import ContactUs from "./components/contact-us/ContactUs";
import OpenFashionApp from "./components/openFashionApp/OpenFasionApp";

const routes = [
    {path:"/" , element:<OpenFashionApp/>},
    {path:"/carts", element:<Carts/>},
    {path:"/checkout", element:<Checkout/>},
    {path:"/blogs" , element:<Blog/>},
    {path:"/contact-us" , element:<ContactUs/>},
    {path:"/about-us" , element:<AboutUs/>},
    {path:"*",element:<NotFound/>},
]
export default routes