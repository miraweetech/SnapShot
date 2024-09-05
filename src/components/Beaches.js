import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";
import Gallery from "./Gallery";

const Beaches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos("beache"));
  }, [dispatch]);

  return (
    <>
      {/* <h2>Beaches Images</h2> */}
      <Gallery />
    </>
  );
};
export default Beaches;
