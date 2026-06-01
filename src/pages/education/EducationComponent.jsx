import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { motion } from "framer-motion";

function Education(props) {
  const theme = props.theme;

  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />

      <div className="basic-education">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>

            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>

              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Degrees
              </h3>

              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in hackathons and other tech-related
                activities.
              </p>
            </div>
          </div>
        </motion.div>

        <Educations theme={props.theme} />
      </div>

      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
