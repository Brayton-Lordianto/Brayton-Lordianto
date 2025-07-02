import React, { Component } from "react";
import GithubRepoCard from "../../../components/githubRepoCard/GithubRepoCard";
import ProjectsData from "../../../shared/opensource/projects.json";
import "./../Projects.css";

class HackathonProjects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main" ref={this.props.reference}>
        <h1
          className="publications-heading-text"
          style={{
            color: theme.text,
            margin: 0,
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          Hackathon Projects
        </h1>
        <div className="repo-cards-div-main">
          {ProjectsData.hackathonProjects.map((repo, index) => {
            return (
              <GithubRepoCard
                key={`hackathon-${repo.id}-${index}`}
                repo={repo}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HackathonProjects;
