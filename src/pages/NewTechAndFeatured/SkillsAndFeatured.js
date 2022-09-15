import React from "react";
import Skills from "../../containers/skills/Skills";
import SkillSection from "../../containers/skills/SkillSection";
import "./SkillsAndFeatured.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectsData from "../../shared/opensource/projects.json";

// a side by side view
// technical skills, then on the side the featured projects
export default function SkillsAndFeatured(props) {
  return (
    <div className="skills-and-featured-main">
      {/* <SkillsAndFeatured theme={props.theme} /> */}
      <div style={{ width: "45%" }}>
        <center>
          <h1>My technical experience</h1>
        </center>
        <SkillSection theme={props.theme} />
      </div>
      <div style={{ width: "45%", textAlign: "center" }}>
        <h1>Featured Projects</h1>
        {ProjectsData.featuredProjects.map((repo) => {
          return (
            <div>
              <GithubRepoCard repo={repo} theme={props.theme} />
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
