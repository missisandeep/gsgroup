import React from "react";

const GalleryBox = (data) => {
  return (
    <div className="col-lg-4 col-md-2">
      <div className="gallerybox">
        <img src={data.url} alt="" />
      </div>
    </div>
  );
};

export default GalleryBox;
