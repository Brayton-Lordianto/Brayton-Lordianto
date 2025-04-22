import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import PublicationData from "../../shared/opensource/publications.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// different sections of projects
import AdditionalProjects from "./projectSections/additionalProjects";
import HackathonProjects from "./projectSections/hackathonProjects.js";
import ComputerVisionProjects from "./projectSections/computerVisionProjects.js";
import CollapsibleSection from "../../components/collapsibleSection/CollapsibleSection";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main" ref={this.props.reference}>
        {/* <Header theme={theme} /> */}

        {/* just the heading */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>

        {/* the cards */}
        <CollapsibleSection>
          <AdditionalProjects theme={theme} />
          <HackathonProjects theme={theme} />
        </CollapsibleSection>
        <ComputerVisionProjects theme={theme} />

        <Button
          text={"View All Repositories on Github"}
          className="project-button"
          style={{ display: "flex" }}
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        <Button
          text={"View All Hackathon Projects on Devpost"}
          className="project-button"
          style={{ display: "flex" }}
          href={greeting.devpostProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
