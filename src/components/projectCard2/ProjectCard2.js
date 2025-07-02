import React from "react";
import { Fade } from "react-reveal";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";

const ProjectCard2 = ({ repo, theme }) => {
  const openRepoinNewTab = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="project-card"
        style={{
          backgroundColor: theme.cardBackground || theme.highlight,
          color: theme.header || theme.text,
        }}
      >
        <div
          className="project-image-container"
          style={{ backgroundColor: theme.imageHighlight }}
        >
          {repo.imagePath ? (
            <img
              src={require(`../../assests/images/${repo.imagePath}`)}
              alt={repo.name}
              className="project-image"
            />
          ) : (
            <div className="project-icon-container">
              <svg
                aria-hidden="true"
                className="project-icon"
                viewBox="0 0 12 16"
                style={{ fill: theme.text }}
              >
                <path
                  fillRule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="project-content">
          <h2
            className="project-title"
            style={{ color: theme.text, wordWrap: "break-word" }}
          >
            {repo.name}
          </h2>

          <p
            className="project-description"
            style={{ color: theme.secondaryText, wordWrap: "break-word" }}
          >
            {repo.description}
          </p>

          <div className="project-footer">
            <div className="project-meta">
              {/* <p 
                className="project-date"
                style={{ color: theme.secondaryText }}
              >
                {repo.createdAt.split("T")[0]}
              </p>
              <div className="project-stars" style={{ color: theme.secondaryText }}>
                ★ {repo.stars}
              </div>
               */}
              {/* <div className="project-languages">
                <ProjectLanguages logos={repo.languages} />
              </div> */}
            </div>

            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{ color: theme.secondaryText, wordWrap: "break-word" }}
            >
              View Project
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

const ProjectGrid = ({ repos, theme }) => {
  return (
    <div className="projects-grid">
      {repos.map((repo, index) => (
        <ProjectCard2
          key={`cv-${repo.id}-${index}`}
          repo={repo}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default ProjectCard2;
export { ProjectGrid };
