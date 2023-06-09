import React from "react";
import "../css/MUT.css";
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import Separator from "../components/Separator";
import viavideo from "../images/viavideo.png";
import viaproduct from "../images/viaproduct.png";

const MUT = () => {
  return (
    <div className="MUT-container">
      <div className="MUT-section-1">
        <div className="MUT-s1-wrapper">
          <div className="div1">
            <h1>Moderated Usability Testing</h1>
            <p>
              Conduct moderated usability tests by observing or moderating users
              while assigning them tasks to complete on your product or
              prototype.
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
          <h1>Moderate the user via video</h1>
          <p>
            Moderate and observe your participant’s experience with your product
            while you watch them from a 1st-person view . This allows you to
            watch each of your participants moves from their perspective.
          </p>
        </div>
        <div class="right-div">
          <img src={viavideo} alt="Image" />
        </div>
      </div>
      <Separator />
      <div class="section-container">
        <div class="left-div">
          <img src={viaproduct} />
        </div>
        <div class="right-div">
          <h1>Moderate the user via your product</h1>
          <p>
            Hop in your product space and observe the experience with your
            participant. This allows you to be in the same space of your
            participant while they try to complete the tasks you assign them.
          </p>
        </div>
      </div>
      <Separator />
      <div className="MUT-section-4">
        <div className="MUT-s4-wrapper">
          <div className="div1">
            <h1>Check out our Testing Tools and Guides</h1>
            <p>
              Depending on your product or prototype, you will want to moderate
              the user via video or with them in the product or prototype.
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

export default MUT;
