const Skills = () => {
  return(
    <section id="skills" className="py-16 px-6 bg-gradient-to-bl from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-6 text-center">Technical Skills</h2>
        <ul className="space-y-4 text-lg text-gray-300">
          <li><span className="text-purple-400 font-medium">Languages:</span> Java, Python, C, C++</li>
          <li><span className="text-purple-400 font-medium">Frontend:</span> HTML, CSS, JavaScript, React.js, Bootstrap</li>
          <li><span className="text-purple-400 font-medium">Backend:</span> Node.js, PHP, MySQL</li>
          <li><span className="text-purple-400 font-medium">Database:</span> SQL</li>
          <li><span className="text-purple-400 font-medium">Tools:</span> Git, GitHub, VS Code, Netlify, XAMPP</li>
        </ul>
      </div>
    </section>
  );
};
  export default Skills;