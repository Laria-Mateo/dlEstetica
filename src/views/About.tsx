import danielaImg from '../assets/daniela.png';

const About = () => (
  <section id="sobre-mi" className="max-w-5xl mx-auto px-4 py-16">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg mb-4">
          ¡Hola! Soy <span className="font-semibold">Daniela Laria</span>, fundadora del Salón de Belleza. Con más de 7 años de experiencia en el rubro de la peluquería, me especializo en tratamientos capilares, color, nutrición y asesoramiento personalizado para cada cliente.
        </p>
        <p className="text-lg mb-4">
          Además, realizo servicios de <span className="font-semibold">pestañas, maquillajes, cejas, uñas</span> y mucho más para que puedas encontrar todo lo que necesitás en un solo lugar. Mi objetivo es que cada persona que visite el salón se sienta única, reciba la mejor atención y salga feliz con su look.
        </p>
        <p className="text-lg">
          ¡Te espero para que vivas una experiencia de belleza profesional!
        </p>
      </div>
      <div className="hidden md:flex items-center h-40">
        <div className="w-2 h-32 rounded-full bg-[#65c6b6] mx-2"></div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={danielaImg}
          alt="Daniela Laria - Profesional"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-[#65c6b6] bg-white"
        />
      </div>
    </div>
    <div className="w-full flex flex-col items-center mt-12">
      <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-lg border border-[#e0e0e0] bg-white">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-[#e0e0e0] bg-[#f6fdfa]">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 21c4.97-6.16 7.45-9.24 7.45-12.04C19.45 5.01 16.7 2.5 13.5 2.5S7.55 5.01 7.55 8.96C7.55 11.76 10.03 14.84 12 21Z" stroke="#65c6b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="9" r="2.5" fill="#65c6b6"/></svg>
          <span className="text-lg font-semibold text-[#222]">Ubicación</span>
        </div>
        <iframe
          title="Ubicación Salón de Belleza Daniela Laria"
          src="https://www.google.com/maps?q=-31.766170,-60.495853&z=16&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default About; 