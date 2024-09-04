import React from "react";
import From from "./From";
import Navigation from "./Navigation";
import Container from "./Container.";
import Context from './Context'

const Header = () => {
  return (
    <>
      <h1>SnapShot</h1>
      <From />
      <Navigation />
      <Container />
      <Context />
    </>
  );
};

export default Header;
