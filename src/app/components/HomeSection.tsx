"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSwiperStyles/styles.css";
import "aos/dist/aos.css";
// import AOS from 'aos';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { backgroundData } from "@/data";
import { Reveal } from "@/lib/Reveal";
const HomeSection = () => {
  const { t } = useTranslation();
  const autoplayDelay = 4000; // Autoplay delay in milliseconds
  const [progressKey, setProgressKey] = useState(0); // Key to trigger re-render

  // Function to restart progress bar animation
  const restartProgressBar = () => {
    setProgressKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="md:h-full w-full relative">
      <div className="autoplay-progress" key={progressKey}>
        <div
          className="progress-bar"
          style={{ animationDuration: `${autoplayDelay}ms` }}
        ></div>
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
        modules={[Pagination, Navigation]}
        className="HomeSwiper relative"
        onSlideChange={restartProgressBar} // Restart progress bar on slide change
      >
        {backgroundData.map((background, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="overlay absolute" />
              <img
                loading="lazy"
                src={`/${background.img}`}
                alt=""
                className="object-fit md:object-contain"
              />
              <div
                style={{
                  width: "80%",
                  height: "auto",
                  padding: "10px",
                }}
                className="absolute mx-auto overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]"
              >
                <div
                  style={{
                    width: "180px",
                    height: "auto",
                    padding: "10px",
                  }}
                  className="mx-auto"
                ></div>
                <div className="w-full flex justify-center mx-auto">
                  <Reveal>
                    <h1
                      style={{
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
                        width: background.slogan_width,
                      }}
                      className={`text-center mx-auto block text-[8px] md:text-2xl ${
                        background.styles ? background.styles : "top-full"
                      } md:font-bold text-white max-w-[${
                        background.slogan_width
                      }]`}
                    >
                      {background.slogan["en2"] && (
                        <h1 className="text-center mx-auto block tracking-[5px] font-light mb-4 text-lg md:text-6xl">
                          {background.slogan["en2"]}
                        </h1>
                      )}
                      {background.slogan["en"]}
                    </h1>
                  </Reveal>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSection;
