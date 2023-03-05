import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function HeroSection() {
  let navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Find top-rated certified providers in your area.</h2>
        <div className="buttons">
          <button className="button doctor">Doctor</button>
          <button className="button dentist">Dentist</button>
          <button className="button chiropractor">Chiropractor</button>
        </div>
        <form className="search-form">
          <input type="text" placeholder="Type your location here" />
          <button
            onClick={() => navigate("/result")}
            type="submit"
            className="search-button"
            style={{ backgroundColor: "#8FEAB9" }}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
