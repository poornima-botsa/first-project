'use client';
const Projects = () => {
  const projects = [
    {
      title: 'RHYNO EV Website',
      description:
        'A fully responsive and dynamic website for RHYNO Electric Vehicles, built using React.js and Bootstrap.',
      tech: ['React.js', 'Bootstrap', 'CSS', 'Responsive Design'],
      // link: 'https://rhvno-ev-site.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description:
        'This personal portfolio website built using Next.js and Tailwind CSS showcases my skills, strengths, and projects.',
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      link: 'https://first-project-snowy-rho.vercel.app/', 
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-blue-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 hover:text-white transition duration-200"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
