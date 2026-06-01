import React from "react";
import "./CertificationCard.css";
import { motion } from "framer-motion";
import styled from "styled-components";

// 🔥 Substitui o antigo style() do glamor
const CardWrapper = styled.div`
  box-shadow: 0px 2px 5px ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  transition: all 0.2s ease-in-out;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 5px 15px ${(props) => props.color};
  }
`;

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* 🔥 Agora usando styled-components */}
      <CardWrapper className="cert-card" color={certificate.color_code}>
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>

            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={
                  new URL(
                    `../../assets/images/${certificate.logo_path}`,
                    import.meta.url,
                  ).href
                }
                alt={certificate.alt_name}
              />
            </div>
          </a>
        </div>

        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>

          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </CardWrapper>
    </motion.div>
  );
}

export default CertificationCard;
