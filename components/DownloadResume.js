const DownloadResume = () => (
    <div className="flex justify-center items-center h-screen mb-12">
      <a
        href="/Poornima_Resume.pdf"
        download
        className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all duration-300"
      >
        Download Resume (PDF)
      </a>
    </div>
  );
  
  export default DownloadResume;
  