import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  /** Phone number in international format (can include + or spaces). If omitted, VITE_WHATSAPP_NUMBER or a fallback will be used. */
  phoneNumber?: string;
  /** Default message to prefill in WhatsApp chat. */
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  // Prefer a passed prop, then the Vite env var, then the hard-coded fallback.
  // Vite exposes env vars that start with VITE_ to client code.
  const envNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string) || '';
  const rawNumber = phoneNumber || envNumber || '+92349469130'; // Replace fallback as needed
  const text = message || 'Hello Usman! I would like to discuss a project with you.';

  // Normalize number: remove everything except digits.
  const normalizedNumber = rawNumber.replace(/\D/g, '');

  // Basic validation: ensure we have at least 9 digits (country + national number).
  // This is a simple heuristic to avoid calling wa.me with clearly-broken numbers
  // (e.g. the screenshot shows a missing digit). If you want stricter checks,
  // we can add per-country validation later.
  const isValidNumber = normalizedNumber.length >= 9;

  const handleClick = () => {
    if (!isValidNumber) {
      // eslint-disable-next-line no-console
      console.warn('WhatsApp number is not configured or appears invalid:', rawNumber);
      return;
    }

    const url = `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(text)}`;
    // open in new tab/window
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact via WhatsApp"
    >
      <div className="relative">
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50">
          <MessageCircle size={28} className="animate-pulse" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
          <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
