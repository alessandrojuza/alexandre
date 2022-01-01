import React from "react";
import "../styles/About.scss";
import aboutUsImg from "../img/about-us-img.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>Who we are</h1>
      <div className="about-sub-container">
        <img src={aboutUsImg} alt="about us" />
        <div className="text-container">
          <p>
            We believe in a world where you have total freedom to be you,
            without judgement. To experiment. To express yourself. To be brave
            and grab life as the extraordinary adventure it is. So we make sure
            everyone has an equal chance to discover all the amazing things
            they’re capable of – no matter who they are, where they’re from or
            what looks they like to boss. We exist to give you the confidence to
            be whoever you want to be.
          </p>
          <p>
            We believe great fashion shouldn’t come with a compromise, be that
            style, price or impact. We’ve set ourselves challenging targets to
            reduce the impact of our product, business and logistics, and we’re
            always looking for new ways to drive sustainability forward. We work
            hard to ensure animals don’t suffer for fashion and have strict
            sourcing guidelines for leather and producing animal-free products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
