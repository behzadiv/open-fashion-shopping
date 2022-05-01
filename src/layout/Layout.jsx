import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  //define which page does not need header and footer
  const isCheckoutRendering = pathname === "/checkout"||"carts";
  const isCartsRendering = pathname==="/carts"
  return (
    <>
      {!isCartsRendering && <Header />}
      {children}
      {!isCheckoutRendering && <Footer />}
    </>
  );
};

export default Layout;
