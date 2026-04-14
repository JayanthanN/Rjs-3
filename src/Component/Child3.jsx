import React from "react";
import Child4 from "./Child4";

const Child3 = ({ data }) => {
  return (
    <div className="box child">
      <h3>Child 3</h3>
      <Child4 data={data} />
    </div>
  );
};

export default Child3;