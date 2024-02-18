import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function SportsFixtures() {
  const [showMenCarousel, setShowMenCarousel] = useState(false);
  const [showWomenCarousel, setShowWomenCarousel] = useState(false);

  const menImages = [
    "/images/BOYSMAIN.jpg","/images/boyscricket.jpg",
    "/images/boysvolley.jpg","/images/boysbasket.jpg",
    "/images/boystable.jpg","/images/boysbadminton.jpg",
    "/images/boyskabaddi.jpg","/images/boysfootball.jpg",
    "/images/boyscarrom.jpg","/images/boyschess.jpg"
  ];

  const womenImages = [
    "/images/girlmain.jpg",
    "/images/girlthrowball.jpg",
    "/images/girlbadminton.jpg",
    "/images/girltabletennis.jpg",
    "/images/girlvolleyball.jpg",
    "/images/girlbasketball.jpg",
    "/images/girlcricket.jpg",
    "/images/girlchess.jpg",
    "/images/girlcarrom.jpg",
    "/images/girltennicoit.jpg"
  ];

  const showMen = () => {
    setShowMenCarousel(true);
    setShowWomenCarousel(false); // Hide women's carousel
  };

  const showWomen = () => {
    setShowMenCarousel(false); // Hide men's carousel
    setShowWomenCarousel(true);
  };

  return (
    <div className="container" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background image with blur effect */}
      <div className="background-image" style={{ backgroundImage: "url('/images/lightsstage.png')", filter: (showMenCarousel || showWomenCarousel) ? "blur(5px)" : "none", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}></div>

      <h2 className="text-center" style={{ color: "white", fontWeight: "bold" }}>Sports Fixtures</h2>
      <div className="text-center mb-4">
        <button className="btn btn-primary mx-2" onClick={showMen} disabled={showMenCarousel}>
          MEN
        </button>
        <button className="btn btn-primary mx-2" onClick={showWomen} disabled={showWomenCarousel}>
          WOMEN
        </button>
      </div>

      {showMenCarousel && (
        <div className="mb-5">
          <h3 className="text-center" style={{ color: "white", fontWeight: "bold" }}>Men's Fixtures</h3>
          <Carousel style={{ height: "500px" }}>
            {menImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Men's Image ${index + 1}`} style={{ maxHeight: "500px", objectFit: "contain" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}

      {showWomenCarousel && (
        <div className="mb-5">
          <h3 className="text-center" style={{ color: "white", fontWeight: "bold" }}>Women's Fixtures</h3>
          <Carousel style={{ height: "500px" }}>
            {womenImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Women's Image ${index + 1}`} style={{ maxHeight: "500px", objectFit: "contain" }} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default SportsFixtures;
