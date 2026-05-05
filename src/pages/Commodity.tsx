import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Coins, Flame, Gem, BarChart2, Globe, Shield, ArrowRight, Anchor, Factory, Landmark, Zap } from 'lucide-react';
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
    <main className="pt-32 pb-20 overflow-hidden font-sans bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Hard Asset Allocation</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#001f66] leading-[1] tracking-tighter">
              Commodity <br /> <span className="text-slate-400">Assets.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
              Diversify your wealth with tangible market value. From the timeless security of Bullion to the industrial pulse of Base Metals and Energy, our commodity desk provides seamless access to the world's most essential resources.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:scale-105 transition-all flex items-center gap-3">
                Start Trading MCX <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-slate-200 text-[#001f66] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">Market Outlook</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[4rem] blur-3xl opacity-30"></div>
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <img src={commodityHero} alt="Commodity Trading" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                <p className="text-white font-bold text-xs uppercase tracking-widest mb-1">Live Bullion Feed</p>
                <div className="flex items-center gap-4">
                  <span className="text-[#C5A059] font-black text-xl">XAU/INR</span>
                  <span className="text-green-400 text-sm font-bold">+0.45% ▲</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commodity Segments */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f66] mb-6">Market Diversification</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Balance your paper assets with physical market commodities to protect against inflation and currency devaluation.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "Bullion Desk", 
                desc: "Secure trading in Gold and Silver futures with direct correlation to international spot prices and COMEX feeds.",
                icon: <Gem size={24} />
              },
              { 
                title: "Energy Solutions", 
                desc: "Trade Crude Oil and Natural Gas with high leverage and tight spreads, capitalizing on global geopolitical shifts.",
                icon: <Flame size={24} />
              },
              { 
                title: "Industrial Metals", 
                desc: "Direct access to Base Metals including Copper, Zinc, and Aluminum to track global manufacturing demand.",
                icon: <Factory size={24} />
              },
              { 
                title: "Agriculture Desk", 
                desc: "Invest in essential food commodities like Cotton, Mentha Oil, and Spices with expert seasonal analysis.",
                icon: <Anchor size={24} />
              },
              { 
                title: "Inflation Hedging", 
                desc: "Strategically allocate capital to hard assets that historically maintain purchasing power during economic volatility.",
                icon: <Landmark size={24} />
              },
              { 
                title: "MCX Direct Feed", 
                desc: "Low-latency connectivity to Multi Commodity Exchange of India for instantaneous order matching and execution.",
                icon: <Zap size={24} />
              }
            ].map((asset, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-amber-600 bg-amber-50 mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {asset.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f66] mb-4">{asset.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base opacity-80">{asset.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commodity Dynamics - NEW */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {[
                  { title: "Inflation Hedge", desc: "Commodities like Gold have historically preserved purchasing power when fiat currencies devalue.", icon: <Coins size={20} /> },
                  { title: "Industrial Pulse", desc: "Base metals like Copper act as a leading indicator for global economic expansion and manufacturing.", icon: <Factory size={20} /> },
                  { title: "Geopolitical Alpha", desc: "Energy markets respond rapidly to global shifts, offering unique speculative and hedging opportunities.", icon: <Globe size={20} /> },
                  { title: "Supply Chain Audit", desc: "We track global inventory levels (LME, COMEX) to identify supply-demand imbalances early.", icon: <Anchor size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-amber-600/5 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001f66] mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] leading-tight">Tangible Wealth <br /> <span className="text-slate-400">Architecture.</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                In a world of digital abstraction, commodities represent the foundational reality of the global economy. They are the "hard assets" that every institutional portfolio uses for true diversification.
              </p>
              <p className="text-slate-500 leading-relaxed">
                At VS INVESTIFY, we don't just look at price charts. We analyze the underlying macro-drivers: from central bank gold reserves and OPEC+ production quotas to global weather patterns affecting agricultural yields. Our commodity desk provides the strategic bridge between physical value and digital trading.
              </p>
              <div className="p-8 rounded-[2.5rem] bg-amber-900 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-amber-200 font-bold uppercase tracking-widest text-[10px] mb-4">Market Insight</p>
                  <p className="text-xl font-medium leading-relaxed italic">"When the paper market becomes volatile, the world returns to the security of what it can touch and see."</p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <Coins size={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Education - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] mb-4">The Commodity Cycle</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Understanding the long-term trends that drive hard asset values across decades.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <h4 className="text-6xl font-black text-slate-50 mb-6 group-hover:text-amber-50 transition-colors">Phase 1</h4>
              <h3 className="text-2xl font-bold text-[#001f66] mb-4">Supply Shortage</h3>
              <p className="text-slate-500 leading-relaxed">Underinvestment in mining and exploration leads to shrinking reserves, setting the stage for the next bull run.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <h4 className="text-6xl font-black text-slate-50 mb-6 group-hover:text-amber-50 transition-colors">Phase 2</h4>
              <h3 className="text-2xl font-bold text-[#001f66] mb-4">Price Discovery</h3>
              <p className="text-slate-500 leading-relaxed">Rapid industrial growth outpaces current production, leading to sustained upward momentum in asset prices.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <h4 className="text-6xl font-black text-slate-50 mb-6 group-hover:text-amber-50 transition-colors">Phase 3</h4>
              <h3 className="text-2xl font-bold text-[#001f66] mb-4">Market Peak</h3>
              <p className="text-slate-500 leading-relaxed">High prices incentivize new production and substitution, eventually balancing the market and stabilizing values.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commodity Advisory */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-amber-900 rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Secure Commodity <br /> Strategy.</h2>
            <p className="text-amber-100/70 text-lg mb-10 leading-relaxed">
              In an era of digital volatility, commodities provide a foundational anchor for any sophisticated portfolio. Our advisors help you navigate the cyclical nature of these markets with precision-timed entries and robust exit strategies.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-amber-900 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Consult Commodity Desk <ArrowRight size={22} />
            </Link>
          </div>
          <div className="flex-1 hidden lg:block relative z-10">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="space-y-6">
                {[
                  { label: "Margin Efficiency", value: "Optimized" },
                  { label: "Research Accuracy", value: "92%" },
                  { label: "Market Access", value: "Global" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0 last:pb-0">
                    <span className="text-white/60 font-bold uppercase tracking-widest text-[10px]">{item.label}</span>
                    <span className="text-white font-black text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
