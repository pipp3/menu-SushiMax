"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/images/carrusel1.webp",
  "/images/carrusel2.webp",
  "/images/carrusel3.webp",
  "/images/carrusel4.webp",
  "/images/carrusel5.webp",
];

export default function Carousel() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image 
              src={src} 
              alt={`Imagen ${index + 1} del carrusel`} 
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              quality={90}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
