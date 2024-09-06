import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/reducer/ContainerSlice";

const Container = ({ query }) => {
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.photo);
  const searchTerm = useSelector((state) => state.search.searchEntry);
  console.log("searchTerm", searchTerm);

  useEffect(() => {
    if (query) {
      dispatch(fetchPhotos(query));
    }
  }, [dispatch, query]);

  return (
    <>
      <div>
        <h2>{searchTerm} Images</h2>
      </div>
      <div className="photo-container">
        {images.map((photo) => (
          <ul>
            <li>
              <img
                key={photo.id}
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
                alt=""
              />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Container;
