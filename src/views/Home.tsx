import React, { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
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
        {/* Overlay más oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={logo}
          alt="Logo Salón de Belleza"
          className="w-40 h-40 object-contain mb-6 drop-shadow-2xl rounded-full bg-white bg-opacity-90 border-4 border-white/50"
        />
        <Badge className="bg-[#65c6b6]/20 text-white border-[#65c6b6]/40 mb-4 backdrop-blur-sm">
          ✨ Tu belleza es nuestra pasión
        </Badge>
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8), 0 0 0 2px rgba(0,0,0,0.3)'
          }}
        >
          Bienvenida DL Salón de Belleza
        </h1>
        <p
          className="text-lg md:text-xl font-bold mb-4 max-w-2xl text-white"
          style={{
            textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,0,0,0.3)'
          }}
        >
          Especialista en tratamientos capilares, color, nutrición y más. Consultá nuestras promos y servicios personalizados.
        </p>
        
        <Badge className="bg-orange-500/95 text-white border-orange-600 mb-6 px-4 py-2 text-sm font-semibold shadow-lg">
          📅 Solo con cita previa
        </Badge>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            size="lg"
            className="bg-[#65c6b6] hover:bg-[#5ab3a3] text-white px-8 py-4 text-lg shadow-xl"
            onClick={() =>
              window.open("https://wa.me/5493434674197?text=Hola! Me gustaría agendar una cita", "_blank")
            }
          >
            Agendar Cita
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg bg-white/10 backdrop-blur-sm shadow-xl"
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Servicios
          </Button>
        </div>

        <div className="flex items-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>100+</div>
            <div className="text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>Clientes Felices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>5★</div>
            <div className="text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>Calificación</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>+7</div>
            <div className="text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>Años Experiencia</div>
          </div>
        </div>

        <button
          onClick={handleArrowClick}
          className="animate-bounce focus:outline-none"
          aria-label="Ir a promociones"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))'
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
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${current === idx ? 'bg-[#65c6b6]' : 'bg-white bg-opacity-80'}`}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home; 