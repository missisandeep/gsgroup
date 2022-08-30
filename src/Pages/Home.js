import React from "react";
import AboutASGroups from "../components/Home/AboutASGroups.js";
import AboutSection from "../components/Home/AboutSection.js";
import FourBoxes from "../components/Home/FourBoxes.js";
import Slider from "../components/Home/Slider.js";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutASGroups />
      <FourBoxes />
      <AboutSection />
    </>
  );
};

export default Home;
