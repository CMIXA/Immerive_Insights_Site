import React from "react";
import "../css/UI.css";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import Separator from "../components/Separator";
import UUI from "../images/UI.png";

const UI = () => {
  return (
    <div className="UI-container">
      <div className="UI-section-1">
        <div className="UI-s1-wrapper">
          <div className="div1">
            <h1>User Interviews</h1>
            <p>
              Conduct user interviews by recruiting participants and develop a
              set of questions that will help you better understand their
              experiences, pain points, and motivations. With this information,
              you can improve your product or prototype and deliver a better
              user experience.
            </p>
          </div>
          <div className="div2">
            <div className="button-container">
              <Button1 text="Get Started" />
              <Button2 text="See Pricing" />
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div class="section-container">
        <div class="left-div">
          <h1>Interview XR users</h1>
          <p>
            Get in-depth insights into your XR product's usability and user
            experience by conducting user interviews with our diverse pool of XR
            users. Choose to interview users immersed in XR or through a video
            call, and gain valuable feedback to make data-driven decisions that
            improve your product's usability and user satisfaction.
          </p>
        </div>
        <div class="right-div">
          <img src={UUI} alt="Image" />
        </div>
      </div>
      {/* <div className="UI-section-2">
        <div className="UI-s2-wrapper">
          <div className="div-L">
            <div className="text">
              <h1>Interview XR users</h1>
              <p>
                Get in-depth insights into your XR product's usability and user
                experience by conducting user interviews with our diverse pool
                of XR users. Choose to interview users immersed in XR or through
                a video call, and gain valuable feedback to make data-driven
                decisions that improve your product's usability and user
                satisfaction.
              </p>
            </div>
          </div>
          <div className="div-R">
            <img src={UUI} />
          </div>
        </div>
      </div> */}
      <Separator />
      <div className="UI-section-3">
        <div className="UI-s3-wrapper">
          <div className="div1">
            <h1>Check out our Testing Tools and Guides</h1>
            <p>
              Take a look at our tools or follow our guides to help you get the
              most out of your testing sessions.
            </p>
          </div>
          <div className="div2">
            <div className="button-container">
              <Button1 text="Tools" />
              <Button1 text="Guides" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
