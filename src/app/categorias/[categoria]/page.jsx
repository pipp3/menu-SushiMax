"use client";
import { useState, useEffect, use } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import ProductCard from '@/components/ProductCard';

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

const urlToCategory = {
  'CaliforniaRolls': 'California Rolls',
  'HotRolls': 'Hot Rolls',
  'EnvueltoenAtún': 'Envuelto en Atún',
  'Futomaki': 'Futomaki',
  'Avocado': 'Avocado',
  'Platos': 'Platos',
  'Appetizers': 'Appetizers',
  'Almuerzo': 'Almuerzo',
  'Promociones': 'Promociones',
  'SushiBurger': 'Sushi Burger',
  'Adiciones': 'Adiciones',
  'Sin arroz': 'Sin arroz',
  'De la casa': 'De la casa',
  'LosSushimiaus': 'Los Sushimiaus',
  'Envueltoenquesocrema': 'Envuelto en queso',
  'Envueltoensalmón': 'Envuelto en salmón',
  'Favoritos': 'Favoritos'
};

export default function CategoryPage({ params }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const resolvedParams = use(params);
  const urlCategory = decodeURIComponent(resolvedParams.categoria);
  const category = urlToCategory[urlCategory];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'), where('categoria', '==', category));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(items);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (!validCategories.includes(category)) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-[#2D336B] mb-4">Categoría no encontrada</h1>
        <p className="text-[#7886C7]">La categoría que buscas no existe.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-[#2D336B] mb-4">{category}</h1>
        <p className="text-[#7886C7]">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#2D336B] mb-8 text-center">
        {category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
} 