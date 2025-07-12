import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  const [visitedCount, setVisitedCount] = useState("Loading...");

  useEffect(() => {
    // Only call CounterAPI in production
    if (process.env.NODE_ENV === "production") {
      const initializeCounter = async () => {
        try {
          const response = await fetch(
            "https://api.counterapi.dev/v1/brayton-portfolio/visits-brayton-portfolio2/up",
            {
              method: "GET",
              mode: "cors",
              headers: {
                Authorization: `Bearer ut_ceisioFJcxVfhqHl6TAXOthxLGRhcTZXNzCc3nZf`,
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            setVisitedCount(data.count);
          } else {
            setVisitedCount("Error");
          }
        } catch (error) {
          console.error("Counter API error:", error);
          setVisitedCount("Error");
        }
      };

      initializeCounter();
    } else {
      // Development mode - show static count
      setVisitedCount("DEV");
    }
  }, []);

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
          <br />
          Since July 2025, I have been visited {visitedCount} times.
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
