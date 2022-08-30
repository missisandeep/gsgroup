import React from "react";
import InnerPageBanner from "../components/Common/InnerPageBanner";
import GalleryList from "../components/Gallery.js/GalleryList";
const ImageUrl = "./images/gallery-bg.jpg";

const Gallery = () => {
  return (
    <div>
      <InnerPageBanner
        PageTitle="Our Photo Gallery"
        LinkText="Gallery"
        backgroundImage={ImageUrl}
      />
      <GalleryList />
    </div>
  );
};

export default Gallery;
