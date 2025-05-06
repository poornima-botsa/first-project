const Navbar = () => (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-extrabold tracking-wide">Poornima</h1>
        <div className="space-x-8 text-lg font-medium">
          <a
            href="#about"
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;
  