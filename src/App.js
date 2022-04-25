import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { store } from "../src/components/feature/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
