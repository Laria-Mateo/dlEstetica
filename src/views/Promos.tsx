import React from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Carousel from "../components/Carousel";
import promosLogo from '../assets/promos.jpg';

const promos = [
  {
    title: 'LAVADO + SECADO + PLANCHITA',
    description: 'Servicio completo de lavado con productos profesionales, secado y planchado para un acabado perfecto',
    icon: '💇‍♀️'
  },
  {
    title: 'NUTRICIÓN + CORTE DE PUNTAS',
    description: 'Tratamiento nutritivo profundo combinado con corte de puntas para revitalizar tu cabello',
    icon: '✨'
  },
  {
    title: 'RETOQUE DE RAIZ + BAÑO DE LUZ + NUTRICION',
    description: 'Retoque de raíces, baño de luz para dar brillo y tratamiento nutritivo completo',
    icon: '🌟'
  },
  {
    title: 'ALISADO + CORTE DE PUNTAS + NUTRICION',
    description: 'Alisado profesional con corte de puntas y nutrición para un cabello sedoso y saludable',
    icon: '💫'
  },
  {
    title: 'COLOR COMPLETO + NUTRICION + CORTE DE PUNTAS',
    description: 'Coloración completa del cabello con tratamiento nutritivo y corte de puntas',
    icon: '🎨'
  },
  {
    title: 'BOTOX / SHOCK DE KERATINA + CORTE DE PUNTAS + NUTRICION',
    description: 'Tratamiento intensivo de botox capilar o shock de keratina con corte y nutrición',
    icon: '💆‍♀️'
  },
];

const Promos = () => (
  <section id="promos" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-white">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <img
            src={promosLogo}
            alt="Logo Promociones"
            className="w-28 h-28 object-contain rounded-full bg-white shadow-lg border-4 border-[#65c6b6]"
          />
        </div>
        <Badge className="bg-[#65c6b6]/10 text-[#65c6b6] border-[#65c6b6]/20 mb-4">
          Promociones Especiales
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestras Promociones</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Aprovechá nuestras promos exclusivas para renovar tu look y cuidar tu cabello. Consultá por disponibilidad y combinaciones personalizadas.
        </p>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promos.map((promo, idx) => (
          <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">{promo.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{promo.title}</h3>
              <p className="text-gray-600 leading-relaxed">{promo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Carousel 
          className="px-4"
          showDots={true}
          autoPlay={false}
        >
          {promos.map((promo, idx) => (
            <div key={idx} className="w-full px-2">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white h-full">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{promo.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{promo.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm text-center">{promo.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-lg text-gray-600 mb-6">¿Tenés dudas sobre alguna promoción? ¡Consultanos!</p>
        <Button
          size="lg"
          className="bg-[#65c6b6] hover:bg-[#5ab3a3] text-white px-8 py-4 text-lg"
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contactar
        </Button>
      </div>
    </div>
  </section>
);

export default Promos; 