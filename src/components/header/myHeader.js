import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

export default function MyHeader({
  theme,
  homeRef,
  educationRef,
  projectsRef,
}) {
  const link = "home";
  function handleScroll(reference) {
    reference.current.scrollIntoView({ behavior: "smooth" });
    console.log("scrolled");
  }

  return (
    <Fade top duration={1000} distance="20px">
      <div style={{ position: "fixed", width: "100%", top: "0" }}>
        <header className="header">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <span
                style={{
                  color: theme.text,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                  padding: "15px 25px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
                onClick={() => {
                  handleScroll(homeRef);
                }}
              >
                Home
              </span>
            </li>
            <li>
              <span
                style={{
                  color: theme.text,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                  padding: "15px 25px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
                onClick={() => {
                  handleScroll(educationRef);
                }}
              >
                Education
              </span>
            </li>
            <li>
              <span
                style={{
                  color: theme.text,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                  padding: "15px 25px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
                onClick={() => {
                  handleScroll(projectsRef);
                }}
              >
                Projects
              </span>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
