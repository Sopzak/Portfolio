import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { motion } from "framer-motion";

import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.jsx";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

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

              {greeting.resumeLink.map((resume) => {
                return (
                  <a
                    {...styles}
                    className="general-btn"
                    href={resume.link}
                    key={resume.role}
                  >
                    {resume.role}
                  </a>
                );
              })}

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
