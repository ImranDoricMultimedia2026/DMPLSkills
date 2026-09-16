import React, { useEffect, useState } from 'react';
import { MessageSquareText, ArrowUp } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/?text=Hello%20DMPL%20Skills%2C%20I%20am%20interested%20in%20your%20vocational%20training%20programs.';
const SMS_URL =
  'sms:?&body=Hello%20DMPL%20Skills%2C%20I%20am%20interested%20in%20your%20vocational%20training%20programs.';

const baseButtonClasses = `
  pointer-events-auto
  group relative
  flex items-center justify-center
  w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14
  rounded-full
  shadow-[0_10px_28px_rgba(18,51,95,0.28)]
  ring-1 ring-black/5
  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_36px_rgba(18,51,95,0.32)]
  active:translate-y-0 active:scale-95
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9933] focus-visible:ring-offset-2
`;

/**
 * WhatsApp brand glyph (lucide-react has no brand icons).
 */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 7 3.898 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const Tooltip: React.FC<{ label: string }> = ({ label }) => (
  <span
    aria-hidden="true"
    className="
      pointer-events-none
      absolute right-full mr-3
      hidden sm:inline-flex items-center
      whitespace-nowrap
      rounded-lg
      bg-[#12335f] px-2.5 py-1.5
      text-[11px] font-bold text-white
      shadow-lg
      opacity-0 translate-x-1
      group-hover:opacity-100 group-hover:translate-x-0
      transition-all duration-200
    "
  >
    {label}
  </span>
);

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setShowBackToTop(window.scrollY > 400);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div
      aria-label="Quick actions"
      className="
        pointer-events-none
        fixed z-40
        bottom-[max(1rem,env(safe-area-inset-bottom))] right-4
        sm:bottom-6 sm:right-6
        flex flex-col items-end gap-2.5 sm:gap-3
      "
    >
      {/* WhatsApp — navy brand, orange on hover */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        className={`${baseButtonClasses} bg-[#12335f] text-white hover:bg-[#ff9933] hover:text-[#12335f]`}
      >
        <Tooltip label="Chat on WhatsApp" />
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* SMS — white/navy, orange on hover */}
      <a
        href={SMS_URL}
        aria-label="Send us an SMS"
        title="Send an SMS"
        className={`${baseButtonClasses} bg-white text-[#12335f] ring-[#12335f]/10 hover:bg-[#ff9933] hover:text-[#12335f] hover:ring-[#ff9933]/40`}
      >
        <Tooltip label="Send an SMS" />
        <MessageSquareText className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* Back to Top — orange brand, appears after scrolling */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        className={`${baseButtonClasses} bg-[#ff9933] text-[#12335f] hover:bg-[#12335f] hover:text-white ${
          showBackToTop
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-3 scale-90 pointer-events-none'
        }`}
      >
        <Tooltip label="Back to top" />
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
      </button>
    </div>
  );
};
