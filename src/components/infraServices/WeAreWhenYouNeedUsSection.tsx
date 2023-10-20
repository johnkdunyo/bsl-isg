import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const WeAreWhenYouNeedUsSection = () => {
  return (
    <section className="bg-[#F8F8F8] -mb-1">
      <div className="h-full w-full flex flex-col lg:flex-row custom-container pt-20 gap-16 md:gap-10">
        <div className="text-center md:text-left w-full lg:order-last  flex items-center   ">
          <Animate.FadeUp className="text-[3rem] leading-[3rem] sm:text-[3.9rem] md:text-7xl  md:leading-[5rem] text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#1D365A] to-[#AB2346] px-6 sm:px-0 lg:w-4/5 text-center lg:text-left">
            We are there when you need us.
          </Animate.FadeUp>
        </div>
        <div className="w-full h-full ">
          <img
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1689608157/bsl-website/isg/weareready_uqjvcw.png"
            alt="we are ready image"
          />
        </div>
      </div>
    </section>
  );
};

export default WeAreWhenYouNeedUsSection;
