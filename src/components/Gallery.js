import React from "react";
import { useSelector } from "react-redux";
import NoImages from "./NoImages";
import Image from "./Image";

const Gallery = () => {
  const { images, loading } = useSelector((state) => state.photo);

  let imageList = images.map((image) => {
    let farm = image.farm;
    let server = image.server;
    let id = image.id;
    let secret = image.secret;
    let title = image.title;
    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return <Image url={url} key={id} alt={title} />;
  });

  // if (loading) return <p>loading....</p>;

  return (
    <>
      <div>
        {images.length === 0 ? (
          <ul>{imageList}</ul>
        ) : (
          <p></p>
          // <NoImages />
        )}
      </div>
    </>
  );
};

export default Gallery;
