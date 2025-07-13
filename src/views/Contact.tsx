import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => (
  <section id="contacto" className="flex flex-col items-center justify-center min-h-[40vh] text-center px-4 py-12">
    <h2 className="text-3xl font-bold mb-6">Contacto</h2>
    <p className="text-lg mb-6">¿Querés reservar un turno o tenés consultas? Escribinos por WhatsApp y te respondemos a la brevedad.</p>
    <WhatsAppButton className="bg-[#65c6b6] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#4ea99c] transition" />
    <a
      href="https://www.instagram.com/d.l.salondebelleza/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 flex items-center gap-2 text-[#65c6b6] hover:text-[#4ea99c] transition text-lg font-semibold"
      aria-label="Instagram"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
      </svg>
      Instagram
    </a>
  </section>
);

export default Contact; 