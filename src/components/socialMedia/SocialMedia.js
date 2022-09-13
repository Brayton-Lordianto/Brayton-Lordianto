import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import devpostLogo from "./devpostLogo.png";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i
                className={`${media.fontAwesomeIcon}`}
                style={{ border: "1px solid yellow" }}
              ></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
      {/* added devpost logo since not available normally. */}
      <IconWrapper {...props}>
        <a href="https://devpost.com/bl3321">
          <img
            src={devpostLogo}
            alt="not here"
            className="devpostLogo boomEffect"
          ></img>
        </a>
      </IconWrapper>
    </div>
  );
}
