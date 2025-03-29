'use client';

import { useState, useEffect, useRef } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import MenuSection from '@/components/MenuSection';
import Skeleton from 'react-loading-skeleton';

const validCategories = [
  'California Rolls',
  'Hot Rolls',
  'Envuelto en Atún',
  'Futomaki',
  'Avocado',
  'Platos',
  'Appetizers',
  'Almuerzo',
  'Promociones',
  'Sushi Burger',
  'Adiciones',  
  'Sin arroz',
  'De la casa',
  'Los Sushimiaus',
  'Envuelto en queso',
  'Envuelto en salmón',
  'Favoritos',
];

const MenuPage = () => {
  const [menuData, setMenuData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const productsRef = collection(db, 'products');
        const querySnapshot = await getDocs(productsRef);
        
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Organizar productos por categoría
        const organizedData = {};
        validCategories.forEach(category => {
          organizedData[category] = products.filter(item => item.categoria === category);
        });

        setMenuData(organizedData);
        // Establecer la primera categoría con productos como activa
        const firstCategoryWithProducts = Object.keys(organizedData).find(
          category => organizedData[category].length > 0
        );
        setActiveCategory(firstCategoryWithProducts);
      } catch (error) {
        console.error('Error al cargar el menú:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    // Configurar el observador de intersección
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.id.replace('category-', '');
            setActiveCategory(category);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Ajusta estos valores según necesites
        threshold: 0.1
      }
    );

    // Observar todas las secciones de categoría
    validCategories.forEach(category => {
      const element = document.getElementById(`category-${category}`);
      if (element) {
        observer.observe(element);
      }
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [menuData]);

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category}`);
    if (element) {
      const headerOffset = 100; // Ajusta este valor según el tamaño de tu header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#2D336B] text-center mb-12">
          Nuestro Menú
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Skeleton height={160} />
              <div className="p-4">
                <Skeleton height={24} width={200} className="mb-2" />
                <Skeleton height={16} count={2} />
                <Skeleton height={20} width={100} className="mt-2" />
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#2D336B] text-center mb-4">
        Nuestro Menú
      </h1>
      <p className="text-[#7886C7] text-center mb-8 max-w-2xl mx-auto">
        Explora nuestra selección de deliciosos platos japoneses, desde rolls tradicionales hasta creaciones únicas.
      </p>

      {/* Barra de navegación de categorías */}
      <div className="sticky top-0 z-10 bg-[#FFF2F2] py-4 mb-8 shadow-md">
        {/* En móviles: scroll horizontal */}
        <div className="flex md:hidden overflow-x-auto pb-2 gap-2 scrollbar-hide">
          {validCategories.map(category => (
            menuData[category]?.length > 0 && (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#2D336B] text-white'
                    : 'bg-white text-[#2D336B] hover:bg-[#7886C7] hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          ))}
        </div>

        {/* En pantallas más grandes: grid de botones */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {validCategories.map(category => (
            menuData[category]?.length > 0 && (
              <button
                key={category}
                onClick={() => scrollToCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-center ${
                  activeCategory === category
                    ? 'bg-[#2D336B] text-white'
                    : 'bg-white text-[#2D336B] hover:bg-[#7886C7] hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          ))}
        </div>
      </div>

      {/* Secciones de categorías */}
      <div className="space-y-16">
        {validCategories.map(category => (
          menuData[category]?.length > 0 && (
            <div 
              key={category} 
              id={`category-${category}`}
              className={`transition-opacity duration-300 ${
                activeCategory === category ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <MenuSection 
                title={category} 
                items={menuData[category]} 
              />
            </div>
          )
        ))}
      </div>

      {/* Botón para volver arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#2D336B] text-white p-3 rounded-full shadow-lg hover:bg-[#7886C7] transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
};

export default MenuPage;
