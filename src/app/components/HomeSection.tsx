"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSwiperStyles/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const HomeSection = () => {

   const { t } = useTranslation();
  const autoplayDelay = 2500; // Autoplay delay in milliseconds
  const [progressKey, setProgressKey] = useState(0); // Key to trigger re-render

  // Function to restart progress bar animation
  const restartProgressBar = () => {
    setProgressKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="h-full w-full relative">
      <div className="autoplay-progress" key={progressKey}>
        <div
          className="progress-bar"
          style={{ animationDuration: `${autoplayDelay}ms` }}
        ></div>
      </div>
      <div className="absolute w-[60%] md:w-[80%] mx-auto overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
        <img
          loading="lazy"
          src="/logo_icon.jpg"
          alt=""
          className="w-[170px] md:mt-[10%] mt-[25%] md:w-[200px] rounded-full mx-auto h-auto"
        />
        <div className="flex text-center justify-center flex-col mx-auto h-auto w-full mt-5">
          <div className="w-fit mx-auto">
             <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }} className="text-start w-fit block text-2xl md:text-4xl top-full font-bold text-white right-1/2">
               {t('slogan1')}
            </h1>
          </div>
          <div className="w-fit mx-auto">
            <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }} className="text-start h-12 w-fit mt-1 text-2xl md:text-4xl font-bold text-white">
                {t('slogan2')}
            </h1>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="HomeSwiper relative"
        onSlideChange={restartProgressBar} // Restart progress bar on slide change
      >
        <SwiperSlide>
          <div className="overlay absolute" />
          <Image
            width={700}
            height={700}
            loading="lazy"
            src={
              "/Pharma.jpg"
            }
            alt=""
            className="scaling-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay absolute" />
          <Image
            width={700}
            height={700}
            loading="lazy"
            src={
              "/Pharma-1.jpg"
            }
            alt=""
            className="scaling-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay absolute" />
          <Image
            width={700}
            height={700}
            loading="lazy"
            src={"/Pharma-2-scaled.jpeg"}
            alt=""
            className="scaling-image"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HomeSection;
