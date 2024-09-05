import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Loadar from "./components/Loadar";
import NotFound from "./components/NotFound";
import Mountain from "./components/Mountain";
import Beaches from "./components/Beaches";
import Birds from "./components/Birds";
import Food from "./components/Food";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/mountain" element={<Mountain />} />
          <Route path="/beach" element={<Beaches />} />
          <Route path="/bird" element={<Birds />} />
          <Route path="/food" element={<Food />} />
        </Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
