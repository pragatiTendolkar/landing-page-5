import React from "react";
import { robot } from "../assets";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className=" container banner-home h-screen flex justify-end items-center text-white ">
        <div className="grid md:grid-cols-2 flex justify-end items-center">
          <div className="left ml-20">
            <h1 className="banner-heading font-bold ">The Next <span className="Generation block text-gradient ">Generation</span> Payment Method.</h1>

            <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
              We examine annual percentage rates, annual fees.</p>

          </div>
          <div className="right flex justify-end items-center">
            <img src={robot} alt="" className="object-contain w-11/12" />

          </div>
        </div>
      </div>

      <div className="container  text-white px-20">

        <div className="counter flex justify-center items-center">
          <div className="count-box md:w-1/3 ">
            <div className="count-num">1000+</div>
            <div className="count-text text-gradient">User Active</div>

          </div>
          <div className="count-box md:w-1/3 ">
            <div className="count-num">230+</div>
            <div className="count-text text-gradient">Trusted Company</div>

          </div>
          <div className="count-box md:w-1/3 ">
            <div className="count-num">230M+</div>
            <div className="count-text text-gradient">Transaction</div>

          </div>
        </div>





      </div>
    </section>
  );
};

export default Hero;
