const LocationAndHours = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#2D336B] mb-6">
              Horario de Atención
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#A9B5DF] pb-2">
                <span className="text-[#2D336B]">Lunes - Viernes</span>
                <span className="text-[#7886C7]">11:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#A9B5DF] pb-2">
                <span className="text-[#2D336B]">Sábados y Domingos</span>
                <span className="text-[#7886C7]">12:00 - 23:00</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#2D336B] mb-6">
              Ubicación
            </h2>
            <div className="bg-[#FFF2F2] p-6 rounded-lg">
              <p className="text-[#2D336B] mb-2">
                Av. Principal 123
              </p>
              <p className="text-[#7886C7]">
                Ciudad, Estado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAndHours; 