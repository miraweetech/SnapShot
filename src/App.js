import "./App.css";
import { Provider } from "react-redux";
import Navigation from "./components/Navigation";
import { Store } from "./redux/reducer/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
