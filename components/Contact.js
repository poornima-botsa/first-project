const Contact = () => (
    <section id="contact" className="py-20 px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="text-lg text-center mb-8 text-gray-300">
        Feel free to reach out for collaborations or inquiries. You can contact me via email or LinkedIn.
      </p>
      <div className="text-center space-y-4 text-gray-200">
        <p><strong>Email:</strong> botsapoornima@gmail.com</p>
        <p><strong>Phone:</strong> +91 8317666170</p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/poornima-botsa-2a76442b5"
            className="text-blue-400 hover:text-blue-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/poornima-botsa-2a76442b5
          </a>
        </p>
      </div>
    </section>
  );
  
  export default Contact;
  