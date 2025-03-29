const testimonials = [
  {
    id: 1,
    rating: '⭐⭐⭐⭐⭐',
    comment: 'El mejor sushi que he probado en la ciudad. La calidad y el servicio son excepcionales.',
    author: 'María González'
  },
  {
    id: 2,
    rating: '⭐⭐⭐⭐⭐',
    comment: 'La variedad de rolls es impresionante y todos son deliciosos. ¡Volveré pronto!',
    author: 'Carlos Rodríguez'
  },
  {
    id: 3,
    rating: '⭐⭐⭐⭐⭐',
    comment: 'El ambiente es perfecto para una cena romántica o una celebración especial.',
    author: 'Ana Martínez'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#FFF2F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2D336B] mb-12 text-center">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#7886C7] mb-4">{testimonial.rating}</div>
              <p className="text-[#2D336B] mb-4">
                "{testimonial.comment}"
              </p>
              <p className="font-bold text-[#2D336B]">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 