import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import Button from "../button/Button";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  function toggleTextExpansion(e) {
    e.currentTarget.style.webkitLineClamp =
      e.currentTarget.style.webkitLineClamp !== "100" ? 100 : 2;
  }

  let cardBackgroundColor = theme.cardBackground
    ? theme.cardBackground
    : theme.highlight;

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: cardBackgroundColor }}
    >
      <Fade bottom duration={2000} distance="40px">
        {/* <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}> */}
        <div key={repo.id}>
          <div
            className="repo-name-div"
            onClick={() => openRepoinNewTab(repo.url)}
          >
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: "green" }}>
              {repo.name}
            </p>
          </div>
          <div>
            <p
              className="repo-description"
              style={{ color: "#1B4F50" }}
              onClick={toggleTextExpansion}
            >
              {repo.description}
            </p>
          </div>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              {repo.createdAt.split("T")[0]}
            </p>
          </div>
          {/* <br></br><br></br> */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              text="GO"
              theme={theme}
              className="visit-button"
              href={repo.url}
              newTab={true}
            ></Button>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}