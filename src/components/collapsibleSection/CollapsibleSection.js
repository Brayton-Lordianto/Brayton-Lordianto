import React, { useState } from "react";

const CollapsibleSection = ({
  title,
  children,
  theme,
  defaultCollapsed = false,
  customStyles = {},
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  // Default theme fallback
  const defaultTheme = {
    highlight: "#f0f0f0",
    text: "#333",
    secondaryText: "#666",
    header: "#333",
  };

  const currentTheme = theme || defaultTheme;

  return (
    <div
      className="projects-main"
      style={{
        margin: "2rem 0",
        borderRadius: "10px",
        overflow: "hidden",
        ...customStyles.container,
      }}
    >
      <div
        className="category-header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          borderBottom: isCollapsed
            ? "none"
            : `1px solid ${currentTheme.secondaryText}20`,
          transition: "all 0.3s ease",
          ...customStyles.header,
        }}
      >
        <h1
          className="projects-heading-text"
          style={{
            color: currentTheme.header || currentTheme.text,
            margin: 0,
            fontSize: "2.5rem",
            fontWeight: "600",
            flex: 1,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <span
          style={{
            transition: "transform 0.3s ease",
            transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
            color: "#868e96",
            fontSize: "1.5rem",
            marginLeft: "auto",
          }}
        >
          ▼
        </span>
      </div>

      <div
        style={{
          maxHeight: isCollapsed ? "0" : "5000px",
          overflow: "hidden",
          transition: "all 0.3s ease-out",
          opacity: isCollapsed ? 0 : 1,
          padding: isCollapsed ? "0 2rem" : "2rem",
          ...customStyles.content,
        }}
      >
        <div className="repo-cards-div-main">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
