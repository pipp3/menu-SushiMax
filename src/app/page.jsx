import Image from "next/image";
import Categories from '@/components/Categories';
import Carousel from '@/components/Carousel';
import PopularItems from '@/components/PopularItems';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import LocationAndHours from '@/components/LocationAndHours';

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex flex-col bg-[#2D336B] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D336B] to-[#7886C7] opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-[#A9B5DF]">Sushi</span>Max
            </h1>
            <p className="text-xl text-[#FFF2F2] mb-8 max-w-2xl mx-auto">
              La mejor experiencia en sushi y comida japonesa. 
              Ingredientes frescos y preparación tradicional.
            </p>
            <a 
              href="/menu" 
              className="inline-block bg-[#A9B5DF] text-[#2D336B] px-8 py-3 rounded-full font-semibold hover:bg-[#7886C7] transition-colors duration-300"
            >
              Ver Menú
            </a>
          </div>
          <Carousel />
        </div>
      </section>

      <Categories />
      <PopularItems />
      <Features />
      <Testimonials />
      <LocationAndHours />
    </main>
  );
}
