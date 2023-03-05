import { useState } from "react";
import { Link } from "react-router-dom";
import "./registration.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="container">
      <div className="registration-form-container">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="termsAccepted"
              className="form-label form-checkbox-label"
            >
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                required
                className="form-checkbox"
              />
              <span className="checkmark"></span>
              <span className="form-checkbox-text">
                I accept the terms and conditions
              </span>
            </label>
          </div>
          <button type="submit" className="form-button">
            Create Account
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
