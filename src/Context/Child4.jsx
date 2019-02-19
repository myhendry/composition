import React from "react";

import { withDBContext, DBContext } from "./ContextTypes/DBContext";

const _Child = () => {
  return (
    <DBContext.Consumer>
      {({ data, toggleData }) => {
        return (
          <div>
            <p>{data.toString()}</p>
            <button onClick={toggleData}>Toggle Data</button>
          </div>
        );
      }}
    </DBContext.Consumer>
  );
};

export const Child4 = withDBContext(_Child);
