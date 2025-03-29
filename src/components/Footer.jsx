const Footer = () => {
  return (
    <footer className="bg-[#2D336B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">
              <span className="text-[#7886C7]">Sushi</span>Max
            </h3>
            <p className="text-[#FFF2F2] leading-relaxed">
              Tu mejor opción en sushi y comida japonesa. 
              Experiencia culinaria única con los mejores ingredientes.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide text-[#A9B5DF]">Horarios</h3>
            <div className="space-y-2">
              <p className="text-[#FFF2F2] flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="text-[#7886C7]">11:00 - 22:00</span>
              </p>
              <p className="text-[#FFF2F2] flex justify-between">
                <span>Sábados y Domingos</span>
                <span className="text-[#7886C7]">12:00 - 23:00</span>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide text-[#A9B5DF]">Contacto</h3>
            <div className="space-y-3">
              <p className="text-[#FFF2F2] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7886C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (123) 456-7890
              </p>
              <p className="text-[#FFF2F2] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7886C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@sushimax.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#7886C7] text-center">
          <p className="text-[#FFF2F2] text-sm">
            &copy; {new Date().getFullYear()} SushiMax. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 