import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import styled from "styled-components";

// 🔥 Substitui o antigo style() do glamor
const Card = styled.div`
  color: rgb(88, 96, 105);
  background-color: ${(props) => props.theme.projectCard};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 2rem;
  cursor: pointer;
  border-radius: 5px;
  height: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: ${(props) => props.theme.imageDark} 0 2px 15px;
  }
`;

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    if (!url) return;

    if (!/^https?:\/\//i.test(url)) return;

    const win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* 🔥 Agora usando styled-components */}
        <Card
          theme={theme}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>

          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>

          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>

          {repo.source.map((image) => (
            <div className="repo-details" key={image}>
              <img
                className="repo-gif"
                src={
                  new URL(`../../assets/images/${image}`, import.meta.url).href
                }
                alt={repo.name}
              />
            </div>
          ))}
        </Card>
      </motion.div>
    </div>
  );
}
