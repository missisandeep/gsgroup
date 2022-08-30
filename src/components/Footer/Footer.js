import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterTitle from "./FooterTitle";
import FooterPhotos from "./FooterPhotos";
import FooterLinks from "./FooterLinks";
import PhoneNumbers from "../Common/PhoneNumbers";
import MailText from "../Common/MailText";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark text-body footer mt-5 pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 color-gray">
              <FooterTitle title="Address" />
              <p className="mb-2">
                <FaMapMarkerAlt />
                Regd. Office:- flat no- 143,ground flor, Koili market, Rajatalab
                Varanasi u.p Pin Code-221311
              </p>
              <p className="mb-2">
                <PhoneNumbers />
              </p>
              <p className="mb-2">
                <MailText />
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <FooterTitle title="Quick Links" />
              <FooterLinks />
            </div>
            <div className="col-lg-3 col-md-6">
              <FooterTitle title="Photo Gallery" />

              <div className="row g-2">
                <FooterPhotos />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <FooterTitle title="Follow Us" />
              <FooterSocialMedia />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-12 text-center  mb-3 mb-md-0 color-gray">
                <small>
                  Copyright © 2022 A.S.Groups. - All rights reserved.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
