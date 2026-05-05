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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Financial Services */}
          <div className="md:col-span-12 lg:col-span-8 group relative overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Financial Services</h3>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl">Comprehensive wealth advisory and heritage management strategies tailored to secure your legacy and maximize multi-generational growth.</p>
              </div>
              <div className="mt-12">
                <Link className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all" to="/contact">
                  Learn More <ArrowRight size={24} />
                </Link>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500 hidden sm:block">
              <Landmark size={300} />
            </div>
          </div>

          {/* Equity */}
          <div className="md:col-span-6 lg:col-span-4 group bg-[#001f66] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-blue-900/10">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#C5A059] mb-8">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Equity Markets</h3>
              <p className="text-blue-100/70 text-base leading-relaxed">Direct access to primary exchanges with institutional-grade research, low-latency execution, and precision wealth tracking.</p>
            </div>
            <Link className="mt-10 py-4 bg-[#C5A059] rounded-2xl text-center text-[#0a1128] font-bold hover:scale-105 transition-all" to="/equity">Explore Equity</Link>
          </div>

          {/* Derivatives */}
          <div className="md:col-span-6 lg:col-span-4 group bg-slate-50 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100">
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <BarChart2 size={28} />
                </div>
                <div className="bg-amber-100 px-4 py-1.5 rounded-full text-[10px] font-black text-amber-700 tracking-widest uppercase">High Precision</div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Derivatives</h3>
              <p className="text-slate-500 text-base leading-relaxed">Sophisticated hedging and speculation instruments including Futures and Options, designed for professional risk management.</p>
            </div>
            <Link className="mt-10 text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all" to="/derivatives">
              Explore F&O <ChevronRight size={20} />
            </Link>
          </div>

          {/* Commodity */}
          <div className="md:col-span-6 lg:col-span-4 group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-8">
                <Grid3X3 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Commodity</h3>
              <p className="text-slate-500 text-base leading-relaxed">Diversify your portfolio with Bullion, Energy, and Industrial assets through our secure, high-liquidity trading desks.</p>
            </div>
            <Link className="mt-10 text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all" to="/commodity">
              Trade Assets <ChevronRight size={20} />
            </Link>
          </div>

          {/* Mutual Funds */}
          <div className="md:col-span-6 lg:col-span-4 group bg-slate-50 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8">
                <PieChart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Mutual Funds</h3>
              <p className="text-slate-500 text-base leading-relaxed">Professional asset management across a wide spectrum of debt, equity, and hybrid funds tailored to your goals.</p>
            </div>
            <Link className="relative z-10 mt-10 text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all" to="/mutual-funds">
              View Funds <ChevronRight size={20} />
            </Link>
          </div>

          {/* IPO */}
          <div className="md:col-span-12 lg:col-span-6 group bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition-all duration-500">
            <div className="flex-1">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8">
                <Rocket size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">IPO Center</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">Invest in the next generation of industry leaders with priority access to Mainboard and SME listings.</p>
              <Link className="text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all" to="/ipo">
                Apply for IPO <ChevronRight size={24} />
              </Link>
            </div>
            <div className="w-full md:w-56 aspect-square rounded-[2rem] bg-slate-50 overflow-hidden border border-slate-100 shadow-inner">
              <img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw8NVkrRRZfGHs4G33fPa3NA0SBjahuUXogbqP-zZoy40L95yJpLbmhmsW1x0C36WE8AEHsv4-FxVylokirfDpZaqVrUDT8g14Y5CtCWDJyQI-hIE1yvbf1wH8ZM0YZYtgKf7iCOe7seMfUSEIfBoRQq3bEkmO0ynZdc0dC1u0Kv7QC7S1wNlRTh8Zeku3oc-r1CkTRH8Zusyj7OPYzwSZxOIqo2t4Z8CmpeuCWKzGSesuxhUR4BtMQW3gD5dXKfO9-zRx_Ku4Sxc" alt="IPO" />
            </div>
          </div>

          {/* NCD */}
          <div className="md:col-span-12 lg:col-span-6 group bg-slate-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition-all duration-500 border border-slate-200/50">
            <div className="flex-1">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary mb-8 shadow-sm">
                <FileText size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Fixed Income (NCD)</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">Stable returns through Non-Convertible Debentures with superior yields compared to traditional savings.</p>
              <Link className="text-primary font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all" to="/ncd">
                Invest in NCD <ChevronRight size={24} />
              </Link>
            </div>
            <div className="w-full md:w-56 aspect-square rounded-[2rem] bg-white/50 flex items-center justify-center backdrop-blur-md border border-white shadow-sm">
              <CircleDollarSign size={80} className="text-primary opacity-80" />
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
