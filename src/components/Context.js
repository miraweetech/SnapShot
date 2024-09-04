import React from "react";
import Loader from '../components/Loadar'
import Gallery from "./Gallery";
import { useSelector } from "react-redux";

const Context = ({ searchTerm }) => {
  const { items, status } = useSelector((state) => state.gallery);

  return (
    <div>
      {status === "loading" ? (
        <Loader />
      ) : (
        <Gallery items={items} searchTerm={searchTerm} />
      )}
    </div>
  );
};

export default Context;
