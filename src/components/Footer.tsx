const Footer = () => {
  return (
    <footer className="bg-[#65c6b6] text-white text-center py-4 mt-8">
            <div>
      <span>Desarrollado por <span className="font-semibold">Técnico Universitario en Programación Mateo Laria</span></span>
    </div>
      <span>Salón de Belleza &copy; {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer; 