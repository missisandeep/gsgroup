import React from "react";
import { Link } from "react-router-dom";
import PrimeryHeading from "../Common/PrimeryHeading";

const AboutSection = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div
            className="col-lg-6 ps-lg-0"
            style={{ minHeight: "400px", visibility: "visible" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="./images/about.jpg"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 about-text py-5">
            <div className="p-lg-5 pe-lg-0">
              <h6>About Us</h6>
              <PrimeryHeading name="We are working in solar field since last 6 years" />
              <p>
                To protect our World’s future of POWER, Act now by harnessing
                sun, wind and waters!
              </p>
              <p>
                A.S GROUPS have vast experience in Electrical & Solar Power
                projects. We are working in solar field since last 6 years. We
                have successfully completed solar projects allotted to us in 6
                MW in Azure Power Rajasthan,10 MW for Raichura Infrastructure in
                M.P,6 MW in Punjab for Welspun Energy etc.In totality we have
                erected 80 MW solar Power projects pan India.
              </p>
              <p>
                From 2013 we are operating individual firm. Now we are
                registered as A.S GROUPS & constructions.endeavor to create a
                Company specializing in Solar Power Project. A team of
                professionals with relevant industry experience is committed to
                deliver our best service to our prestigious clients.
              </p>

              <Link
                to="/about"
                className="btn lightGreen-bg rounded-pill py-3 px-5 mt-3"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
