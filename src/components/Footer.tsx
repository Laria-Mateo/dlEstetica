import React from 'react';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="DL Salón de Belleza" 
                className="w-12 h-12 rounded-full bg-white border-2 border-[#65c6b6] shadow-md"
              />
              <h4 className="text-xl font-bold">DL Salón de Belleza</h4>
            </div>
            <p className="text-gray-400 mb-3">
              Tu salón de belleza de confianza donde la elegancia y el profesionalismo se encuentran.
            </p>
            <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-3">
              <p className="text-orange-300 text-sm font-semibold">📅 Solo con cita previa</p>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-4">Servicios</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Corte y Peinado</li>
              <li>Coloración</li>
              <li>Tratamientos</li>
              <li>Manicure</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Horarios</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Lun-Vie: 9:00 AM - 7:00 PM</li>
              <li>Sábado: 9:00 AM - 7:00 PM</li>
              <li>Domingo: 10:00 AM - 5:00 PM</li>
              <li className="text-orange-300 font-semibold text-sm mt-2">Solo con cita previa</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Contacto</h5>
            <ul className="space-y-2 text-gray-400">
              <li>+54 9 343 467-4197</li>
              <li>Av. Principal 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DL Salón de Belleza. Todos los derechos reservados.</p>
          <p className="mt-2">
            Desarrollado por <span className="font-semibold">Técnico Universitario en Programación Mateo Laria</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 