const Hero = () => (
    <section className="bg-gradient-to-r from-indigo-700 to-purple-900 text-white py-28 text-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <img
          src="/profile.jpg" 
          alt="Profile of Botsa Poornima"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
        />
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Hi, I'm Botsa Poornima</h2>
        <p className="text-lg md:text-2xl max-w-2xl text-gray-200">
          A passionate Computer Science student specializing in Full Stack Web Development.
        </p>
      </div>
    </section>
  );
  
  export default Hero;
  