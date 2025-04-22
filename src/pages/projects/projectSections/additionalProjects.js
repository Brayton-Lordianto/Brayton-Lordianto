import React, { Component } from "react";
import GithubRepoCard from "../../../components/githubRepoCard/GithubRepoCard";
import ProjectsData from "../../../shared/opensource/projects.json";
import "./../Projects.css";

class AdditionalProjects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main" ref={this.props.reference}>
        <div className="repo-cards-div-main-unflexed">
          <h1
            className="publications-heading-text"
            style={{ color: theme.text }}
          >
            {/* 🌟 Featured 🌟 */}
            Web and Mobile Projects
          </h1>
          {ProjectsData.additionalProjects.map((repo) => {
            return (
              <div key={repo.id}>
                <GithubRepoCard repo={repo} theme={theme} />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AdditionalProjects;
