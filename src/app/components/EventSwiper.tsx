'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './EventSwiper.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function EventSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="effectSwiper w-[80%]"
      >
        <SwiperSlide>
          <img src="/Pharma.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pharma-2-scaled.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Pharma-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
