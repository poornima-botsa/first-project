'use client';

const Hero = () => (
  <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-24 shadow-inner">
    <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
      <img
        src="/profile.jpg"
        alt="Profile of Botsa Poornima"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl mb-6 object-cover"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Hi, I'm <span className="text-blue-400">Botsa Poornima</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl text-gray-300 leading-relaxed">
        A passionate Computer Science student specializing in Full Stack Web Development. I build modern, responsive web apps with React, Node.js, and more.
      </p>
    </div>
  </section>
);

export default Hero;
