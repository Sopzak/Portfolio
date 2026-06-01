import React from "react";
import "./DegreeCard.css";
import { motion } from "framer-motion";
import styled from "styled-components";

// 🔥 Substitui style_img do glamor
const ImageWrapper = styled.div`
  width: 220px;
  height: auto;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.accentColor};
  margin-right: 50px;
  box-shadow: 0px 0px 5px ${(props) => props.theme.accentColor};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px ${(props) => props.theme.accentColor};
  }

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-bottom: 15px;
    width: 175px;
  }
`;

// 🔥 Substitui card_body do glamor
const CardBody = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  border-left: 1px solid ${(props) => props.theme.accentColor};
  border-right: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 7px;
  width: 90%;
  margin: 10px;
  box-shadow: 0px 1px 5px ${(props) => props.theme.accentColor};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px ${(props) => props.theme.accentColor};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// 🔥 Substitui button_visit do glamor
const VisitButton = styled.p`
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  background: ${(props) => props.theme.accentColor};
  padding: 15px 15px;
  margin-top: 25px;
  border-radius: 4px;
  border-width: 0px;
  margin-bottom: 20px;
  width: 200px;
  height: 50px;
  font-weight: bold;
  font-family: "Google Sans Regular";
  font-size: 17px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 10px ${(props) => props.theme.accentColor};
  }
`;

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  return (
    <div className="degree-card">
      {/* Substituindo Flip left */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ImageWrapper theme={theme}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "40px",
            }}
            src={
              new URL(
                `../../assets/images/${degree.logo_path}`,
                import.meta.url,
              ).href
            }
            alt={degree.alt_name}
          />
        </ImageWrapper>
      </motion.div>

      {/* Substituindo Fade right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CardBody theme={theme}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>

            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>

          <div className="body-content">
            {degree.descriptions.map((sentence) => (
              <p
                className="content-list"
                style={{ color: theme.text }}
                key={sentence}
              >
                {sentence}
              </p>
            ))}

            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <VisitButton
                theme={theme}
                style={{ float: "right", marginRight: "23px" }}
              >
                Visit Website
              </VisitButton>
            </a>
          </div>
        </CardBody>
      </motion.div>
    </div>
  );
}

export default DegreeCard;
