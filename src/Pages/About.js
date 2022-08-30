import React from "react";
import InnerPageBanner from "../components/Common/InnerPageBanner";
import PrimeryHeading from "../components/Common/PrimeryHeading";
import ProfileImage from "../components/Common/ProfileImage";
import FourBoxes from "../components/Home/FourBoxes";

const ImageUrl = "./images/about-bg.jpg";
const About = () => {
  return (
    <>
      <InnerPageBanner
        PageTitle="About Us"
        LinkText="About"
        backgroundImage={ImageUrl}
      />

      <div className="aboutprofilewarp">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <PrimeryHeading name="Anand Kumar (Managing Director)" />
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
            </div>
            <div className="col-lg-6">
              <ProfileImage url="./images/about1.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutprofilewarp">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <ProfileImage url="./images/about2.jpg" />
            </div>
            <div className="col-lg-6">
              <PrimeryHeading name="Mukesh Kumar (Project Manager)" />
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FourBoxes />
    </>
  );
};

export default About;
