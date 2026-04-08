import React, { useState } from "react";
import "./Form.css";

const RegForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.country ||
      !formData.zipcode
    ) {
      newErrors.all = "All fields are required";
    }

    return newErrors; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>REGISTRATION FORM</h2>

        {error.all && <p className="error">{error.all}</p>}

        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <input
              type={key.includes("password") ? "password" : "text"}
              name={key}
              placeholder={key.toUpperCase()}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegForm;

