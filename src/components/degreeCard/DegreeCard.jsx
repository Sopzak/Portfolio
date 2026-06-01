import React from "react";
import "./DegreeCard.css";
import { motion } from "framer-motion";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: "50%",
    padding: "10px",
    border: `1px solid ${theme.accentColor}`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  });

  return (
    <div className="degree-card">
      {/* Substituindo Flip left */}
      <motion.div
        {...style_img}
        initial={{ opacity: 0, rotateY: -90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "40px",
          }}
          src={
            new URL(`../../assets/images/${degree.logo_path}`, import.meta.url)
              .href
          }
          alt={degree.alt_name}
        />
      </motion.div>

      {/* Substituindo Fade right */}
      <motion.div
        {...card_body}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
            <p
              {...button_visit}
              style={{
                marginRight: "23px",
                textDecoration: "none",
                float: "right",
                backgroundColor: theme.accentColor,
              }}
            >
              Visit Website
            </p>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default DegreeCard;
