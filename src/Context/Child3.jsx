import React from "react";

import { withUserContext, UserContext } from "./ContextTypes/UserContext";

// C4. Use UserContext.Consumer
const _Child = props => {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        return <div>{user}</div>;
      }}
    </UserContext.Consumer>
  );
};

// C3. Wrap HOC in _Child Child3
const Child3 = withUserContext(_Child);

export { Child3 };
