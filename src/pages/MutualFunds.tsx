import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wallet, PieChart, TrendingUp, ShieldCheck, Heart, Repeat, ArrowRight, Calculator, Landmark, BarChart2, CheckCircle, Target } from 'lucide-react';
import mutualFundsHero from '../images/mutual_funds_hero.png';

export default function MutualFunds() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">Curated Asset Management</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#001f66] leading-[1] tracking-tighter">
              Wealth <br /> <span className="text-slate-400">Builder.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
              Unlock the potential of professional asset management. From high-alpha equity funds to stable debt instruments, we curate a spectrum of mutual funds designed to compound your wealth across market cycles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:scale-105 transition-all flex items-center gap-3">
                Start SIP Journey <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-slate-200 text-[#001f66] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">Goal Planning</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-3xl opacity-50"></div>
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <img src={mutualFundsHero} alt="Mutual Funds" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f66]/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex-1">
                  <p className="text-[#001f66] text-[10px] font-bold uppercase tracking-widest opacity-60">Avg. 5Y Return</p>
                  <p className="text-[#001f66] text-xl font-black">15.4%</p>
                </div>
                <div className="bg-[#C5A059]/90 backdrop-blur-md p-4 rounded-2xl border border-[#C5A059]/20 flex-1">
                  <p className="text-[#0a1128] text-[10px] font-bold uppercase tracking-widest opacity-60">Active SIPs</p>
                  <p className="text-[#0a1128] text-xl font-black">2.4k+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Investing */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f66] mb-6">Expert Portfolio Curation</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Move beyond generic investing. We analyze thousands of fund parameters to find the perfect fit for your specific life goals.</p>
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
                title: "Goal-Based Allocation", 
                desc: "Whether it's for retirement, education, or a home purchase, we align fund selections with your specific timeline.",
                icon: <Target size={24} />
              },
              { 
                title: "Tax Optimization", 
                desc: "Strategic use of ELSS and other instruments to maximize your post-tax returns under current regulations.",
                icon: <ShieldCheck size={24} />
              },
              { 
                title: "Hybrid Risk Mitigation", 
                desc: "Balance volatility with smart-beta and hybrid funds that allocate across equity, debt, and arbitrage segments.",
                icon: <PieChart size={24} />
              },
              { 
                title: "Portfolio Rebalancing", 
                desc: "Automatic and expert-led shifts in your fund holdings to maintain your target risk-reward ratio.",
                icon: <Repeat size={24} />
              },
              { 
                title: "Direct Fund Access", 
                desc: "Transparent access to leading AMCs with comprehensive tracking and zero-hassle digital execution.",
                icon: <Landmark size={24} />
              },
              { 
                title: "Alpha Generation", 
                desc: "Exposure to high-growth thematic and mid-cap funds curated by our top-tier research analysts.",
                icon: <TrendingUp size={24} />
              }
            ].map((fund, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 bg-blue-50 mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {fund.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f66] mb-4">{fund.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base opacity-80">{fund.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compounding Education - NEW */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl"></div>
                <div className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-2xl shadow-xl shadow-blue-900/20">SIP</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#001f66]">Systematic Wealth</h4>
                      <p className="text-sm text-slate-500">The discipline of regular investing.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">Investment Term</span>
                      <span className="text-[#001f66] font-bold">15 Years</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-primary"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 font-medium">Wealth Multiplier</span>
                      <span className="text-emerald-600 font-bold">5.4x Expected</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[54%] bg-emerald-500"></div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    *Based on historical 12% CAGR. Mutual fund investments are subject to market risks.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] leading-tight">The Compound <br /> <span className="text-slate-400">Effect.</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Albert Einstein called compounding the "eighth wonder of the world." In mutual funds, this power is harnessed by reinvesting your gains to generate their own earnings. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our philosophy centers on "Time in the Market" rather than "Timing the Market." By starting early and maintaining a systematic approach, even modest monthly contributions can blossom into significant corpuses over 10-15 years. We help you design SIPs that act as a silent engine for your financial freedom.
              </p>
              <div className="pt-4 flex gap-4">
                <div className="px-6 py-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={14} /> Zero Paperwork
                </div>
                <div className="px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={14} /> Expert Curation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Framework - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] mb-4">Goal-Based Framework</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We don't just sell funds; we build portfolios that solve for your life's key milestones.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Short Term (< 3 Years)", 
                focus: "Capital Preservation",
                desc: "Focus on liquid and ultra-short term debt funds to ensure your money is safe and accessible for immediate needs.",
                icon: <Wallet className="text-blue-600" /> 
              },
              { 
                title: "Medium Term (3-7 Years)", 
                focus: "Balanced Growth",
                desc: "Strategic allocation to aggressive hybrid and large-cap funds to beat inflation while managing volatility.",
                icon: <Repeat className="text-purple-600" /> 
              },
              { 
                title: "Long Term (7+ Years)", 
                focus: "Wealth Creation",
                desc: "High-alpha exposure to mid-cap, small-cap, and thematic funds to maximize long-term compounding benefits.",
                icon: <TrendingUp className="text-emerald-600" /> 
              }
            ].map((goal, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {goal.icon}
                </div>
                <h4 className="text-amber-600 font-bold uppercase tracking-widest text-[10px] mb-2">{goal.focus}</h4>
                <h3 className="text-2xl font-bold text-[#001f66] mb-4">{goal.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIP Calculator CTA */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#001f66] rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Personalized Fund <br /> Advisory.</h2>
            <p className="text-blue-100/70 text-lg mb-10 leading-relaxed">
              Don't just invest—strategize. Our mutual fund advisors provide the institutional-grade insights needed to navigate the complex world of AMCs and fund categories, ensuring every rupee is working toward your future.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C5A059] text-[#0a1128] px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Get Fund Review <ArrowRight size={22} />
            </Link>
          </div>
          <div className="flex-1 hidden lg:block relative z-10">
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Asset Allocation", icon: <PieChart size={20} /> },
                { label: "Expense Ratio Analysis", icon: <Calculator size={20} /> },
                { label: "Performance Attribution", icon: <BarChart2 size={20} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="text-[#C5A059]">{item.icon}</div>
                  <span className="text-white font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
