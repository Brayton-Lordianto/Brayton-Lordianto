import React, { Component, useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Education from "../education/EducationComponent";
import Projects from "../projects/ProjectsV2";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "../../typewriter.css";
import SkillsAndFeatured from "../NewTechAndFeatured/SkillsAndFeatured";
import MyHeader from "../../components/header/myHeader";

function Home(props) {
  const homeRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();

  return (
    <div>
      <MyHeader
        theme={props.theme}
        homeRef={homeRef}
        educationRef={educationRef}
        projectsRef={projectsRef}
      />
      <div style={{ margin: "200px 0 200px 0" }}></div>
      <Greeting reference={homeRef} theme={props.theme} />

      {/* <SkillsAndFeatured theme={props.theme} /> */}

      <Skills theme={props.theme} />

      <div style={{ margin: "200px 0 200px 0" }}></div>
      {/* <hr style={{"margin":"200px 0 200px 0"}}></hr> */}
      <Education theme={props.theme} reference={educationRef} />
      <div style={{ margin: "200px 0 200px 0" }}></div>
      {/* <hr style={{"margin":"200px 0 200px 0"}}></hr> */}
      <Projects theme={props.theme} reference={projectsRef} />
      <div style={{ margin: "200px 0 200px 0" }}></div>
    </div>
  );
}
export default Home;
