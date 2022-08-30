import React from "react";
import { Link } from "react-router-dom";
import { BsFillPatchExclamationFill } from "react-icons/bs";

const PageError = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <BsFillPatchExclamationFill color="#32c36c" style={{fontSize: 64}} />
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <Link className="btn lightGreen-bg rounded-pill py-3 px-5" to="/">
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageError;
