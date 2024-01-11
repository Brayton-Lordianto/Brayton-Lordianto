import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  const [visitedCount, setVisitedCount] = useState(0);
  useEffect(() => {
    const count = localStorage.getItem("visitedCount");
    const initialCount = Number(count) || 60;
    setVisitedCount(initialCount);
    localStorage.setItem("visitedCount", initialCount + 1);
  }, []);

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
          <br />
          Since 2024-01-11, I have been visited {visitedCount} times.
        </p>
        <p className="footer-text">
          <br />
          Website Last Updated: {greeting.websiteLastUpdated}
          <br />
          Previously: {greeting.websitePreviouslyUpdated}
        </p>
      </Fade>
    </div>
  );
}
