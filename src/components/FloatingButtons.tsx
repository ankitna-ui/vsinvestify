import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[90]">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919660039402"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-[#075E54] px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919660039403"
        className="w-14 h-14 bg-[#001f66] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Call us"
      >
        <Phone size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 bg-white text-[#001f66] px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Call us now
        </span>
      </a>
    </div>
  );
}
