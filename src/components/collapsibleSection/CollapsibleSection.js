import React, { useState } from "react";
import "./CollapsibleSection.css";

const CollapsibleSection = ({
  title,
  children,
  theme,
  defaultCollapsed = false,
  customStyles = {},
  specialHeader = false,
  isCollapsed: controlledIsCollapsed,
  onToggle,
}) => {
  const [internalIsCollapsed, setInternalIsCollapsed] = useState(
    defaultCollapsed
  );

  // Use controlled state if provided, otherwise use internal state
  const isCollapsed =
    controlledIsCollapsed !== undefined
      ? controlledIsCollapsed
      : internalIsCollapsed;
  const handleToggle =
    onToggle || (() => setInternalIsCollapsed(!internalIsCollapsed));

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
        className={`category-header ${specialHeader ? "special-header" : ""}`}
        onClick={handleToggle}
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
          position: "relative",
          overflow: "hidden",
          backgroundColor: specialHeader ? "#000000" : "transparent",
          border: specialHeader ? "1px solid #03e9f4" : "none",
          borderRadius: specialHeader ? "8px" : "0",
          ...customStyles.header,
        }}
      >
        {specialHeader && (
          <>
            <span className="header-border-animation header-border-top"></span>
            <span className="header-border-animation header-border-right"></span>
            <span className="header-border-animation header-border-bottom"></span>
            <span className="header-border-animation header-border-left"></span>
          </>
        )}
        <h1
          className="projects-heading-text"
          style={{
            color: specialHeader
              ? "#03e9f4"
              : currentTheme.header || currentTheme.text,
            margin: 0,
            fontSize: "2.5rem",
            fontWeight: "600",
            flex: 1,
            textAlign: "center",
            zIndex: 10,
            position: "relative",
          }}
        >
          {title}
        </h1>
        <span
          style={{
            transition: "transform 0.3s ease",
            transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
            color: specialHeader ? "#03e9f4" : "#868e96",
            fontSize: "1.5rem",
            marginLeft: "auto",
            zIndex: 10,
            position: "relative",
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
