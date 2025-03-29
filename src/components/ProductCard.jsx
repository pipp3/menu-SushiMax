import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
const ProductCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#FFF2F2] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
      {isLoading && (
        <div className="h-40 bg-[#2D336B] flex items-center justify-center relative">
          <Skeleton className="w-full h-full" loading={2} />
        </div>
      )}
      <div className="h-40 bg-[#2D336B] flex items-center justify-center relative">
        {item.id ? (
          <CldImage
            src={`sushiMax_${item.id}`}
            alt={item.nombre}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover"
            crop="fill"
            loading='lazy'
            priority={false}
            fetchPriority='high'
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <span className="text-6xl">🍱</span>
        )}
      </div>
      <div className={`p-4 ${isLoading ? "hidden" : "block"}`}>
        <h3 className="text-lg font-bold text-[#2D336B] mb-2">
          {item.nombre}
        </h3>
        <div className="relative">
          <p className={`text-[#7886C7] mb-2 ${!isExpanded ? 'line-clamp-2' : ''}`}>
            {item.descripcion}
          </p>
          {item.descripcion.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-[#2D336B] text-sm font-semibold hover:text-[#7886C7] transition-colors"
            >
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>
        <span className="text-[#2D336B] font-bold">{item.precio}</span>
      </div>
    </div>
  );
};

export default ProductCard; 