import React from 'react';
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Scissors, Heart, Star } from "lucide-react";
import danielaImg from '../assets/daniela.png';

const About = () => (
  <section id="sobre-mi" className="py-20 px-4 bg-white">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <Badge className="bg-[#65c6b6]/10 text-[#65c6b6] border-[#65c6b6]/20 mb-4">
          Sobre Mí
        </Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Conoce a Daniela Laria</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Profesional apasionada por la belleza con años de experiencia en el rubro
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">¡Hola! Soy Daniela Laria</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fundadora del Salón de Belleza con más de <span className="font-semibold text-[#65c6b6]">7 años de experiencia</span> en el rubro de la peluquería. Me especializo en tratamientos capilares, color, nutrición y asesoramiento personalizado para cada cliente.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Además, realizo servicios de <span className="font-semibold text-[#65c6b6]">pestañas, maquillajes, cejas, uñas</span> y mucho más para que puedas encontrar todo lo que necesitás en un solo lugar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mi objetivo es que cada persona que visite el salón se sienta única, reciba la mejor atención y salga feliz con su look.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center mx-auto mb-2">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#65c6b6]">+7</div>
              <div className="text-sm text-gray-600">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#65c6b6]">100+</div>
              <div className="text-sm text-gray-600">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[#65c6b6]">5★</div>
              <div className="text-sm text-gray-600">Calificación</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-[#65c6b6]/20 rounded-3xl transform rotate-6"></div>
          <img
            src={danielaImg}
            alt="Daniela Laria - Profesional"
            className="relative rounded-3xl shadow-2xl object-contain w-full max-w-md"
          />
        </div>
      </div>

      <div className="text-center">
        <Card className="border-0 shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-[#65c6b6]" />
              <h3 className="text-2xl font-bold text-gray-800">Ubicación</h3>
            </div>
            <iframe
              title="Ubicación Salón de Belleza Daniela Laria"
              src="https://www.google.com/maps?q=-31.766170,-60.495853&z=16&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default About; 