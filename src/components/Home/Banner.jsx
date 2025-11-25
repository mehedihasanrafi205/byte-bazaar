"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const slides = [
  { id: 1, src: banner1, alt: "Banner 1" },
  { id: 2, src: banner2, alt: "Banner 2" },
  { id: 3, src: banner3, alt: "Banner 3" },
];

export default function Banner() {
  return (
    <div className="w-full mt-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full aspect-2/1"> 
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
