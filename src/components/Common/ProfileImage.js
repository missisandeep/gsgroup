import React from "react";

const ProfileImage = (props) => {
  return (
    <div className="img-border">
      <img className="img-fluid" src={props.url} alt="" />
    </div>
  );
};

export default ProfileImage;
