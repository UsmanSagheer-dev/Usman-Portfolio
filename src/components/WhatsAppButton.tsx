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
  const rawNumber = phoneNumber || envNumber || '';
  const envMessage = (import.meta.env.VITE_WHATSAPP_MESSAGE as string) || '';
  const text = message || envMessage || 'Hello Usman! I would like to discuss a project with you.';

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
      disabled={!isValidNumber}
      aria-label={isValidNumber ? 'Contact via WhatsApp' : 'WhatsApp number not configured'}
      aria-disabled={!isValidNumber}
      className={`fixed bottom-6 right-6 z-50 group focus:outline-none ${
        isValidNumber ? '' : 'pointer-events-none'
      }`}
      title={isValidNumber ? 'Chat on WhatsApp' : 'WhatsApp number not configured - set VITE_WHATSAPP_NUMBER in .env'}
    >
      <div className="relative">
        {/* Pulsing ring effect (hide when disabled) */}
        <div
          className={`absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 ${
            isValidNumber ? '' : 'hidden'
          }`}
        ></div>

        {/* Main button */}
        <div
          className={`relative text-white p-4 rounded-full shadow-2xl transition-all duration-300 ${
            isValidNumber
              ? 'bg-green-500 hover:bg-green-600 hover:scale-110 hover:shadow-green-500/50'
              : 'bg-gray-400 cursor-not-allowed opacity-70'
          }`}
        >
          <MessageCircle size={28} className={`${isValidNumber ? 'animate-pulse' : ''}`} />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {isValidNumber ? 'Chat on WhatsApp' : 'WhatsApp number not configured'}
          <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
