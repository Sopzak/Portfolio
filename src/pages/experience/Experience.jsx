import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.jsx";
import "./Experience.css";
import { experience } from "../../portfolio.jsx";
import { motion } from "framer-motion";

import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;

  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <div className="basic-experience">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>

            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>

              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience.subtitle}
              </h3>

              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <ExperienceAccordion sections={experience.sections} theme={theme} />

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Experience;
