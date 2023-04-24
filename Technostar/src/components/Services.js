import React from "react";
import img1 from "../assets/caro1.jpg";
import img2 from "../assets/caro2.jpg";
import img3 from "../assets/caro3.jpg";
import "../styles/Services.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function Services() {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1500}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="slide1" />
          <p className="legend">FullStack Developer</p>
        </div>
        <div>
          <img src={img2} alt="slide2" />
          <p className="legend">Peer To Peer Support</p>
        </div>
        <div>
          <img src={img3} alt="slide3" />
          <p className="legend">Machine Learning</p>
        </div>
      </Carousel>
    </div>
  );
}
