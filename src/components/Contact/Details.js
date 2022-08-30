import React from "react";

const Details = (props) => {
  return (
    <>
      <h6>{props.address}</h6>
      <h6>{props.email}</h6>
      <h6>{props.phone}</h6>
    </>
  );
};

export default Details;
