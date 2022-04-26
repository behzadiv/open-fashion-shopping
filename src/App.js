import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { store } from "../src/components/feature/store";
import Footer from "./components/Footer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
