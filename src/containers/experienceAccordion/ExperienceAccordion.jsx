import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.jsx";
import "./ExperienceAccordion.css";

function ExperienceAccordion({ sections, theme }) {
  return (
    <div
      className="experience-accord"
      style={{ backgroundColor: theme.body }}
    >
      {sections.map((section) => (
        <div className="experience-section" key={section.title}>
          <h2
            className="experience-section-title"
            style={{ color: theme.text }}
          >
            {section.title}
          </h2>

          <div className="experience-section-cards">
            {section.experiences.map((experience) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                theme={theme}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceAccordion;
