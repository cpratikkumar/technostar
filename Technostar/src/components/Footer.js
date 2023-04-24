import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <h1>TechnoStar</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h4>Follow Us</h4>
        <div>
          <a
            href="https://www.youtube.com/@devilpratikk8849"
            target={"_blank"}
            rel="noreferrer"
          >
            Youtube
          </a>
          <a href="https://github.com/" target={"_blank"} rel="noreferrer">
            Github
          </a>
          <a
            href="https://www.instagram.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
