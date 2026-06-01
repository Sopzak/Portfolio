import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";

import { settings } from "../portfolio.jsx";

export default function Main(propss) {
  const { theme, setTheme } = propss;

  return (
    <Routes>
      {/* Rota inicial depende do settings.isSplash */}
      <Route
        path="/"
        element={
          settings.isSplash ? (
            <Splash theme={theme} setTheme={setTheme} />
          ) : (
            <Home theme={theme} setTheme={setTheme} />
          )
        }
      />

      {/* Rotas normais */}
      <Route
        path="/home"
        element={<Home theme={theme} setTheme={setTheme} />}
      />

      <Route
        path="/experience"
        element={<Experience theme={theme} setTheme={setTheme} />}
      />

      <Route
        path="/education"
        element={<Education theme={theme} setTheme={setTheme} />}
      />

      <Route
        path="/contact"
        element={<Contact theme={theme} setTheme={setTheme} />}
      />

      <Route
        path="/projects"
        element={<Projects theme={theme} setTheme={setTheme} />}
      />

      {/* Rota splash opcional */}
      {settings.isSplash && (
        <Route
          path="/splash"
          element={<Splash theme={theme} setTheme={setTheme} />}
        />
      )}
    </Routes>
  );
}
