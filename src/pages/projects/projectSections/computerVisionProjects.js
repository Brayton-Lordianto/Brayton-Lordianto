import React, { Component } from "react";
import ProjectsData from "../../../shared/opensource/projects.json";
import CollapsibleSection from "../../../components/collapsibleSection/CollapsibleSection";
import "./../Projects.css";
// import ProjectCard2 from "../../../components/projectCard2/ProjectCard2";
import { ProjectGrid } from "../../../components/projectCard2/ProjectCard2";

class VisualComputingProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
    this.collapsibleRef = React.createRef();
  }

  componentDidMount() {
    // Expose uncollapse function globally
    window.visualComputingUncollapse = () => {
      this.setState({ isCollapsed: false });
    };
  }

  componentWillUnmount() {
    // Clean up global function
    delete window.visualComputingUncollapse;
  }

  render() {
    const theme = { ...this.props.theme };
    theme.header = "#E6E6E6";
    theme.text = "#1A1A2E";
    theme.highlight = "#1A1A2E";
    theme.cardBackground = "#E6E6E6";

    return (
      <div ref={this.props.reference}>
        <CollapsibleSection
          title="Visual Computing Projects"
          theme={theme}
          isCollapsed={this.state.isCollapsed}
          onToggle={() =>
            this.setState({ isCollapsed: !this.state.isCollapsed })
          }
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            {/* Computer Vision Subsection */}
            <div>
              <h2
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                  borderBottom: `2px solid ${theme.highlight}`,
                  paddingBottom: "0.5rem",
                }}
              >
                Computer Vision
              </h2>
              <ProjectGrid
                repos={ProjectsData.computerVisionProjects}
                theme={theme}
              />
            </div>

            {/* Mesh & Geometric Processing Subsection */}
            <div>
              <h2
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                  borderBottom: `2px solid ${theme.highlight}`,
                  paddingBottom: "0.5rem",
                }}
              >
                Mesh & Geometric Processing
              </h2>
              <ProjectGrid
                repos={ProjectsData.meshGeometricProcessingProjects}
                theme={theme}
              />
            </div>

            {/* Rendering & Real-time Graphics Subsection */}
            <div>
              <h2
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                  borderBottom: `2px solid ${theme.highlight}`,
                  paddingBottom: "0.5rem",
                }}
              >
                Rendering & Real-time Graphics
              </h2>
              <ProjectGrid
                repos={ProjectsData.renderingRealTimeProjects}
                theme={theme}
              />
            </div>
          </div>
        </CollapsibleSection>
      </div>
    );
  }
}

export default VisualComputingProjects;
