import React from "react";
import { Link } from "react-router-dom";
import { FcBiohazard } from "react-icons/fc";
import Menu from "./Menu";

const Nav = () => {
  return (
    <div
      className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0"
      style={{ top: "-100px" }}
    >
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary logo">
          <FcBiohazard color="#32c36c" size={45} /> A.S Groups
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Nav;
