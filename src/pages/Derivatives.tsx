import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Activity, Layers, Target, Zap, Shield, TrendingDown, ArrowRight } from 'lucide-react';
import derivativesHero from '../images/derivatives_hero.png';

export default function Derivatives() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">High Leverage Trading</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#001f66] leading-[1.05] tracking-tight">
              Futures & <br /> <span className="text-slate-400">Options Desk.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Master market volatility with sophisticated F&O strategies. Hedge your risks or capitalize on directional moves with our low-latency trading engine.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform flex items-center gap-2">
                Activate F&O <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="border border-slate-200 text-[#001f66] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">Strategy Consultation</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img src={derivativesHero} alt="Derivatives Trading" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Grid */}
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
              { title: "Futures Trading", desc: "Institutional-grade liquidity for index and stock futures with competitive margins.", icon: <Activity size={24} /> },
              { title: "Options Strategies", desc: "Build spreads, straddles, and condors with our advanced multi-leg order system.", icon: <Layers size={24} /> },
              { title: "Risk Management", desc: "Automated stop-loss and trailing profit-taking tools to protect your capital.", icon: <Shield size={24} /> },
              { title: "Advanced Greeks", desc: "Real-time Delta, Gamma, Theta, and Vega tracking for every strike price.", icon: <Target size={24} /> },
              { title: "Low Latency", desc: "Millisecond execution speed ensuring you get the best possible entry and exit.", icon: <Zap size={24} /> },
              { title: "Market Hedging", desc: "Protect your long-term portfolio from market downturns using index options.", icon: <TrendingDown size={24} /> }
            ].map((strategy, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001f66] mb-3">{strategy.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed opacity-80">{strategy.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
