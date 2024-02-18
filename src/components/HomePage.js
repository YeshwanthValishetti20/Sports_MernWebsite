import React from "react";
import NavbarPage from "./NavbarPage";
import Images from "./Images";
import KreedaSection from "./KreedaSection";
import TodayMatchesList from "./TodayMatchesList";
//import Winners from "./Winners";

import ClubMembers from "./ClubMembers";
//import Livematches from "./Livematches";

function HomePage() {
  return (
    <div className="homepage-container" style={{ backgroundColor: "white" }}>
      <NavbarPage />
      <Images />
      <KreedaSection />
      {/* <Livematches/> */}
      <TodayMatchesList />
      {/* <Winners/> */}
      <ClubMembers />
      {/* Follow Us Section */}
      <div className="follow-us-section mt-4 text-center">
        <h2>Follow Us</h2>
        <div className="d-flex justify-content-center align-items-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark me-3" // Added margin to the right
          >
            <i className="bi bi-twitter fs-3"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark me-3" // Added margin to the right
          >
            <i className="bi bi-facebook fs-3"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-dark" // No margin added to the last icon
          >
            <i className="bi bi-instagram fs-3"></i>
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer mt-4">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Chaitanya Kreeda. All Rights
            Reserved.
          </p>
        </div>
      </footer>
      {/* Add other components as needed */}
    </div>
  );
}

export default HomePage;