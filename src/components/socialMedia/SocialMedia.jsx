import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  return (
    <div className="social-media-div">

      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="iconify"
          data-icon="mdi:github"
        ></span>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="iconify"
          data-icon="mdi:linkedin"
        ></span>
        <span></span>
      </a>

      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="iconify"
          data-icon="mdi:google"
        ></span>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="iconify"
          data-icon="mdi:instagram"
        ></span>
        <span></span>
      </a>

      <a
        href={socialMediaLinks.facebook}
        className="icon-button facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className="iconify"
          data-icon="mdi:facebook"
        ></span>
        <span></span>
      </a>

    </div>
  );
}
