import React from "react";
import { adopt } from "react-adopt";

import { StatusContext } from "./ContextTypes/StatusContext";
import { LanguageContext } from "./ContextTypes/LanguageContext";
import { ThemeContext } from "./ContextTypes/ThemeContext";

// Context using Render Props
const Composed = adopt({
  status: <StatusContext />,
  language: <LanguageContext />,
  theme: <ThemeContext />
});

export const Child2 = () => {
  return (
    <Composed>
      {({
        language,
        status: { status, toggleStatus },
        theme: { theme, setLightTheme, setDarkTheme }
      }) => {
        return (
          <div>
            <p>{language}</p>
            <p>{status.toString()}</p>
            <button onClick={toggleStatus}>Toggle Status</button>
            <p>{theme}</p>
            <button onClick={setLightTheme}>Light Theme</button>
            <button onClick={setDarkTheme}>Dark Theme</button>
          </div>
        );
      }}
    </Composed>
  );
};
