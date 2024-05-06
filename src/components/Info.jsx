import React from "react";
import RachelTschanz from "../assets/meeeee.png";
import LinkedinIcon from "../assets/linkedin-icon.png";
import EmailIcon from "../assets/email-icon.png";
import "./Info.css";

export default function Info() {
  return (
    <header>
      <img src={RachelTschanz} alt="Rachel Tschanz" />
      <h1>Rachel Tschanz</h1>
      <h2>Front-End Developer</h2>
      <p>rt@raedesign.org</p>
      <div className="buttons">
        <button className="email-btn">
          <img src={EmailIcon} alt="Email Icon" />
          Email
        </button>
        <button className="linkedin-btn">
          <img src={LinkedinIcon} alt="Linkedin Icon" />
          LinkedIn
        </button>
      </div>
    </header>
  );
}
