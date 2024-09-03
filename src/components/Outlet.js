import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Outlets = () => {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Outlets