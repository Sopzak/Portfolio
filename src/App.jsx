import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main.jsx";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import { HashRouter } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <HashRouter>
        <GlobalStyles />
        <Main theme={themes[theme]} setTheme={setTheme} />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
