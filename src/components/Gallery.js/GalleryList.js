import React from "react";
import GalleryBox from "./GalleryBox";

const GalleryData = [
  {
    id: 1,
    url: "./images/about.jpg",
  },
  {
    id: 2,
    url: "./images/feature.jpg",
  },
  {
    id: 3,
    url: "./images/about.jpg",
  },
  {
    id: 4,
    url: "./images/feature.jpg",
  },
];

const GalleryList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {GalleryData.map((value) => {
          return <GalleryBox {...value} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default GalleryList;
