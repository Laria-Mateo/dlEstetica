import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.jpg';
import img1 from '../assets/models/497426742_548224745005278_2299056077460337680_n.jpg';
import img2 from '../assets/models/57506581_102857884220059_7236439711034473442_n.jpg';
import img3 from '../assets/models/271633406_633446744566582_7172303108698365284_n.jpg';
import img4 from '../assets/models/134788346_1132271513895239_4444676661728739568_n.jpg';

const images = [
img1,
img2,
img3,
img4,
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleArrowClick = () => {
    const aboutSection = document.getElementById('sobre-mi');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-12 relative overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((img, idx) => (
          <React.Fragment key={img}>
            <img
              src={img}
              alt="Fondo difuminado peinado"
              className={`w-full h-full object-cover absolute top-0 left-0 blur-lg scale-110 transition-opacity duration-700 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionProperty: 'opacity' }}
            />
            <img
              src={img}
              alt="Modelo peinado"
              className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-700 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionProperty: 'opacity' }}
            />
          </React.Fragment>
        ))}
        <div className="absolute inset-0" style={{ background: 'rgba(200, 200, 200, 0.3)' }}></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={logo}
          alt="Logo Salón de Belleza"
          className="w-40 h-40 object-contain mb-6 drop-shadow-lg rounded-full bg-white bg-opacity-80"
        />
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-xl"
          style={{
            textShadow: '0 4px 16px rgba(0,0,0,0.9), 0 1px 0 #000'
          }}
        >
          Bienvenida DL Salón de Belleza
        </h1>
        <p
          className="text-lg md:text-xl font-bold mb-0 max-w-2xl text-white drop-shadow-xl"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 1px 0 #000'
          }}
        >
          Especialistas en tratamientos capilares, color, nutrición y más. Consultá nuestras promos y servicios personalizados.
        </p>
        <button
          onClick={handleArrowClick}
          className="mt-8 animate-bounce focus:outline-none"
          aria-label="Ir a promociones"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.7))'
            }}
          >
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="#111"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="#65c6b6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative z-10 flex justify-center mt-8">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${current === idx ? 'bg-[#65c6b6]' : 'bg-white bg-opacity-60'}`}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home; 