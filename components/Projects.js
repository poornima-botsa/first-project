const Projects = () => (
  <section id="projects" className="py-20 px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="bg-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-600">
        <h3 className="text-2xl font-semibold mb-2">RHYNO EV Website</h3>
        <p className="text-gray-300">
          Developed a full-fledged responsive website to showcase electric vehicles using HTML, CSS, JavaScript, and React.js. Implemented modern design elements, routing, and responsive components.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1m-Q-1SH8D0VF6z8JQuwfbEDmmksBV2wL?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-400 hover:text-blue-300 font-medium transition"
        >
          Download Project Code →
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
