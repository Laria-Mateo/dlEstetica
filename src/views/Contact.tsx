import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola! Me gustaría agendar una cita:

*Nombre:* ${formData.nombre}
*Teléfono:* ${formData.telefono}
*Servicio:* ${formData.servicio}
*Mensaje:* ${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/5493434674197?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-[#65c6b6]/10 text-[#65c6b6] border-[#65c6b6]/20 mb-4">
            Contacto
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Reserva tu Cita Hoy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Estamos aquí para hacer realidad tu transformación. Contáctanos y agenda tu cita.
          </p>
          <Badge className="bg-orange-500/90 text-white border-orange-600 px-4 py-2 text-sm font-semibold">
            📅 Trabajamos únicamente con cita previa
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Dirección</h4>
                  <p className="text-gray-600">Av. Principal 123, Centro, Ciudad</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">+54 9 343 467-4197</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Horarios</h4>
                  <p className="text-gray-600">Lun-Sáb: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Dom: 10:00 AM - 5:00 PM</p>
                  <p className="text-orange-600 font-semibold text-sm mt-1">Solo con cita previa</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://www.instagram.com/d.l.salondebelleza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5ab3a3] transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <div className="w-12 h-12 bg-[#65c6b6] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#5ab3a3] transition-colors">
                <Facebook className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Agenda tu Cita</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65c6b6] focus:border-transparent"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65c6b6] focus:border-transparent"
                      placeholder="Tu teléfono"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Servicio</label>
                  <select 
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65c6b6] focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Corte y Peinado">Corte y Peinado</option>
                    <option value="Coloración">Coloración</option>
                    <option value="Tratamientos Capilares">Tratamientos Capilares</option>
                    <option value="Peinados para Eventos">Peinados para Eventos</option>
                    <option value="Manicure y Pedicure">Manicure y Pedicure</option>
                    <option value="Cejas y Pestañas">Cejas y Pestañas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65c6b6] focus:border-transparent"
                    placeholder="Cuéntanos más detalles sobre lo que necesitas..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-[#65c6b6] hover:bg-[#5ab3a3] text-white py-4 text-lg">
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact; 