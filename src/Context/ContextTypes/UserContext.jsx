import React from "react";

// Refer to Child3 for UserContext.Consumer

// C1. Create User Context
// C2. Set up WithUserContext HOC with UserContext.Provider
// C3. Wrap HOC in _Child Child3
// C4. Use UserContext.Consumer

// C1. Create User Context
export const UserContext = React.createContext();

// export const withUserContext = WrappedComponent => props => {
//   class User extends React.Component {
//     render() {
//       return <WrappedComponent test="test" {...props} />;
//     }
//   }
//   return User;
// };

// C2. Set up WithUserContext HOC with UserContext.Provider
export const withUserContext = WrappedComponent => props => {
  return (
    <UserContext.Provider value={{ user: "hendry" }}>
      <WrappedComponent test="test" {...props} />
    </UserContext.Provider>
  );
};
