import WhatsAppButton from '../components/WhatsAppButton';

const services = [
  'COLOR',
  'NUTRICION',
  'BOTOX',
  'CAUTERIZADO',
  'MECHAS',
  'REFLEJOS',
  'ILUMINACION',
];

const Services = () => (
  <section id="servicios" className="max-w-3xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold mb-6 text-center">Tratamientos Capilares</h2>
    <ul className="grid gap-4 md:grid-cols-2 mb-8">
      {services.map((service, idx) => (
        <li key={idx} className="border rounded-lg p-4 shadow text-center font-medium">
          {service}
        </li>
      ))}
    </ul>
    <div className="text-center">
      <p className="mb-4">¿Buscás un servicio personalizado? Consultanos por WhatsApp.</p>
      <WhatsAppButton className="bg-[#65c6b6] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#4ea99c] transition" />
    </div>
  </section>
);

export default Services; 