import { Link } from 'react-router-dom';
import { 
  Wallet, 
  Users, 
  ArrowRight, 
  Landmark, 
  TrendingUp, 
  BarChart2, 
  ChevronRight, 
  Grid3X3, 
  PieChart, 
  Rocket, 
  FileText, 
  CircleDollarSign 
} from 'lucide-react';

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">Our Expertise</span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1] mb-6 md:mb-8">
              Comprehensive <br className="hidden sm:block" />Financial Ecosystem
            </h1>
            <p className="text-base md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A curated suite of wealth management and trading tools designed for the modern investor. Precision, security, and prestige at the core of every transaction.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center animate-pulse">
              <Wallet className="text-primary" size={40} />
            </div>
          </div>
        </div>
      </header>

      {/* Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Financial Services */}
          <div className="md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-white rounded-3xl border border-slate-100 p-8 md:p-10 hover:shadow-xl transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <Users size={40} className="text-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Financial Services</h3>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md">Comprehensive advisory and management strategies tailored to secure your legacy and maximize future growth.</p>
              </div>
              <div className="mt-8 md:mt-12">
                <Link className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" to="/contact">
                  Learn More <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 hidden sm:block">
              <Landmark size={200} />
            </div>
          </div>

          {/* Equity */}
          <div className="md:col-span-6 lg:col-span-4 group bg-[#001f66] rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <TrendingUp size={40} className="text-[#C5A059] mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Equity</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">Direct access to primary exchanges with institutional-grade research and execution speed.</p>
            </div>
            <Link className="mt-8 py-3 bg-white/10 backdrop-blur-md rounded-xl text-center text-white font-semibold hover:bg-white/20 transition-colors" to="/equity">Learn More</Link>
          </div>

          {/* Derivatives */}
          <div className="md:col-span-6 lg:col-span-4 group bg-slate-50 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:bg-slate-100 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-6">
                <BarChart2 size={40} className="text-primary" />
                <div className="bg-amber-100 px-3 py-1 rounded-full text-[10px] font-bold text-amber-700 tracking-tighter uppercase">High Precision</div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Derivative</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Sophisticated hedging and speculation instruments including Futures and Options.</p>
            </div>
            <Link className="mt-8 text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all" to="/derivatives">
              Learn More <ChevronRight size={16} />
            </Link>
          </div>

          {/* Commodity */}
          <div className="md:col-span-6 lg:col-span-4 group bg-white border border-slate-100 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:shadow-lg transition-all">
            <div>
              <Grid3X3 size={40} className="text-primary mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Commodity</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Diversify your portfolio with gold, silver, and energy assets through secure trading desks.</p>
            </div>
            <Link className="mt-8 text-primary font-bold text-sm inline-flex items-center gap-1" to="/commodity">
              Learn More <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mutual Funds */}
          <div className="md:col-span-6 lg:col-span-4 group bg-slate-50 rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <PieChart size={40} className="text-primary mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">Mutual Funds</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Professional asset management with a wide spectrum of debt, equity, and hybrid funds.</p>
            </div>
            <Link className="relative z-10 mt-8 text-primary font-bold text-sm inline-flex items-center gap-1" to="/mutual-funds">
              Learn More <ChevronRight size={16} />
            </Link>
          </div>

          {/* IPO */}
          <div className="md:col-span-12 lg:col-span-6 group bg-white border border-slate-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-all">
            <div className="flex-1">
              <Rocket size={40} className="text-primary mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">IPO</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Invest in the next generation of industry leaders. Streamlined application for upcoming listings.</p>
              <Link className="text-primary font-bold text-sm inline-flex items-center gap-1" to="/ipo">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
            <div className="w-full md:w-48 aspect-square rounded-2xl bg-slate-50 overflow-hidden">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw8NVkrRRZfGHs4G33fPa3NA0SBjahuUXogbqP-zZoy40L95yJpLbmhmsW1x0C36WE8AEHsv4-FxVylokirfDpZaqVrUDT8g14Y5CtCWDJyQI-hIE1yvbf1wH8ZM0YZYtgKf7iCOe7seMfUSEIfBoRQq3bEkmO0ynZdc0dC1u0Kv7QC7S1wNlRTh8Zeku3oc-r1CkTRH8Zusyj7OPYzwSZxOIqo2t4Z8CmpeuCWKzGSesuxhUR4BtMQW3gD5dXKfO9-zRx_Ku4Sxc" alt="IPO" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* NCD */}
          <div className="md:col-span-12 lg:col-span-6 group bg-slate-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-all">
            <div className="flex-1">
              <FileText size={40} className="text-primary mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">NCD</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">Fixed income solutions through Non-Convertible Debentures. Stable returns with calculated risk.</p>
              <Link className="text-primary font-bold text-sm inline-flex items-center gap-1" to="/ncd">
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
            <div className="w-full md:w-48 aspect-square rounded-2xl bg-white/50 flex items-center justify-center backdrop-blur-sm border border-white/50">
              <CircleDollarSign size={64} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="primary-gradient rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to curate your wealth?</h2>
            <p className="text-primary-fixed-dim text-lg mb-10 opacity-90">Join thousands of sophisticated investors who trust VS INVESTIFY for their market execution.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-[1.05] active:scale-95 transition-all" to="/demat">Open Demat Account</Link>
              <Link className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all" to="/contact">Contact Advisor</Link>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[80%] rounded-full bg-white blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] rounded-full bg-white blur-[100px]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
