import React from "react";
import "../css/Home.css";
// import "../css/Buttons.css";
import Button1 from "../components/Button1";
import RPcard from "../components/RPcard";
import home from "../images/home.png";
import blob from "../images/blob.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="h-section-1">
        <div className="h-s1-wrapper">
          <div className="div1">
            <h1>
              Contribute to the <br></br> future of XR
            </h1>
            <p>
              Join the XR Testing Community and Shape the Future of Immersive
              Technology
            </p>
            <div className="button-container">
              <Button1 linkAdress="/Contactus" text="I am a Researcher" />
              <Button1 linkAdress="/Contactus" text="I want to be a Tester" />
            </div>
          </div>
          <div className="div2">
            <img className="image1" src={home} />
          </div>
        </div>
        {/* <img className="image1" src={blob} /> */}
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
