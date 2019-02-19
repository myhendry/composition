import React, { Fragment } from "react";

import { ThemeContext } from "./ContextTypes/ThemeContext";
import { LanguageContext } from "./ContextTypes/LanguageContext";

// A4. Wrap ThemeContext.Consumer with Child Component
// B3. Wrap LanguageContext.Consumer with Child Component
export const Child = () => {
  return (
    <Fragment>
      <ThemeContext.Consumer>
        {({ theme, setDarkTheme, setLightTheme }) => {
          console.log("@theme ", theme);
          return (
            <div>
              Theme: {theme}
              <button onClick={setDarkTheme}>Dark Theme</button>
              <button onClick={setLightTheme}>Light Theme</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
      <LanguageContext.Consumer>
        {language => {
          console.log("@language ", language);
          return <div>Language: {language}</div>;
        }}
      </LanguageContext.Consumer>
    </Fragment>
  );
};
