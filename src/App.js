import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { store } from "../src/components/feature/store";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <div className="App">
          <HomePage />
        </div>
      </Layout>
    </Provider>
  );
}

export default App;
