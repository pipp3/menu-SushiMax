const Header = () => {
  return (
    <header className="bg-[#2D336B] text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-bold tracking-wider hover:text-[#A9B5DF] transition-colors duration-300">
            <span className="text-[#7886C7]">Sushi</span>Max
          </div>
          <ul className="flex space-x-8">
            <li>
              <a 
                href="/" 
                className="hover:text-[#A9B5DF] transition-all duration-300 relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A9B5DF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="/menu" 
                className="hover:text-[#A9B5DF] transition-all duration-300 relative group"
              >
                Menú
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A9B5DF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="/contacto" 
                className="hover:text-[#A9B5DF] transition-all duration-300 relative group"
              >
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A9B5DF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 