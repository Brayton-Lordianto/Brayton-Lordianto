import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import Skills from "../skills/Skills";
import "../../boom.css";
import "../../typewriter.css";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div ref={props.ref4} className="greet-main fill-window" id="greeting">
        <div className="greeting-main">
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
                {/* ( {greeting.nickname} ) */}
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* <img src="https://giphy.com/embed/Zg2Qhq6vUW8QLUzZJ5" width="312" height="480" frameBorder="0" class="giphy-embed" allowFullScreen /> */}
              <img
                src="https://media.giphy.com/media/Zg2Qhq6vUW8QLUzZJ5/giphy.gif"
                className="withAnimation"
                alt="gif"
              />
              {/* these are the spongebob and adventure time gifs
               <img
                src="https://media.giphy.com/media/jzGZrkWV6SOWs/giphy.gif"
                title="feeling proud"
                alt="Not available"
                className="withAnimation"
              />
              <img src="https://i.gifer.com/yB.gif" className="withAnimation" /> */}
            </div>

            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
      <Skills theme={theme} />
    </Fade>
  );
}
