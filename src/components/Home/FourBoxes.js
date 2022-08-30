import React from "react";
import SingleBox from "./SingleBox";

const FourBoxes = () => {
  const data = [
    {
      id: 1,
      url: "./images/customer.png",
      number: 500,
      title: "Happy Customers",
      content: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
    },
    {
      id: 2,
      url: "./images/project-done.png",
      number: 200,
      title: "Project Done",
      content: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
    },
    {
      id: 3,
      url: "./images/award-win.png",
      number: 300,
      title: "Awards Win",
      content: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
    },
    {
      id: 4,
      url: "./images/worker.png",
      number: 1800,
      title: "Expert Workers",
      content: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
    },
  ];
  return (
    <section className="fourboxes">
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return <SingleBox value={value} key={value.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FourBoxes;
