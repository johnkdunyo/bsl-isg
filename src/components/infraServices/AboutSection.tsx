import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white pb-16" id="about">
      <div className="custom-container flex flex-col justify-between py-16  lg:py-10 w-full  gap-36">
        <div className="w-full">
          <Animate.FadeUp className="text-ruby font-medium text-xl  text-center tracking-widest w-full">
            A SUBSIDIARY OF BROADSPECTRUM
          </Animate.FadeUp>
        </div>

        <div className=" w-full flex flex-col md:flex-row md:gap-16 gap-10 ">
          <div className="w-full lg:w-3/5 ">
            {/* <img src="https://res.cloudinary.com/diek2uivi/image/upload/v1697812768/bsl-website/isg/isg_pf3c3b.png" /> */}
            <Image
              src="https://res.cloudinary.com/diek2uivi/image/upload/v1697812768/bsl-website/isg/isg_pf3c3b.png"
              blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1697812768/bsl-website/isg/isg_pf3c3b.png"
              width={4000}
              height={6000}
              alt="data center img"
              className="w-full  object-contain h-[25rem] md:h-full"
              placeholder="blur"
              // className="w-full md:h-full object-cover   h-[30rem] z-20  "
              style={{ objectPosition: "60% 75%" }}
              unoptimized
            />
          </div>
          <div className="w-full lg:w-2/5 lg:-mt-[40px] ">
            <h1 className="text-primary headerText1 text-center lg:text-right  mb-10">
              About Us
            </h1>
            <Animate.FadeUp className="text-primary text-base   leading-relaxed px-2 md:px-0">
              A well-resourced infrastructure service provider in IE & Telecoms
              Infrastructure Services Ltd (ISG) is an infrastructure services
              company providing logistic deployment, maintenance, and support
              services in the power, telecommunication, and mine Support
              services sectors of Ghana. The services of ISG are internally
              leveraged by all affiliates for efficiency and control. Our
              Services include: Fiber infrastructure Deployment Microwave Radio
              Deployment LAN infrastructure deployments Data Centre build and
              management Service Maintenance and Support
              <br />
            </Animate.FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
