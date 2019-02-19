import React from "react";

const withHOC = WrappedComponent => props => {
  const data1 = "hello";

  const data2 = {
    name: "Jerry",
    age: 22
  };

  const func1 = (arg1, arg2) => {
    return arg1 + arg2;
  };

  return (
    <WrappedComponent {...props} data1={data1} data2={data2} func1={func1} />
  );
};

export { withHOC };
