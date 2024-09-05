import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";
import Gallery from "./Gallery";

const Mountain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos("mountain"));
  }, [dispatch]);
  
  return (
    <>
      <h2>Mountain Images</h2>
      <Gallery />
    </>
  );
};

export default Mountain;
