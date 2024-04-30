import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./gallerySwiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function GallerySwiper({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  console.log(images);

  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="GallarySwiper mySwiper2 "
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              width={500}
              height={500}
              src={`/${image}`}
              alt=""
              className=" h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        direction="vertical"
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              width={500}
              height={500}
              src={`/${image}`}
              alt=""
              className="max-w-[230px] md:w-[250px] h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
