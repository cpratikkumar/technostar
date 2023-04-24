import React from "react";
import img1 from "../assets/boy.png";
import "../styles/Home.css";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechnoStar</h1>
          <p>Solution to All Your Problem</p>
        </main>
      </div>
      <div className="home2" id="services">
        <img src={img1} alt="boy" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading teach company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1> Who we Are ?</h1>
          <p>
            We are the world top best tech company whose provides services and
            helps the students to increses their problem solving skills,
            increses thinking ability and many many other top skills we
            provides.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.1s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.6s" }}>
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
