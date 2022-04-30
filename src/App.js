import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/components/feature/store";
import Layout from "./layout/Layout";
import OpenFashionApp from "./components/openFashionApp/OpenFasionApp";
import routes from "./routes";
import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Layout>
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