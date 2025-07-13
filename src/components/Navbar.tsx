import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setShowNavbar(window.scrollY + 80 < homeBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {showNavbar && (
        <nav
          className={`bg-[#65c6b6] text-white px-6 py-4 shadow-lg border-b border-[#b2e5de] fixed w-full top-0 z-50 transition-all duration-300 opacity-100`}
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full bg-white border-2 border-[#65c6b6] shadow-md" />
              <span className="font-bold text-2xl tracking-wide">Salón de Belleza</span>
            </div>
            <ul className="hidden md:flex gap-8 text-lg font-semibold">
              {navLinks.map(link => (
                <li key={link.to} className="relative">
                  <button
                    onClick={() => scrollToSection(link.to)}
                    className={`px-2 py-1 transition-all duration-200
                    ${activeSection === link.to ? 'bg-white bg-opacity-20 rounded text-[#222] font-bold' : 'text-white hover:text-[#222]'}
                  `}
                  >
                    <span className="relative z-10">
                      {link.label}
                    </span>
                    <span className={`absolute left-0 -bottom-1 w-full h-1 rounded transition-all duration-300
                    ${activeSection === link.to ? 'bg-[#222] opacity-80' : 'bg-white opacity-0 group-hover:opacity-40'}`}></span>
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none hover:bg-[#4ea99c] transition"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </nav>
      )}
      <div className="hidden lg:flex flex-col items-end fixed top-1/2 right-8 z-40 -translate-y-1/2 gap-3">
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
        <div className="fixed inset-0 z-50 flex">
          <div className={`relative bg-[#65c6b6] w-full h-full shadow-2xl p-8 flex flex-col gap-6 ${drawerClosing ? 'animate-slideOutLeft' : 'animate-slideInLeft'}`}>
            <button
              className="absolute top-4 right-4 text-white hover:text-[#222] focus:outline-none"
              onClick={() => setDrawerOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </button>
            <span className="font-bold text-xl mb-4">Secciones</span>
            <ul className="flex flex-col gap-4 mt-8">
              {navLinks.map(link => (
                <li key={link.to}>
                  <button
                    onClick={() => scrollToSection(link.to)}
                    className={`w-full text-left px-2 py-2 rounded transition-all ${activeSection === link.to ? 'bg-white text-[#65c6b6] font-bold' : 'text-white hover:bg-[#4ea99c]'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col items-center justify-end">
              <img
                src={logo}
                alt="Logo Salón de Belleza"
                className="w-28 h-28 object-contain rounded-full bg-white border-4 border-[#65c6b6] shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
      {!showNavbar && !drawerVisible && (
        <button
          className="fixed bottom-6 right-6 z-40 md:hidden w-16 h-16 rounded-full bg-[#65c6b6] bg-opacity-80 backdrop-blur shadow-2xl flex items-center justify-center focus:outline-none hover:bg-[#4ea99c] transition"
          onClick={() => setDrawerOpen(true)}
          aria-label="Abrir menú"
        >
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
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