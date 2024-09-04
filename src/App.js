import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Loadar from "./components/Loadar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/mountain" element={<Loadar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App