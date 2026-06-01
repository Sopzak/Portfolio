import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import styled from "styled-components";

import { projectsHeader, projects } from "../../portfolio.jsx";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// 🔥 Substitui o antigo "style()" do glamor
const AccentLink = styled.a`
  background-color: ${(props) => props.theme.accentBright};
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 5px 15px ${(props) => props.theme.accentBright};
  }
`;

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <div className="basic-projects">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>

            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>

              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} key={repo.id} />;
        })}
      </div>

      <br />
      <br />
      <br />

      {/* 🔥 Agora usando styled-components */}
      <AccentLink
        theme={theme}
        className="general-btn"
        href="https://github.com/Sopzak/"
      >
        More Projects (Github)
      </AccentLink>

      <br />
      <br />

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
