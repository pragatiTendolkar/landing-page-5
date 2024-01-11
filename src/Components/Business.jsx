import React from "react";

import { star, shield, send } from "../assets";

const Business = () => {
  return (
    <section className="business">

      <div className="container business-box flex justify-end items-center text-white h-screen">
        <div className="left w-1/2">
          <h2 className="business-head">You do the business, we'll handle the money.</h2>
          <p className="business-para pt-5">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
          <button className="rounded business-btn py-3 mt-10 px-5 bg-white text-black">Get Started</button>

        </div>
        <div className="right w-1/2 p-5 ">

          <div className="rewards-box">
            <div className="rewards flex justify-end items-center pb-10">
              <div className="icon">
                <img src={star} alt="" />
              </div>
              <div className="icon-text">
                <h4>Rewards</h4>
                <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
              </div>
            </div>
            <div className="rewards flex justify-end items-center pb-10">
              <div className="icon">
                <img src={shield} alt="" />
              </div>
              <div className="icon-text">
                <h4>100% Secured  </h4>
                <p>We take proactive steps make sure your information and transactions are secure.</p>
              </div>
            </div>
            <div className="rewards flex justify-end items-center pb-10">
              <div className="icon">
                <img src={send} alt="" />
              </div>
              <div className="icon-text">
                <h4>Balance Transfer</h4>
                <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
              </div>
            </div>
          </div>


        </div>


      </div>

    </section>



  )

};

export default Business;
