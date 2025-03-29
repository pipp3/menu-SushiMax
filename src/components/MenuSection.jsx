import ProductCard from './ProductCard';

const MenuSection = ({ title, items }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-[#2D336B] mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection; 