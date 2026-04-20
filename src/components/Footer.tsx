import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-24 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: CTA */}
        <div className="mb-20 p-10 rounded-[2rem] bg-gradient-to-r from-[#001f66] to-[#1a3683] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to secure your financial future?</h3>
            <p className="text-blue-100/80 text-sm md:text-base">Join 50,000+ investors who trust VS INVESTIFY for their wealth management.</p>
          </div>
          <Link 
            to="/contact" 
            className="bg-[#C5A059] hover:bg-[#B38F48] text-[#001f66] font-bold px-8 py-4 rounded-2xl transition-all flex items-center gap-2 group whitespace-nowrap"
          >
            Get Started Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-slate-100">
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/d/1EHq6iGOjfeXHjP2CAEXHMLMgB7QBNSxY" 
                alt="VS INVESTIFY" 
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-bold text-[#001f66] tracking-tight uppercase">VS INVESTIFY</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Institutional-grade wealth management and investment advisory. Committed to transparency, integrity, and your long-term financial growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#001f66] hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#001f66]">Investments</h4>
              <ul className="space-y-4">
                {['Equity Trading', 'Derivatives', 'Commodity', 'Mutual Funds', 'IPO Center'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-[#001f66] text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#001f66]">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Our Team', 'Careers', 'Contact Us', 'Support'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-[#001f66] text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#001f66]">Contact</h4>
              <div className="space-y-4 text-sm text-slate-500">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <p>B-42 First floor Rangoli plaza Maharana pratap road vaishali Nagar Jaipur 302034</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#C5A059] shrink-0" />
                  <p>+91 96600 39403</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#C5A059] shrink-0" />
                  <p>support@vsinvestify.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'SEBI Registered', id: 'INA000000000', desc: 'Investment Advisor' },
              { title: 'AMFI Certified', id: 'ARN-00000', desc: 'Mutual Fund Distributor' },
              { title: 'ISO 27001', id: 'Certified', desc: 'Data Security Standards' },
              { title: 'NISM Certified', id: 'Professional', desc: 'Advisory Excellence' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Shield className="text-[#001f66]" size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#001f66] uppercase tracking-wider">{item.title}</h5>
                  <p className="text-[10px] text-slate-400 font-medium mt-1">{item.id}</p>
                  <p className="text-[10px] text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-[#C5A059] shrink-0 mt-1" size={20} />
              <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-wider">
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. VS INVESTIFY is a registered trademark of VS Wealth Management Pvt Ltd.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
            © {currentYear} VS INVESTIFY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <Link to="#" className="hover:text-[#001f66] transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#001f66] transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-[#001f66] transition-colors">Risk Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
