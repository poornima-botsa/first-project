const Navbar = () => (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Botsa Poornima</h1>
        <div className="space-x-6 text-lg">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;
  