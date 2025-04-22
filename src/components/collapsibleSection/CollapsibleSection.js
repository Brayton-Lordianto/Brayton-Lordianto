import React, { useState } from "react";

const CollapsibleSection = ({
  title,
  children,
  theme,
  defaultCollapsed = true,
  customStyles = {},
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <div
      className="projects-main"
      style={{
        margin: "2rem 0",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: theme.highlight,
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
          backgroundColor: theme.highlight,
          borderBottom: isCollapsed
            ? "none"
            : `1px solid ${theme.secondaryText}20`,
          transition: "all 0.3s ease",
          ...customStyles.header,
        }}
      >
        <h1
          className="projects-heading-text"
          style={{
            color: theme.header || theme.text,
            margin: 0,
            fontSize: "2rem",
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
            color: theme.text,
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
