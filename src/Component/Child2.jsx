import React from "react";
import Child3 from "./Child3";

const Child2 = ({ data }) => {
  return (
    <div className="box child">
      <h3>Child 2</h3>
      <Child3 data={data} />
    </div>
  );
};

export default Child2;