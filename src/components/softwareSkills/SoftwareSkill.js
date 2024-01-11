import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function test(logo) {
  if (logo.logo_path !== undefined)
    return (
      <img
        src={require(`../../assests/images/${logo.logo_path}`)}
        alt=""
        style={logo.style}
        className="iconify hover-glow skillimage disableFilter"
      />
    );
  else
    return (
      <span
        className="iconify hover-glow"
        data-icon={logo.fontAwesomeClassname}
        style={logo.style}
        data-inline="false"
      ></span>
    );
}

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    {
                      // if (true) {
                      test(logo)
                      // }
                    }
                    {/* <span
                      className="iconify hover-glow"
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span> */}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
