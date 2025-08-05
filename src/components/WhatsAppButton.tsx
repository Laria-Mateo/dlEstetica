interface WhatsAppButtonProps {
  className?: string;
}

const phone = '5493434674197';
const message = encodeURIComponent('¡Hola! Quiero consultar por los servicios del salón.');
const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ className }) => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={className || 'bg-[#65c6b6] text-white px-4 py-2 rounded'}
  >
    Consultar por WhatsApp
  </a>
);

export default WhatsAppButton; 