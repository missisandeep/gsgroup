import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const SliderData = [
    {
      id: 1,
      url: "./images/banner1.jpg",
      title: "Use Solar Power Whenever & Wherever You Need It !",
      text: "Nulla vitae elit libero, 1 a pharetra augue mollis interdum.",
    },
    {
      id: 2,
      url: "./images/banner2.jpg",
      title: "Use Solar Power Whenever & Wherever You Need It !",
      text: "Nulla vitae elit libero, 2 a pharetra augue mollis interdum.",
    },
    {
      id: 3,
      url: "./images/banner3.jpg",
      title: "Use Solar Power Whenever & Wherever You Need It !",
      text: "Nulla vitae elit libero, 3 a pharetra augue mollis interdum.",
    },
  ];
  return (
    <Carousel>
      {SliderData.map((data) => {
        const { id, url, title, text } = data;
        return (
          <Carousel.Item key={id}>
            <img className="d-block w-100" src={url} alt={title} />
            <Carousel.Caption>
              <div className="content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
