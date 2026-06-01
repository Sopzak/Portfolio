import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main.jsx";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import ReactGA from "react-ga";
import { HashRouter } from "react-router-dom";

function App() {
  /*useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);*/

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  console.log("Renderizando Main dentro do App");

  return (
    <ThemeProvider theme={themes[theme]}>
      <HashRouter>
        <>
          <GlobalStyles />
          <div>
              <Main theme={themes[theme]} setTheme={setTheme} />
          </div>
        </>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
