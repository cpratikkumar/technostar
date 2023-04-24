import React from "react";
import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label for="name">Name :</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              autoComplete="off"
            />
          </div>
          <div>
            <label for="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              autoComplete="off"
            />
          </div>
          <div>
            <label for="message">Message :</label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Tell us Your Query..."
              autoComplete="off"
            />
          </div>
        </form>
        <button>Submit </button>
      </main>
    </div>
  );
}
