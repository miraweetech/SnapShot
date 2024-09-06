import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";
import Gallery from "./Gallery";

const Food = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos("food"));
  }, [dispatch]);

  return (
    <>
      <div>
        <Gallery />
      </div>
    </>
  );
};
export default Food;
