import React from "react";
import CustomDrawer from "../../layouts/CustomDrawer";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import "./styles.css";
import TechSkill from "./TechSkill";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <CustomDrawer />
      <About />
      <Project />
      <TechSkill />
      <Experience />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
