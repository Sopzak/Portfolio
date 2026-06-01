import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.jsx";

export default function Main(propss) {
console.log("Main.jsx montou. URL atual:", window.location.href);

  return (
    <Switch>
      {settings.isSplash ? (
        <Route
          exact
          path="/"
          render={(props) => (
            <Splash {...props} theme={propss.theme} setTheme={propss.setTheme} />
          )}
        />
      ) : (
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} theme={propss.theme} setTheme={propss.setTheme} />
          )}
        />
      )}

      <Route
        path="/home"
        render={(props) => (
          <Home {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />

      <Route
        path="/experience"
        render={(props) => (
          <Experience {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />

      <Route
        path="/education"
        render={(props) => (
          <Education {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />

      <Route
        path="/contact"
        render={(props) => (
          <Contact {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />

      <Route
        path="/projects"
        render={(props) => (
          <Projects {...props} theme={propss.theme} setTheme={propss.setTheme} />
        )}
      />

      {settings.isSplash && (
        <Route
          path="/splash"
          render={(props) => (
            <Splash {...props} theme={propss.theme} setTheme={propss.setTheme} />
          )}
        />
      )}
    </Switch>
  );
}

