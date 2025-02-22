import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const ReliableSection = () => {
  return (
    <section className=" bg-[#11233C] h-[50rem]  md:h-[40rem]  ">
      <div className="w-full flex flex-col md:flex-row  h-full">
        <div className="w-full h-full ">
          <img
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1689604922/bsl-website/isg/isg2_t2e9zk.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <Animate.FadeUp className="w-full h-full flex flex-col  justify-center gap-8  mb-16 custom-container  md:px-16  py-10">
          <h1 className="text-[#82AEC9] text-4xl md:text-[3.6rem] leading-normal md:leading-[1.2] font-bold">
            Reliable and efficient communication networks our priority
          </h1>
          <div className="text-xl leading-[1.5] ">
            Our team of highly trained and experienced professionals are
            committed to delivering outstanding services to our clients,
            ensuring that their networks are always operating at optimal levels.
          </div>
        </Animate.FadeUp>
      </div>
    </section>
  );
};

export default ReliableSection;
