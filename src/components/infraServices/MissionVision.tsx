import React, { useRef } from "react";
import { Animate } from "../animations/ScrollAnimator";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SingleSlide = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full custom-container flex flex-col justify-center items-start  border-blue-900 pb-24 md:pb-0">
      <div className=" w-full  flex flex-col items-start gap-2 md:gap-6 ">
        <h1 className="font-bold text-[5rem] md:text-8xl lg:text-9xl ">
          {title}
        </h1>
        <p
          className="paragraphText1 font-light w-full max-w-4xl leading-[1.5rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};

const MissionVision = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);
  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <div className=" w-full h-[36rem]  sm:h-[35rem]  bg-gradient-to-b  lg:bg-gradient-to-l from-[#AB2346] to-[#1D365A] carousel">
      <Swiper
        onBeforeInit={onBeforeInit}
        spaceBetween={0}
        cssMode={true}
        direction={"horizontal"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
        }}
        navigation={{
          prevEl: swiperNavPrevRef?.current,
          nextEl: swiperNavNextRef?.current,
        }}
        modules={[Navigation, Autoplay]}
        keyboard={false}
        className="w-full relative   border border-black"
      >
        <SwiperSlide>
          <SingleSlide
            title="Vision"
            description="Our vision is to be the industry leader in fiber maintenance, setting the standard for excellence in network reliability and performance"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Mission"
            description="To deliver reliable, efficient, and innovative fibre maintenance solutions that ensure seamless connectivity for businesses and communities."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Vision"
            description="Our vision is to be the industry leader in fiber maintenance, setting the standard for excellence in network reliability and performance"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Mission"
            description="To deliver reliable, efficient, and innovative fibre maintenance solutions that ensure seamless connectivity for businesses and communities."
          />
        </SwiperSlide>

        <div className="absolute inset-0 w-full h-full  px-10 lg:px-[10%]   flex flex-col justify-end lg:justify-center gap-10 pb-[25%] md:pb-0 md:-mt-[2rem]">
          <div className="flex justify-center items-center gap-6 lg:gap-10 container mx-auto px-6 max-w-7xl lg:ml-16  ">
            <button
              className=" z-10 w-12 h-12 sm:w-14 sm:h-full"
              ref={swiperNavPrevRef}
              onClick={() => swiperRef!.current?.slidePrev()}
            >
              <img src={"/assets/icons/nav-left2.svg"} className=" w-full " />
            </button>

            <div className="bg-white/50 w-[0.1rem] h-[5.5rem] lg:h-[8rem]" />

            <button
              className=" z-10 w-12 h-12 sm:w-14 sm:h-full"
              ref={swiperNavNextRef}
              onClick={() => swiperRef!.current?.slideNext()}
            >
              <img src={"/assets/icons/nav-right2.svg"} className="w-full" />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default MissionVision;
