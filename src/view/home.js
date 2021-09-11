import React from "react";
import AboutUs from "../components/home/aboutus";
import Feature from "../components/home/Feature";
import AppHero from "../components/home/hero";
import AppWork from "../components/home/work";

const AppHome = () => {
  return(
    <>
      <div className="main">
        <AppHero/>
        <AboutUs/>
        <Feature/>
        <AppWork/>
      </div>
    </>
  );
};

export default AppHome;