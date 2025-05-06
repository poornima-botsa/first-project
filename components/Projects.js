const Projects = () => (
    <section id="projects" className="py-20 px-8 bg-gradient-to-r from-gray-100 to-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold">RHYNO EV Website</h3>
          <p className="mt-2 text-gray-600">
            Developed a full-fledged responsive website to showcase electric vehicles using HTML, CSS, JavaScript, and React.js. Implemented modern design elements, routing, and responsive components.
          </p>
          <a href="#" className="mt-4 inline-block text-blue-500 hover:text-blue-700">Download Project Code</a>
        </div>
      </div>
    </section>
  );
  
  export default Projects;
  