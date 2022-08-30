import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const FooterSocialMedia = () => {
  return (
    <div className="d-flex pt-2">
      <Link className="btn btn-square btn-outline-light btn-social" to="#">
        <FaFacebook />
      </Link>
      <Link className="btn btn-square btn-outline-light btn-social" to="#">
        <FaTwitter />
      </Link>
      <Link className="btn btn-square btn-outline-light btn-social" to="#">
        <FaLinkedin />
      </Link>
      <Link className="btn btn-square btn-outline-light btn-social" to="#">
        <FaInstagramSquare />
      </Link>
    </div>
  );
};

export default FooterSocialMedia;
