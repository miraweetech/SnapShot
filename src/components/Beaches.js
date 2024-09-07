import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";
import Gallery from "./Gallery";

const Beaches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos("beach"));
  }, [dispatch]);

  return (
    <>
      <Gallery />
    </>
  );
};
export default Beaches;
