import React from "react";
const Photos = [
  {
    id: 1,
    url: "./images/gallery-1.jpg",
    title: "Gallery 1",
  },
  {
    id: 2,
    url: "./images/gallery-2.jpg",
    title: "Gallery 2",
  },
  {
    id: 3,
    url: "./images/gallery-3.jpg",
    title: "Gallery 3",
  },
  {
    id: 4,
    url: "./images/gallery-4.jpg",
    title: "Gallery 4",
  },
  {
    id: 5,
    url: "./images/gallery-5.jpg",
    title: "Gallery 5",
  },
  {
    id: 6,
    url: "./images/gallery-6.jpg",
    title: "Gallery 6",
  },
];
const FooterPhotos = () => {
  return (
    <>
      {Photos.map((value) => {
        const { id, url, title } = value;
        return (
          <div className="col-4" key={id}>
            <img className="img-fluid rounded" src={url} alt={title} />
          </div>
        );
      })}
    </>
  );
};

export default FooterPhotos;
