import WhatsAppButton from '../components/WhatsAppButton';
import promosLogo from '../assets/promos.jpg';

const promos = [
  'LAVADO + SECADO + PLANCHITA',
  'NUTRICIÓN + CORTE DE PUNTAS',
  'RETOQUE DE RAIZ + BAÑO DE LUZ + NUTRICION',
  'ALISADO + CORTE DE PUNTAS + NUTRICION',
  'COLOR COMPLETO + NUTRICION + CORTE DE PUNTAS',
  'BOTOX / SHOCK DE KERATINA + CORTE DE PUNTAS + NUTRICION',
];

const handleCardClick = () => {
  const contactoSection = document.getElementById('contacto');
  if (contactoSection) {
    contactoSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Promos = () => (
  <section id="promos" className="max-w-4xl mx-auto px-4 py-16">
    <div className="flex flex-col items-center mb-8">
      <img
        src={promosLogo}
        alt="Logo Promociones"
        className="w-28 h-28 object-contain rounded-full bg-white shadow-lg mb-4 border-4 border-[#65c6b6]"
      />
      <h2 className="text-3xl font-bold mb-2 text-center">Promociones</h2>
      <p className="text-[#444] text-center max-w-xl mb-2">Aprovechá nuestras promos exclusivas para renovar tu look y cuidar tu cabello. Consultá por disponibilidad y combinaciones personalizadas.</p>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {promos.map((promo, idx) => (
        <button
          key={idx}
          onClick={handleCardClick}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#e0e0e0] hover:shadow-2xl transition-all cursor-pointer hover:bg-[#f3fdfa] focus:outline-none"
        >
          <span className="font-semibold text-lg mb-0 text-center text-[#222]">{promo}</span>
        </button>
      ))}
    </div>
  </section>
);

export default Promos; 