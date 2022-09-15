import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main fill-window">
        {/* <Header theme={this.props.theme} /> */}
        <div className="basic-education" ref={this.props.reference}>
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img
                  src="https://media.giphy.com/media/kUA7mEHJfq1qxbEN8S/giphy.gif"
                  className="withAnimation"
                  alt="education!"
                />
                {/* <EducationImg theme={theme} /> */}
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  {/* Education */}
                  Courses and Extracurriculars
                </h1>
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Education;
