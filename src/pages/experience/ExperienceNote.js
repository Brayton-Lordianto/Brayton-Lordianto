import React, { Component } from "react";
import "./ExperienceNote.css";

class ExperienceNote extends Component {
  render() {
    const theme = this.props.theme;
    const experience = this.props.experience;
    return (
      <div>
        <div className="experience-header">
          <img
            className="experience-logo"
            onClick={() => window.open(experience["company_url"], "_blank")}
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt="experience"
            className="experience-image"
          />
          <div className="experience-titles">
            <h3>{this.props.experience.title}</h3>
            <p>
              {this.props.experience.company}, &nbsp;
              {/* <br /> */}
              {this.props.experience.duration}, &nbsp;
              {/* <br /> */}
              {this.props.experience.location}
            </p>
          </div>
        </div>
        <p
          className="experience-description"
          style={{ color: `${theme.text}` }}
        >
          {this.props.experience.description}
        </p>
        <br />
      </div>
    );
  }
}

export default ExperienceNote;
