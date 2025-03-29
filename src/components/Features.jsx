const features = [
  {
    id: 1,
    emoji: '🌟',
    title: 'Calidad Premium',
    description: 'Ingredientes frescos seleccionados diariamente'
  },
  {
    id: 2,
    emoji: '⚡',
    title: 'Entrega Rápida',
    description: 'Tu pedido en menos de 30 minutos'
  },
  {
    id: 3,
    emoji: '👨‍🍳',
    title: 'Chefs Expertos',
    description: 'Personal altamente capacitado'
  },
  {
    id: 4,
    emoji: '💫',
    title: 'Ambiente Único',
    description: 'Decoración moderna y acogedora'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-[#2D336B]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-[#A9B5DF] text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 