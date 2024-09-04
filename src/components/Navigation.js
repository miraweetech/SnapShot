import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Mountain</NavLink></li>
        <li><NavLink to="/beach">Beaches</NavLink></li>
        <li><NavLink to="/bird">Birds</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;


// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Outlets from "./Outlet";
// import Context from "./Context";
// import MockApiCreate from "./MockApi";
// import Loader from "./Loadar";

// const Navigation = () => {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path="" element={<Outlets/>}>
//             <Route path="/context" element={<Context />}/>
//             <Route path="/loader" element={<Loader/>}/>
//             <Route path="/api-data" element={<MockApiCreate />}/>
//         </Route>
//       </Routes>
//       </BrowserRouter>
//     </>
//   );
// };
// export default Navigation;
