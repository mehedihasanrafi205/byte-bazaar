"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import brand1 from "../../assets/logitech.png";
import brand2 from "../../assets/oneplus.png";
import brand3 from "../../assets/oppo.jpg";
import brand4 from "../../assets/Samsung.jpg";
import brand5 from "../../assets/sony.png";
import brand6 from "../../assets/apple.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

export default function Brands() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Our Trusted Brands
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          We collaborate with top tech brands to bring you the best products.
        </p>
      </div>

      <Swiper
        loop={true}
        freeMode={true}
        grabCursor={true}
        modules={[Autoplay, FreeMode]}
        speed={3000}
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brands.concat(brands).map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="p-4 bg-white rounded-lg shadow h-20 w-40 hover:shadow-lg transition">
              <Image
                src={logo}
                alt="Brand"
                className="object-contain h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
