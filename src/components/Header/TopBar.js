import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import MailText from "../Common/MailText";
import PhoneNumbers from "../Common/PhoneNumbers";

const TopBar = () => {
  return (
    <div className="container-fluid  p-0" style={{ background: "#1A2A36" }}>
      <div className="row gx-0 d-none d-lg-flex ">
        <div className="col-lg-9 px-5 text-start color-gray">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small>
              <MailText />
            </small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <small>
              <PhoneNumbers />
            </small>
          </div>
        </div>
        <div className="col-lg-3 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center mx-n2">
            <a
              className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
              href="#"
            >
              <FaFacebook color="#32C36C" />
            </a>
            <a
              className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
              href="#"
            >
              <FaTwitter color="#32C36C" />
            </a>
            <a
              className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
              href="#"
            >
              <FaLinkedin color="#32C36C" />
            </a>
            <a className="btn btn-square btn-link rounded-0" href="#">
              <FaInstagramSquare color="#32C36C" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
