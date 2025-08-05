import React from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Carousel from "../components/Carousel";

const services = [
  {
    name: 'COLOR',
    description: 'Coloración profesional con productos de alta calidad',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'NUTRICION',
    description: 'Tratamientos nutritivos para cabello saludable',
    icon: '✨',
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'BOTOX',
    description: 'Botox capilar para reparación profunda',
    icon: '💆‍♀️',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    name: 'CAUTERIZADO',
    description: 'Cauterización para sellar cutículas',
    icon: '🔥',
    color: 'from-red-500 to-pink-500'
  },
  {
    name: 'MECHAS',
    description: 'Mechas naturales y artificiales',
    icon: '🌟',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    name: 'REFLEJOS',
    description: 'Reflejos y balayage profesionales',
    icon: '💫',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'ILUMINACION',
    description: 'Iluminación y brillo para tu cabello',
    icon: '✨',
    color: 'from-green-500 to-emerald-500'
  },
];

const Services = () => (
  <section id="servicios" className="py-20 px-4 bg-white">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <Badge className="bg-[#65c6b6]/10 text-[#65c6b6] border-[#65c6b6]/20 mb-4">
          Nuestros Servicios
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Tratamientos Capilares</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
          Descubre nuestros servicios profesionales diseñados para realzar tu belleza natural
        </p>
        <Badge className="bg-orange-500/90 text-white border-orange-600 px-4 py-2 text-sm font-semibold">
          📅 Todos los servicios requieren cita previa
        </Badge>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <Card className="border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white relative z-10 h-full">
              <CardContent className="p-6 lg:p-6 text-center h-full flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-3 group-hover:text-[#65c6b6] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden mb-12">
        <Carousel 
          className="px-4"
          showDots={true}
          autoPlay={false}
        >
          {services.map((service, idx) => (
            <div key={idx} className="w-full px-2">
              <div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <Card className="border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white relative z-10 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#65c6b6] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-6">¿Buscás un servicio personalizado? Consultanos por WhatsApp para agendar tu cita.</p>
        <Button
          size="lg"
          className="bg-[#65c6b6] hover:bg-[#5ab3a3] text-white px-8 py-4 text-lg"
          onClick={() =>
            window.open("https://wa.me/5493434674197?text=Hola! Me gustaría consultar sobre servicios personalizados", "_blank")
          }
        >
          Agendar Cita por WhatsApp
        </Button>
      </div>
    </div>
  </section>
);

export default Services; 