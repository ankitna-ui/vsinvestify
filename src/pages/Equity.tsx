import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart2, Shield, Zap, Globe, PieChart, ArrowRight } from 'lucide-react';
import equityHero from '../images/equity_hero.png';

export default function Equity() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <main className="pt-32 pb-20 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">NSE & BSE Direct Access</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#001f66] leading-[1.05] tracking-tight">
              Equity & <br /> <span className="text-slate-400">Stock Markets.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Access the pulse of the Indian economy with institutional-grade trading tools, real-time analytics, and precision execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform flex items-center gap-2">
                Start Trading <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="border border-slate-200 text-[#001f66] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">Expert Advice</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img src={equityHero} alt="Equity Trading" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Real-time Analytics", desc: "Advanced charting tools with 100+ technical indicators for precise market timing.", icon: <Zap size={24} /> },
              { title: "Expert Research", desc: "Daily market insights and stock recommendations from our top-tier research desk.", icon: <PieChart size={24} /> },
              { title: "Direct Access", desc: "Low-latency order execution directly on NSE and BSE exchanges with zero slippage.", icon: <Globe size={24} /> },
              { title: "Portfolio Tracking", desc: "A unified dashboard to monitor your holdings, P&L, and sector-wise diversification.", icon: <BarChart2 size={24} /> },
              { title: "Safe & Secure", desc: "Bank-grade 256-bit encryption ensuring your trades and data are always protected.", icon: <Shield size={24} /> },
              { title: "Smart Alerts", desc: "Instant notifications for price movements, news updates, and custom target triggers.", icon: <TrendingUp size={24} /> }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#001f66] mb-6 group-hover:bg-[#001f66] group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001f66] mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed opacity-80">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
