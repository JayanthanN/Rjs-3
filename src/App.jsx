
import ConditionalRendering from './Components/ConditionalRendering'
import Listrendering from './Components/Listrendering'
import Combinerendering from './Components/Combinerendering'
import SignInandOut from './Components/SignInandOut'
import RegForm from './Components/RegForm'
import Stopwatch from './Components/Stopwatch'
import ProfileImageUpdate from './Components/Profileimage'
import Parent from './Component/Parent'
import React, { useState } from "react";
import { FormContext } from "./Components/FormContext";
import Form from "./Components/Form";
import "./App.css";


const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        handleSubmit,
        theme,
        toggleTheme,
      }}
    >
      <div className={`app ${theme}`}>
        <Form />
      </div>
    </FormContext.Provider>
  );
};

export default App;
