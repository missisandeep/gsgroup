import React from "react";

const SingleBox = ({ value }) => {
  const { url, number, title, content } = value;
  return (
    <div className="col-md-6 col-lg-3">
      <div className="boxround">
        <div className="icon">
          <img src={url} alt="" />
        </div>
        <h2>{number}</h2>
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SingleBox;
