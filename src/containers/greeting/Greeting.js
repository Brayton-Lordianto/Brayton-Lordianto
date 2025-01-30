import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div ref={props.ref4} className="greet-main fill-window" id="greeting">
        <div className="greeting-main" ref={props.reference}>
          <div className="greeting-text-div">
            <div>
              <div style={{ display: "flex" }}>
                <div className="typewriter">
                  <h1 className="greeting-text" style={{ color: theme.text }}>
                    {greeting.title}
                  </h1>
                </div>
              </div>

              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                Hello World!
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="greeting-image-inner-div">
              <img
                src="https://media.giphy.com/media/Zg2Qhq6vUW8QLUzZJ5/giphy.gif"
                className="withAnimation"
                alt="gif"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
