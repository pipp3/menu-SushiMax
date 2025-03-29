"use client";
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import ProductCard from './ProductCard';

const PopularItems = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularItems = async () => {
      try {
        const q = query(collection(db, 'products'), where('categoria', '==', 'Favoritos'));
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPopularItems(items);
      } catch (error) {
        console.error('Error al obtener los productos populares:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularItems();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2D336B] mb-8 text-center">
            Los Más Populares
          </h2>
          <div className="text-center">Cargando...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2D336B] mb-8 text-center">
          Los Más Populares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems; 