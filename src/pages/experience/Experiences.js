// this is for the list of actual experiences

import React, { Component } from "react";
import ExperienceNote from "./ExperienceNote.js";

class Experiences extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-main">
        {this.props.sections.map((section) => {
          return (
            <div>
              {section["experiences"].map((experience) => {
                // Add a colon after the arrow function parameter
                return <ExperienceNote experience={experience} theme={theme} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experiences;
