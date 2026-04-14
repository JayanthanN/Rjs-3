import React from "react";
import Child5 from "./Child5";

const Child4 = ({ data }) => {
  return (
    <div className="box child">
      <h3>Child 4</h3>
      <Child5 data={data} />
    </div>
  );
};

export default Child4;