import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
        {/* <h2>Food Images</h2> */}
        <Gallery />
      </div>
    </>
  );
};
export default Food;
