import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";
import Gallery from "./Gallery";

const Birds = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos("birds"));
  }, [dispatch]);

  return (
    <>
      <div>
        {/* <h2>Birds Images</h2> */}
        <Gallery />
      </div>
    </>
  );
};
export default Birds;
