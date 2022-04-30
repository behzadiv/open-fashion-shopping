import CartPage from "./components/cartPage/CartPage";
import OpenFashionApp from "./components/openFashionApp/OpenFasionApp";

const routes = [
    {path:"/" , element:<OpenFashionApp/>},
    {path:"/carts", element:<CartPage/>}
]
export default routes