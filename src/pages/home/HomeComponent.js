import React, { Component, useEffect, useRef, useState } from "react";
import Greeting from "../../containers/greeting/Greeting";
import Experience from "../experience/Experience";
import Education from "../education/EducationComponent";
import Projects from "../projects/ProjectsV2";
import Skills from "../../containers/skills/Skills";
import TopButton from "../../components/topButton/TopButton";
import "../../typewriter.css";
import MyHeader from "../../components/header/myHeader";
import "./HomeComponent.css";

function Home(props) {
  const homeRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();

  return (
    <div className="homeDiv">
      <div style={{ margin: "200px 0 200px 0" }}></div>
      <section></section>
      <section>
        <Greeting reference={homeRef} theme={props.theme} />
        <Skills theme={props.theme} />
        <div style={{ margin: "200px 0 200px 0" }}></div>
        <Experience theme={props.theme} />
        <div style={{ margin: "200px 0 200px 0" }}></div>
        <Education theme={props.theme} reference={educationRef} />
        <div style={{ margin: "200px 0 200px 0" }}></div>
        <Projects theme={props.theme} reference={projectsRef} />
        <div style={{ margin: "200px 0 200px 0" }}></div>
      </section>
      {/* <MyHeader3></MyHeader3> */}
      <MyHeader
        theme={props.theme}
        homeRef={homeRef}
        educationRef={educationRef}
        projectsRef={projectsRef}
      />
      <TopButton theme={props.theme} />
    </div>
  );
}
export default Home;
