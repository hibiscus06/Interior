import React from "react";
import Welcome from "./Welcome";
import Navbar from "../Navbar";
import Slider from "./Slider";
import Premium from "./Premium";
import Footer from "../Footer";
import CheckOut from "./CheckOut";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Slider />
      <Premium />
      <Footer />
    </>
  );
};

export default Hero;
