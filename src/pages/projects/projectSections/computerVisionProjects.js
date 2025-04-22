import React, { Component } from "react";
import ProjectsData from "../../../shared/opensource/projects.json";
import CollapsibleSection from "../../../components/collapsibleSection/CollapsibleSection";
import "./../Projects.css";
// import ProjectCard2 from "../../../components/projectCard2/ProjectCard2";
import { ProjectGrid } from "../../../components/projectCard2/ProjectCard2";

class ComputerVisionProjects extends Component {
  render() {
    const theme = { ...this.props.theme };
    theme.header = "#E6E6E6";
    theme.text = "#1A1A2E";
    theme.highlight = "#1A1A2E";
    theme.cardBackground = "#E6E6E6";

    return (
      <CollapsibleSection title="Computer Vision Projects" theme={theme}>
        <ProjectGrid
          repos={ProjectsData.computerVisionProjects}
          theme={theme}
        />
      </CollapsibleSection>
    );
  }
}

export default ComputerVisionProjects;
