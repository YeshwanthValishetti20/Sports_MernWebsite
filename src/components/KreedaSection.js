import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const numberOfImages = 10;
const images = Array.from({ length: numberOfImages }, (_, index) => index + 1);

const imagesUrls = [
  "/images/cric.png",
  "/images/volley.png",
  "/images/basketb.png",
  "/images/kabaddi.png",
  "/images/football.png",
  "/images/badmin.png",
  "/images/tt.png",
  "/images/throwball.png",
  "/images/carrom.png",
  "/images/chess.png",
];

const gamePaths = [
  "/cricket",
  "/vollyball",
  "/basketball",
  "/kabaddi",
  "/football",
  "/badminton",
  "/tabletennis",
  "/throwball",
  "/carroms",
  "/chess",
];

function KreedaSection() {
  const [isScrolling, setScrolling] = useState(true);
  const sectionRef = useRef(null);

  const handleMouseEnter = () => {
    setScrolling(false);
  };

  const handleMouseLeave = () => {
    setScrolling(true);
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="kreeda-section" style={{ padding: "40px 0", borderBottom: "1px solid #ddd" }} ref={sectionRef}>
      <style>
        {`
          .scrolling-image-section {
            display: flex;
            overflow: hidden;
            margin-top: 20px;
            justify-content: center;
          }

          .scrolling-image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .scrolling-image {
            width: 200px;
            height: 200px;
            margin: 10px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
          }
        `}
      </style>
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Chaitanya Kreeda</h2>

        <div className="row">
          <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
            <img
              src="/images/kreeda_logo.jpg"
              alt="Kreeda Logo"
              className="kreeda-logo rounded-circle img-fluid"
              style={{ width: "200px", height: "200px" }}
            />
          </div>

          <div className="col-md-4">
  <div className="matter-box p-4" style={{ textAlign: 'justify' }}>
    <p>
      Chaitanya Kreeda, the sports & games club of CBIT is highly active not only in organizing various competitions at various levels but also in encouraging, training, motivating and facilitating the students to participate in University, state, national and international level events.
      <br />
      The club is also active in contributing to the 'Fit India' movement and in the conduct of 'Yoga day' every year. The institute has created a separate block for facilitating indoor sports and games activities, besides meeting the requirement of outdoor games for all the students. Over the last 42 years, there have been many instances where the students of CBIT have figured among the achievers of various levels.
    </p>
  </div>
</div>


          <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
            <img
              src="/images/Chaitanya_Bharathi_Institute_of_Technology_logo.png"
              alt="Second Logo"
              className="second-logo rounded-circle img-fluid"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        </div>
        <hr/>
        <h2 style={{ textAlign: 'center' }}>Games</h2>

        <div className="scrolling-image-section">
          <div className="scrolling-image-container">
            {images.map((index) => (
              <Link key={index} to={gamePaths[index - 1]} className="scrolling-image" style={{ backgroundImage: `url(${imagesUrls[index - 1]})` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KreedaSection;
