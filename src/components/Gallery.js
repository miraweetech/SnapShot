import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchPhotos } from "../redux/reducer/GallerySlice";


const Gallery = ({ query }) => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.photos);

  useEffect(() => {
    if (query) {
      // dispatch(fetchPhotos(query));
    }
  }, [dispatch, query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {images.map((image) => (
        <img
          key={image.id}
          src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
          alt={image.title}
        />
      ))}
    </div>
  );
};

export default Gallery;

