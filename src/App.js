import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/components/feature/store";
import Layout from "./layout/Layout";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer/>
       <Routes>
       {
         routes.map((route)=><Route {...route} key={route.path}/>)
       }
       </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
{/* <div className="App">
          <OpenFashionApp/>
        </div> */}