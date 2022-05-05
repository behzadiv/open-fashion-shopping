import Blog from "./components/blog/Blog";
import Carts from "./components/carts/Carts";
import Checkout from "./components/checkout/Checkout";
import OpenFashionApp from "./components/openFashionApp/OpenFasionApp";

const routes = [
    {path:"/" , element:<OpenFashionApp/>},
    {path:"/carts", element:<Carts/>},
    {path:"/checkout", element:<Checkout/>},
    {path:"/blogs" , element:<Blog/>}
]
export default routes