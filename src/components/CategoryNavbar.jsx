"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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

const CategoryNavbar = ({ category }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentCategory = categories.find(cat => cat.url === category)?.display || 'Seleccionar categoría';

  return (
    <nav 
      className={`fixed top-24 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className={`text-2xl font-bold tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-[#2D336B]' : 'text-white'
            }`}
          >
            <span className="text-[#7886C7]">Sushi</span>Max
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/90 text-[#2D336B] hover:bg-white' 
                  : 'bg-[#2D336B]/90 text-white hover:bg-[#2D336B]'
              }`}
            >
              <span className="font-medium">{currentCategory}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                isScrolled ? 'bg-white' : 'bg-[#2D336B]'
              }`}>
                <div className="max-h-[60vh] overflow-y-auto">
                  {categories.map((cat) => (
                    <Link
                      key={cat.url}
                      href={`/categorias/${cat.url}`}
                      className={`block px-4 py-2 transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-[#2D336B] hover:bg-[#F3F4F6]' 
                          : 'text-white hover:bg-[#3B4B8C]'
                      } ${
                        category === cat.url ? 'font-bold bg-[#7886C7]/20' : ''
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {cat.display}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavbar; 