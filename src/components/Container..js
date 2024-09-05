import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";

const Container = ({ query }) => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.photo); 

  useEffect(() => {
    if (query) {
      dispatch(fetchPhotos(query));
    }
  }, [dispatch, query]);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="photo-container">
      {images.map((photo) => (
        <img
          key={photo.id}
          src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
          alt={photo.title}
        />
      ))}
    </div>
  );
};

export default Container;
