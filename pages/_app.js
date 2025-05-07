import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
