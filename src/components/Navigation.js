import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlets from "./Outlet";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Outlets/>}>
            {/* <Route /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default Navigation;
