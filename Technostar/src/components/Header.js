import React from "react";
import "../styles/Header.css";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <nav>
      <h1>TechnoStar</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/contact"}>Contact</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <HashLink to={"/services"}>Services</HashLink>
      </main>
    </nav>
  );
}
