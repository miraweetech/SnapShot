import React from "react";
import { useSelector } from "react-redux";
import Image from "./Image";

const Gallery = () => {
  const { images } = useSelector((state) => state.photo);

  return (
    <>
      <div>
        {images.length === 0 && (
          <ul>
            {images.map((image) => {
              let farm = image.farm;
              let server = image.server;
              let id = image.id;
              let secret = image.secret;
              let title = image.title;
              let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
              return <Image url={url} key={id} alt={title} />;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Gallery;
