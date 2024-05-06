import React from "react";
import TwitterIcon from "../assets/twitter-icon.png";
import FacebookIcon from "../assets/facebook-icon.png";
import InstagramIcon from "../assets/instagram-icon.png";
import GithubIcon from "../assets/github-icon.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-icons">
        <li>
          <img src={TwitterIcon} alt="Twitter Icon" />
        </li>
        <li>
          <img src={FacebookIcon} alt="Linkedin Icon" />
        </li>
        <li>
          <img src={InstagramIcon} alt="Instagram Icon" />
        </li>
        <li>
          <img src={GithubIcon} alt="Github Icon" />
        </li>
      </ul>
    </footer>
  );
}
