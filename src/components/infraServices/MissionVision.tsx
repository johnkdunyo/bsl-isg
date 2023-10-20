import React, { useRef } from "react";
import { Animate } from "../animations/ScrollAnimator";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

const SingleSlide = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full  flex justify-center items-center border">
      <div className=" w-full  ">
        <h1 className="font-bold text-[5rem]  ">{title}</h1>
        <p
          className="paragraphText1 font-light w-full max-w-2xl leading-[1.5rem]"
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
    <div className=" w-full h-[35rem]  flex items-center  bg-gradient-to-l to-[#1D365A] from-[#AB2346] carousel">
      <Swiper
        onBeforeInit={onBeforeInit}
        spaceBetween={0}
        cssMode={false}
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
        keyboard={true}
        className="w-full relative custom-container"
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

        <div className="absolute top-[20%] sm:top-[50%] bottom-[50%] w-full  px-10 sm:px-[10%] ">
          <div className="flex justify-between container mx-auto px-6 max-w-7xl ">
            <button
              className=" z-10 w-16 h-16 sm:w-16 sm:h-full"
              ref={swiperNavPrevRef}
              onClick={() => swiperRef!.current?.slidePrev()}
            >
              <img src={"/assets/icons/nav-left.svg"} className=" w-full " />
            </button>

            <button
              className=" z-10 w-16 h-16 sm:w-16 sm:h-full"
              ref={swiperNavNextRef}
              onClick={() => swiperRef!.current?.slideNext()}
            >
              <img src={"/assets/icons/nav-right.svg"} className="w-full" />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default MissionVision;
