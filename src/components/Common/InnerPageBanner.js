import React from "react";
import { Link } from "react-router-dom";

const InnerPageBanner = (props) => {
  return (
    <div
      className="container-fluid page-header py-5 mb-5"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          {props.PageTitle}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-white" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item text-white active">
              {props.LinkText}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default InnerPageBanner;
