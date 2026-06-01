import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { motion } from "framer-motion";
import styled from "styled-components";

import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.jsx";

const ContactData = contactPageData.contactSection;

// 🔥 Substitui o antigo style() do glamor
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

function Contact(props) {
  const theme = props.theme;

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <div className="basic-contact">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={
                  new URL(
                    `../../assets/images/${ContactData["profile_image_path"]}`,
                    import.meta.url,
                  ).href
                }
                alt=""
              />
            </div>

            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>

              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>

              <SocialMedia />
              <br />
              <br />

              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                Resume to download:
              </p>

              {greeting.resumeLink.map((resume) => (
                <AccentLink
                  theme={theme}
                  className="general-btn"
                  href={resume.link}
                  key={resume.role}
                >
                  {resume.role}
                </AccentLink>
              ))}

              <br />
            </div>
          </div>
        </motion.div>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
