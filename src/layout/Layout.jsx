import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  //define which page does not need header and footer
  const isCheckoutRendering = pathname === "/checkout";
  const isCartsRendering = pathname==="/carts";
  const isSearchCartsRendering = pathname ==="/search"
  return (
    <>
      {!isCartsRendering && !isSearchCartsRendering && <Header />}
      {children}
      {!isCheckoutRendering && !isCartsRendering && !isSearchCartsRendering && <Footer />}
    </>
  );
};

export default Layout;
