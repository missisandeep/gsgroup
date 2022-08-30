import React from "react";
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import InnerPageBanner from "../components/Common/InnerPageBanner";
import PrimeryHeading from "../components/Common/PrimeryHeading";
import Details from "../components/Contact/Details";
import Map from "../components/Contact/Map";
const ImageUrl = "./images/contact-bg.jpg";

const Contact = () => {
  return (
    <div>
      <InnerPageBanner
        PageTitle="Contact Us"
        LinkText="Contact"
        backgroundImage={ImageUrl}
      />
      <div
        className="container-fluid bg-light overflow-hidden px-lg-0"
        style={{ margin: "6rem 0" }}
      >
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 contact-text py-5">
              <div className="p-lg-5 ps-lg-0">
                <PrimeryHeading name="Feel Free To Contact Us" />
                <div className="d-flex align-items-center my-3">
                  <FaMapMarkedAlt
                    style={{
                      fontSize: 32,
                      color: "#32c36c",
                      marginRight: 25,
                      width: 45,
                    }}
                  />
                  <Details address="Regd. Office:- flat no- 143,ground flor, Koili market, Rajatalab Varanasi u.p Pin Code-221311" />
                </div>
                <div className="d-flex align-items-center my-3">
                  <FaRegEnvelope
                    style={{
                      fontSize: 32,
                      color: "#32c36c",
                      marginRight: 25,
                      width: 45,
                    }}
                  />
                  <Details email="a.s.groups2024@gmail.com" />
                </div>
                <div className="d-flex align-items-center my-3">
                  <FaPhoneAlt
                    style={{
                      fontSize: 32,
                      color: "#32c36c",
                      marginRight: 25,
                      width: 45,
                    }}
                  />
                  <Details phone="+91-9695472291, +91-9793757880" />
                </div>
                <div className="d-flex align-items-center mt-3 mb-5">
                  <FaWhatsapp
                    style={{
                      fontSize: 32,
                      color: "#32c36c",
                      marginRight: 25,
                      width: 45,
                    }}
                  />
                  <Details phone="+91-9695472291, +91-9793757880" />
                </div>
                <PrimeryHeading name="Corporate Office" />
                <div className="d-flex align-items-center my-3">
                  <FaMapMarkedAlt
                    style={{
                      fontSize: 32,
                      color: "#32c36c",
                      marginRight: 25,
                      width: 45,
                    }}
                  />
                  <Details address="Regd. Office:- flat no- 143,ground flor, Koili market, Rajatalab Varanasi u.p Pin Code-221311" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
