import { Link } from 'react-router-dom';
import { FileText, CircleDollarSign, ShieldCheck } from 'lucide-react';

export default function NCD() {
  return (
    <main className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Fixed Income</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary text-editorial-contrast leading-[1.1]">
            NCD <br className="hidden md:block" />Investments
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Secure your future with fixed income solutions. Non-Convertible Debentures (NCDs) offer stable returns with calculated risk, perfect for the conservative investor.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-sm md:text-md hover:scale-[1.05] transition-all shadow-xl shadow-primary/20" to="/demat">Invest in NCDs</Link>
            <Link className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-bold text-sm md:text-md hover:bg-surface-container-low transition-all" to="/contact">Consult an Expert</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2rem] blur-3xl -z-10"></div>
          <div className="bg-surface-container-lowest rounded-[2rem] p-4 shadow-[0_40px_80px_rgba(0,31,102,0.08)] overflow-hidden max-w-md mx-auto lg:max-w-none">
            <img className="w-full h-[300px] md:h-[400px] object-cover rounded-[1.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw8NVkrRRZfGHs4G33fPa3NA0SBjahuUXogbqP-zZoy40L95yJpLbmhmsW1x0C36WE8AEHsv4-FxVylokirfDpZaqVrUDT8g14Y5CtCWDJyQI-hIE1yvbf1wH8ZM0YZYtgKf7iCOe7seMfUSEIfBoRQq3bEkmO0ynZdc0dC1u0Kv7QC7S1wNlRTh8Zeku3oc-r1CkTRH8Zusyj7OPYzwSZxOIqo2t4Z8CmpeuCWKzGSesuxhUR4BtMQW3gD5dXKfO9-zRx_Ku4Sxc" alt="NCD Investments" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low mt-16 md:mt-24 -mx-6 md:-mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm text-center md:text-left border border-slate-100 group hover:shadow-xl transition-all duration-500">
              <FileText className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Secured NCDs</h3>
              <p className="text-slate-500 text-sm md:text-base">High-security fixed income instruments backed by company assets for peace of mind.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm text-center md:text-left border border-slate-100 group hover:shadow-xl transition-all duration-500">
              <CircleDollarSign className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4">High Yield</h3>
              <p className="text-slate-500 text-sm md:text-base">Earn superior returns compared to traditional fixed deposits with our curated NCD selection.</p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm text-center md:text-left border border-slate-100 group hover:shadow-xl transition-all duration-500">
              <ShieldCheck className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Credit Ratings</h3>
              <p className="text-slate-500 text-sm md:text-base">We only offer NCDs with high credit ratings from leading agencies like CRISIL and ICRA.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
