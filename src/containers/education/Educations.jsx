import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.jsx";
import { degrees } from "../../portfolio";
import { motion } from "framer-motion";


function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <motion.h1
          className="educations-header"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Degree and Certifications Received
        </motion.h1>

      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
