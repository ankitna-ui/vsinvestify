import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Coins, Flame, Gem, BarChart2, Globe, Shield, ArrowRight } from 'lucide-react';
import commodityHero from '../images/commodity_hero.png';

export default function Commodity() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Hard Assets Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#001f66] leading-[1.05] tracking-tight">
              Commodity <br /> <span className="text-slate-400">Markets.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Trade the world's most essential assets. From Gold and Silver to Crude Oil and Base Metals, diversify your portfolio with tangible market value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform flex items-center gap-2">
                Trade MCX <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="border border-slate-200 text-[#001f66] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">Market Outlook</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img src={commodityHero} alt="Commodity Trading" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commodity Grid */}
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
              { title: "Precious Metals", desc: "Direct trading in Gold and Silver futures on MCX for hedging against inflation.", icon: <Gem size={24} /> },
              { title: "Energy Desk", desc: "Access Crude Oil and Natural Gas markets with high-liquidity trading pairs.", icon: <Flame size={24} /> },
              { title: "Base Metals", desc: "Diversify into Copper, Zinc, and Aluminum to capitalize on industrial demand.", icon: <Coins size={24} /> },
              { title: "Global Feeds", desc: "Real-time pricing synced with international exchanges like COMEX and NYMEX.", icon: <Globe size={24} /> },
              { title: "Intraday Calls", desc: "Short-term momentum signals from our dedicated commodity research desk.", icon: <BarChart2 size={24} /> },
              { title: "Vault Security", desc: "Seamless delivery-based transactions with secured warehouse integrations.", icon: <Shield size={24} /> }
            ].map((asset, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                  {asset.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001f66] mb-3">{asset.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed opacity-80">{asset.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
