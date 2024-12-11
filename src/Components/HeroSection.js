import React from "react";
import "../App.css";
import { Button } from "./button";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="../videos/video-2.mp4" autoPlay loop muted />
      <h1>Misinformation</h1>
      <p>Learn All About It: </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link="/examples"
        >
          EXAMPLES
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link="/phil-ideas"
        >
          PHILISOPHICAL IDEAS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link="/ai-detector"
        >
          TRY AI DETECTOR <i className="far fa-play-circle" />
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link="/bibliography"
        >
          BIBLIOGRAPHY
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
