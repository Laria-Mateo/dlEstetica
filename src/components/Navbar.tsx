import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import logo from '../assets/logo.jpg';

const navLinks = [
  { to: 'home', label: 'Inicio' },
  { to: 'sobre-mi', label: 'Sobre mí' },
  { to: 'promos', label: 'Promos' },
  { to: 'servicios', label: 'Servicios' },
  { to: 'contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const homeSection = document.getElementById('home');
      
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const isPastHero = currentScrollY + 80 >= homeBottom;
        
        const shouldShow = isScrollingUp || currentScrollY < 100 || !isPastHero;
        
        setShowNavbar(shouldShow);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isScrollingUp]);

  useEffect(() => {
    const handleSpy = () => {
      let current = navLinks[0].to;
      const scroll = window.scrollY + 100;
      for (let i = 0; i < navLinks.length; i++) {
        const el = document.getElementById(navLinks[i].to);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scroll >= top && scroll < bottom) {
            current = navLinks[i].to;
            break;
          }
        }
      }
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        current = navLinks[navLinks.length - 1].to;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleSpy);
    handleSpy();
    return () => window.removeEventListener('scroll', handleSpy);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      setDrawerVisible(true);
      setDrawerClosing(false);
    } else if (drawerVisible) {
      setDrawerClosing(true);
      const timeout = setTimeout(() => {
        setDrawerVisible(false);
        setDrawerClosing(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [drawerOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`bg-white/80 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-50 transition-all duration-300 ${
          showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
              <img src={logo} alt="Logo" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border-2 border-[#65c6b6] shadow-md" />
              <span className="font-bold text-lg lg:text-2xl tracking-wide text-gray-800 hidden sm:block">DL Salón de Belleza</span>
              <span className="font-bold text-lg tracking-wide text-gray-800 sm:hidden">DL</span>
            </div>

            <ul className="hidden lg:flex gap-6 xl:gap-8 text-base xl:text-lg font-semibold">
              {navLinks.map(link => (
                <li key={link.to} className="relative">
                  <button
                    onClick={() => scrollToSection(link.to)}
                    className={`px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap
                    ${activeSection === link.to ? 'bg-[#65c6b6] text-white font-bold' : 'text-gray-700 hover:text-[#65c6b6] hover:bg-[#65c6b6]/10'}
                  `}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button
                className="bg-[#65c6b6] hover:bg-[#5ab3a3] text-white"
                onClick={() =>
                  window.open("https://wa.me/5493434674197?text=Hola! Me gustaría consultar sobre sus servicios", "_blank")
                }
              >
                Consultar
              </Button>
            </div>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none hover:bg-[#4ea99c] transition"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#65c6b6" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="hidden xl:flex flex-col items-end fixed top-1/2 right-8 z-40 -translate-y-1/2 gap-3">
        {navLinks.map(link => (
          <button
            key={link.to}
            onClick={() => scrollToSection(link.to)}
            className={`flex items-center gap-2 px-4 py-2 rounded-l-full shadow transition-all duration-200
              ${activeSection === link.to ? 'bg-[#65c6b6] text-white font-bold scale-105' : 'bg-white text-[#65c6b6] hover:bg-[#e6f7f4]'}
            `}
            style={{ minWidth: 120 }}
          >
            <span className="truncate">{link.label}</span>
          </button>
        ))}
      </div>

      {drawerVisible && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className={`relative bg-white/95 backdrop-blur-sm w-full h-full shadow-2xl p-6 flex flex-col gap-6 ${drawerClosing ? 'animate-slideOutLeft' : 'animate-slideInLeft'}`}>
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-[#65c6b6] focus:outline-none"
              onClick={() => setDrawerOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full bg-white border-2 border-[#65c6b6] shadow-md" />
              <span className="font-bold text-xl text-gray-800">DL Salón de Belleza</span>
            </div>

            <span className="font-bold text-xl mb-4 text-gray-800">Secciones</span>
            <ul className="flex flex-col gap-4 mt-4">
              {navLinks.map(link => (
                <li key={link.to}>
                  <button
                    onClick={() => scrollToSection(link.to)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all text-lg ${activeSection === link.to ? 'bg-[#65c6b6] text-white font-bold' : 'text-gray-700 hover:bg-[#e6f7f4]'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button
                className="w-full bg-[#65c6b6] hover:bg-[#5ab3a3] text-white py-3 text-lg"
                onClick={() => {
                  window.open("https://wa.me/5493434674197?text=Hola! Me gustaría consultar sobre sus servicios", "_blank");
                  setDrawerOpen(false);
                }}
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      {!showNavbar && !drawerVisible && (
        <button
          className="fixed bottom-6 right-6 z-40 lg:hidden w-16 h-16 rounded-full bg-[#65c6b6] bg-opacity-80 backdrop-blur shadow-2xl flex items-center justify-center focus:outline-none hover:bg-[#4ea99c] transition"
          onClick={() => setDrawerOpen(true)}
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </button>
      )}

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-slideOutLeft {
          animation: slideOutLeft 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </>
  );
};

export default Navbar; 