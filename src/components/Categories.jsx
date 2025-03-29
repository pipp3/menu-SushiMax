"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const categories = [
  { display: 'California Rolls', url: 'CaliforniaRolls' },
  { display: 'Hot Rolls', url: 'HotRolls' },
  { display: 'Envuelto en Atún', url: 'EnvueltoenAtún' },
  { display: 'Futomaki', url: 'Futomaki' },
  { display: 'Avocado', url: 'Avocado' },
  { display: 'Platos', url: 'Platos' },
  { display: 'Appetizers', url: 'Appetizers' },
  { display: 'Almuerzo', url: 'Almuerzo' },
  { display: 'Promociones', url: 'Promociones' },
  { display: 'SushiBurger', url: 'SushiBurger' },
  { display: 'Adiciones', url: 'Adiciones' },
  { display: 'Sin arroz', url: 'Sin arroz' },
  { display: 'De la casa', url: 'De la casa' },
  { display: 'Los Sushimiaus', url: 'LosSushimiaus' },
  { display: 'Envuelto en queso crema', url: 'Envueltoenquesocrema' },
  { display: 'Envuelto en salmón', url: 'Envueltoensalmón' },
  { display: 'Favoritos', url: 'Favoritos' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-[#FFF2F2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2D336B] mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-[#7886C7] max-w-2xl mx-auto">
            Explora nuestra variedad de sushi y comida japonesa
          </p>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={10}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Link href={`/categorias/${category.url}`}>
                <div 
                  className="group relative bg-white/80 backdrop-blur-sm text-[#2D336B] p-4 rounded-lg text-center hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden h-full border border-[#A9B5DF]/20 hover:border-[#7886C7] shadow-sm hover:shadow-md"
                >
                  <div className="relative z-10">
                    <span className="text-sm font-medium tracking-wide">{category.display}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2D336B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;