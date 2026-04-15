import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const Fields = () => {
  const { formData, handleChange } = useContext(FormContext);

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default Fields;