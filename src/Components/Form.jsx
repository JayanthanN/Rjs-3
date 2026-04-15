import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import Fields from "./Field";
import ThemeButton from "./ThemeButton";

const Form = () => {
  const { handleSubmit, theme } = useContext(FormContext);

  return (
    <div className={`form-container ${theme}`}>
      <h2 className="form-title">LOGIN</h2>

      <form onSubmit={handleSubmit}>
        <Fields />
        <ThemeButton />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;