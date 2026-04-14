import React from "react";
import Child2 from "./Child2";

const Child1 = ({ data }) => {
  return (
    <div className="box child">
      <h3>Child 1</h3>
      <Child2 data={data} />
    </div>
  );
};

export default Child1;