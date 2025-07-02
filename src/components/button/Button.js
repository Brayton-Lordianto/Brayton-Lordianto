import React from "react";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function Button({
  text,
  className,
  href,
  newTab,
  theme,
  isSpecial,
}) {
  if (isSpecial) {
    return (
      <div className={className}>
        <a
          className="main-button special-button"
          href={href}
          target={newTab && "_blank"}
          style={{
            color: "#03e9f4",
            backgroundColor: "#000000",
            border: `solid 1px #03e9f4`,
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(event) => onMouseEnter(event, "#ffffff", "#56018D")}
          onMouseOut={(event) => onMouseOut(event, "#03e9f4", "#000000")}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
      >
        {text}
      </a>
    </div>
  );
}
