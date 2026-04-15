import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(FormContext);

  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeButton;