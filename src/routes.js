import AboutUs from "./pages/about-us/AboutUs";
import NotFound from "./pages/notFound/NotFound";
import Blog from "./pages/blog/Blog";
import Carts from "./pages/carts/Carts";
import Checkout from "./pages/checkout/Checkout";
import ContactUs from "./pages/contact-us/ContactUs";
import OpenFashionApp from "./pages/openFashionApp/OpenFasionApp";
import SearchCarts from "./pages/searchCarts/SearchCarts";
import ProductPage from "./pages/productDetail/ProductPage";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/profile";

const routes = [
  { path: "/profile", element: <Profile /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <OpenFashionApp /> },
  { path: "/carts", element: <Carts /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/blogs", element: <Blog /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/search", element: <SearchCarts /> },
  { path: "/product/:id", element: <ProductPage /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
