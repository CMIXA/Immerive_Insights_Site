import React from "react";
// import "../css/Pricing.css";
import Button1 from "../components/Button1";
import RPcard from "../components/RPcard";

const Home = () => {
  return (
    <div className="home-container">
      <div className="h-section-1">
        <div className="h-s1-wrapper">
          <div>
            <h1>Contribute to the future of XR</h1>
            <p>
              Join the XR Testing Community and Shape the Future of Immersive
              Technology
            </p>
            <Button1 />
            <Button1 />
          </div>
        </div>
      </div>
      <div className="h-section-2">
        <div className="h-s2-wrapper">
          <div>
            <h1>Recruit Participants</h1>
          </div>
          <div className="h-s2-card-container">
            <RPcard />
            <RPcard />
            <RPcard />
          </div>
        </div>
      </div>
      <div className="h-section-3">
        <div></div>
        <div>
          <h2>Find XR users to test the next generation of UX</h2>
          <p>
            Exploring the usability of VR and AR technology requires the
            insights and feedback of individuals who are familiar with and
            proficient in using such systems. Therefore, identifying and
            engaging with experienced XR users is crucial to developing and
            refining the next generation of user experiences for this innovative
            technology.
          </p>
          <button>Get a Demo</button>
        </div>
      </div>
      <div className="h-section-4">
        <div className="h-s4-wrapper">
          <div className="h-s4-title">
            <h2>The Testing Process</h2>
            <img />
          </div>
        </div>
      </div>
      <div className="h-section-5">
        <div className="h-s5-wrapper">
          <div className="h-s5-title">
            <h2>The best creators trust Immersive Insights</h2>
            <img />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
