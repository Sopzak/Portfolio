import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

import { greeting } from "../../portfolio.jsx";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <motion.p
        className="footer-text"
        style={{ color: props.theme.secondaryText }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Made with <span role="img">❤️</span> by {greeting.title2}
      </motion.p>
    </div>
  );
}
