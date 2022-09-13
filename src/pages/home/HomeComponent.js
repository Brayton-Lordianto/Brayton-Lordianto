import React, { Component, useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Education from "../education/EducationComponent";
import Projects from "../projects/ProjectsV2";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "../../typewriter.css";

function Home(props) {
  const ref4 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  return (
    <div>
      {/* <Header theme={this.props.theme} /> */}
      <div style={{ margin: "200px 0 200px 0" }}></div>
      <Greeting ref4={ref4} theme={props.theme} />
      <div style={{ margin: "200px 0 200px 0" }}></div>
      {/* <hr style={{"margin":"200px 0 200px 0"}}></hr> */}
      <Education ref={ref2} theme={props.theme} />
      <div style={{ margin: "200px 0 200px 0" }}></div>
      {/* <hr style={{"margin":"200px 0 200px 0"}}></hr> */}
      <Projects ref={ref3} theme={props.theme} />
      <div style={{ margin: "200px 0 200px 0" }}></div>
    </div>
  );
}
export default Home;
