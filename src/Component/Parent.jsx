import React from "react";
import Child1 from "./Child1";

const Parent = () => {
  const message = "Hello from the Parent Component! ";

  return (
    <div className="box parent">
      <h2>Parent Component</h2>
      <Child1 data={message} />
    </div>
  );
};

export default Parent;