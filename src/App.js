import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
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
          <Route path="/" element={<Mountain />} />
          <Route path="/mountain" element={<Mountain />} />
          <Route path="/beach" element={<Beaches />} />
          <Route path="/bird" element={<Birds />} />
          <Route path="/food" element={<Food />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
