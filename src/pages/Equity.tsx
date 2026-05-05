import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart2, Shield, Zap, Globe, PieChart, ArrowRight, Layers, Search, Cpu, Target, Users, BarChart3 } from 'lucide-react';
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Institutional Desk Access</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#001f66] leading-[1] tracking-tighter">
              Equity & <br /> <span className="text-slate-400">Wealth.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
              Navigate the Indian capital markets with institutional-grade precision. From large-cap stability to high-growth mid-cap opportunities, we provide the research and execution speed required for elite wealth creation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:scale-105 transition-all flex items-center gap-3">
                Open Trading Account <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-slate-200 text-[#001f66] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">Connect with Advisor</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-3xl opacity-50 animate-pulse"></div>
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <img src={equityHero} alt="Equity Trading" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f66]/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold text-sm">Direct Exchange Feed</span>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f66] mb-6">The VS Edge in Equity</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Sophisticated trading architecture paired with deep fundamental research to give you a definitive market advantage.</p>
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
                title: "Institutional Research", 
                desc: "Gain access to deep-dive fundamental reports and technical setups usually reserved for high-net-worth desks.",
                icon: <Search size={24} />,
                color: "blue"
              },
              { 
                title: "Ultra-Low Latency", 
                desc: "Millisecond order execution with direct connectivity to NSE and BSE, minimizing slippage on high-volume trades.",
                icon: <Cpu size={24} />,
                color: "emerald"
              },
              { 
                title: "Sector Rotation Desk", 
                desc: "Stay ahead of market cycles with our proprietary sector-strength analysis and thematic investment strategies.",
                icon: <Layers size={24} />,
                color: "indigo"
              },
              { 
                title: "Advanced Portfolio Analytics", 
                desc: "Real-time risk metrics, beta tracking, and performance attribution to ensure your portfolio remains optimized.",
                icon: <BarChart2 size={24} />,
                color: "slate"
              },
              { 
                title: "Paperless Onboarding", 
                desc: "Digital e-KYC integration for instantaneous demat and trading account activation within minutes.",
                icon: <Shield size={24} />,
                color: "amber"
              },
              { 
                title: "Smart Order Routing", 
                desc: "Intelligent algorithms that scan both exchanges to find the best possible price for your buy and sell orders.",
                icon: <TrendingUp size={24} />,
                color: "red"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[#001f66] bg-slate-50 mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f66] mb-4">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base opacity-80">{feature.desc}</p>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] -z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Philosophy Section - NEW */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Quant-Driven", desc: "We use proprietary algorithms to filter 5000+ stocks based on 40+ financial parameters.", icon: <Zap size={20} /> },
                  { title: "Value Discovery", desc: "Finding diamonds in the rough before the broader market identifies their true potential.", icon: <Target size={20} /> },
                  { title: "Management Audit", desc: "We don't just read balance sheets; we analyze the track record of those leading the company.", icon: <Users size={20} /> },
                  { title: "Global Context", desc: "Mapping domestic equity performance against global macro-economic trends and capital flows.", icon: <Globe size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-[#001f66] mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] leading-tight">Our Research <br /> <span className="text-slate-400">Philosophy.</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                At VS INVESTIFY, we believe that superior returns are a result of superior information. Our research desk operates on a hybrid model that combines hard-core quantitative data with deep qualitative insights. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                We don't follow the "herd." Instead, we look for fundamental shifts in industry cycles, disruptive business models, and companies with a "moat" that protects them from competition. Our goal is to provide you with actionable intelligence that compounds over years, not days.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl italic">V</div>
                  <div>
                    <p className="text-sm font-bold text-[#001f66]">VS Quality Score</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Every stock we recommend passes a 15-point audit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - NEW */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] mb-4">Principles of Wealth Creation</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Understanding the "Why" is as important as the "What". Here is how we think about equity investing.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-6xl font-black text-slate-100 block mb-6">01</span>
                <h3 className="text-2xl font-bold text-[#001f66] mb-4">Time in Market</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Wealth isn't built by timing the market perfectly, but by the time you spend IN the market. Compounding requires patience to show its true magic.
                </p>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-primary"></div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-6xl font-black text-slate-100 block mb-6">02</span>
                <h3 className="text-2xl font-bold text-[#001f66] mb-4">Risk ≠ Volatility</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Price swings are normal. Real risk is the permanent loss of capital. We focus on business strength to ensure volatility doesn't turn into risk.
                </p>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary"></div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-6xl font-black text-slate-100 block mb-6">03</span>
                <h3 className="text-2xl font-bold text-[#001f66] mb-4">Asset Quality</h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  A stock is a piece of a business. If the business grows its earnings, the stock price eventually follows. We buy businesses, not tickers.
                </p>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Section */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#001f66] rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Personalized Equity <br /> Management.</h2>
            <p className="text-blue-100/70 text-lg mb-10 leading-relaxed">
              Every investor has a unique risk profile and financial destination. Our advisors don't just give tips; we build comprehensive equity blueprints that align with your life's ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-[#C5A059] text-[#0a1128] px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all text-center">
                Talk to Advisor
              </Link>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                <BarChart3 className="text-[#C5A059]" size={24} />
                <span className="text-white font-medium">92% Retention Rate</span>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C5A059] opacity-10 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </main>
  );
}
