import { Provider } from "react-redux";
import "./App.css";
import { store } from "../src/components/feature/store";
import Layout from "./layout/Layout";
import OpenFashionApp from "./components/openFashionApp/OpenFasionApp";
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <div className="App">
          <OpenFashionApp/>
        </div>
      </Layout>
    </Provider>
  );
}

export default App;
