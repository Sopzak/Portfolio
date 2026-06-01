import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import FeelingProud from "./FeelingProud";

// 🔥 Substitui o antigo "style()" do glamor
const AccentButton = styled.button`
  background-color: ${(props) => props.theme.accentBright};
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px ${(props) => props.theme.accentBright};
  }
`;

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  return (
    <motion.div
      className="greet-main"
      style={{ color: theme.text }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="greeting"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{greeting.title}</h1>
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              <span>I'm </span>
              <span style={{ color: theme.accentColor }}>
                {greeting.full_name}.{" "}
              </span>
              {greeting.subTitle}
            </p>

            <SocialMedia />

            <div className="portfolio-repo-btn-div">
              <AccentButton
                theme={theme}
                className="button"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </AccentButton>

              <AccentButton
                theme={theme}
                className="button"
                onClick={() => navigate("/projects")}
              >
                Portfolio
              </AccentButton>
            </div>
          </div>
        </div>

        <div className="greeting-image-div">
          <FeelingProud theme={theme} />
        </div>
      </div>
    </motion.div>
  );
}
