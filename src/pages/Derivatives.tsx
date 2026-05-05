import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Activity, Layers, Target, Zap, Shield, TrendingDown, ArrowRight, BarChart3, LineChart, ShieldAlert } from 'lucide-react';
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
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">Sophisticated F&O Desk</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#001f66] leading-[1] tracking-tighter">
              Futures & <br /> <span className="text-slate-400">Options.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
              Master market volatility with our advanced derivatives platform. Whether you are hedging a multi-crore portfolio or executing high-precision directional spreads, our infrastructure ensures institutional-grade stability and speed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:scale-105 transition-all flex items-center gap-3">
                Activate F&O Segment <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-slate-200 text-[#001f66] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">Strategy Builder</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/5 rounded-[4rem] blur-3xl opacity-50"></div>
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <img src={derivativesHero} alt="Derivatives Trading" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001f66]/60 to-transparent"></div>
              <div className="absolute top-8 right-8 flex gap-2">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">Low Latency</div>
                <div className="bg-amber-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/30 text-amber-500 text-[10px] font-bold uppercase tracking-widest">High Margin</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f66] mb-6">Strategic F&O Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Sophisticated instruments for professional traders to hedge, speculate, and manage capital with high precision.</p>
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
                title: "Delta Neutral Strategies", 
                desc: "Expert guidance on building market-neutral portfolios using iron condors, butterflies, and calendar spreads.",
                icon: <BarChart3 size={24} />,
                color: "blue"
              },
              { 
                title: "Portfolio Hedging", 
                desc: "Sophisticated risk mitigation tools to protect your long-term equity holdings from systemic market downturns.",
                icon: <Shield size={24} />,
                color: "emerald"
              },
              { 
                title: "Real-time Greeks", 
                desc: "Access live Delta, Gamma, Theta, and Vega metrics for every contract to manage your portfolio's sensitivity.",
                icon: <Activity size={24} />,
                color: "indigo"
              },
              { 
                title: "Advanced Payoff Charts", 
                desc: "Visualize your maximum profit and loss potential across various price points before executing any trade.",
                icon: <LineChart size={24} />,
                color: "slate"
              },
              { 
                title: "Stop-Loss Automation", 
                desc: "Rule-based order execution systems to ensure discipline and prevent catastrophic capital erosion.",
                icon: <ShieldAlert size={24} />,
                color: "amber"
              },
              { 
                title: "Basket Trading", 
                desc: "Execute complex multi-leg option strategies with a single click, ensuring simultaneous fill on all components.",
                icon: <Layers size={24} />,
                color: "red"
              }
            ].map((strategy, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-amber-600 bg-amber-50 mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {strategy.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f66] mb-4">{strategy.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base opacity-80">{strategy.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategy Pillars Section - NEW */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="p-8 rounded-[2rem] bg-amber-50/50 border border-amber-100 hover:shadow-xl transition-all">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 font-bold">01</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#001f66] mb-2">Directional Capitalization</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">Using futures to gain exposure to market moves with high capital efficiency. Ideal for trend-following strategies with defined exit points.</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-[2rem] bg-blue-50/50 border border-blue-100 hover:shadow-xl transition-all">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">02</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#001f66] mb-2">Income Generation</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">Systematic option writing (selling) to collect premiums. Strategies like Covered Calls and Cash-Secured Puts to generate consistent yield.</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-[2rem] bg-indigo-50/50 border border-indigo-100 hover:shadow-xl transition-all">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 font-bold">03</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#001f66] mb-2">Tail-Risk Protection</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">Using long puts as insurance. A fundamental requirement for institutional-grade portfolio management to survive black-swan events.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] leading-tight">Navigating <br /> <span className="text-slate-400">Volatility.</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Derivatives aren't just for "gambling" on price moves. In the hands of a professional, they are precision instruments for risk management. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                Our approach to F&O is centered around the math of probabilities. We help you understand that every option contract has a "lifecycle" governed by time decay (Theta) and volatility (Vega). By mastering these "Greeks," you transition from a speculator to a strategic market participant.
              </p>
              <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <Shield size={80} />
                </div>
                <h5 className="text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-2">The Golden Rule</h5>
                <p className="text-lg font-medium leading-relaxed italic">"Live to trade another day. Capital preservation is the only strategy that matters in the long run."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Framework - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] mb-4">Risk-First Trading Framework</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Master the mechanics of professional derivatives trading before deploying capital.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Margin Mastery", desc: "Understanding how leverage works and maintaining sufficient 'buffer' to avoid liquidation." },
              { title: "Theta Decay", desc: "Learning how time works for you when selling and against you when buying options." },
              { title: "Volatility Skew", desc: "Analyzing how the market prices risk differently across various strike prices." },
              { title: "Position Sizing", desc: "The mathematical science of ensuring no single trade can ruin your entire portfolio." }
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
                <h4 className="text-lg font-bold text-[#001f66] mb-3">{box.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{box.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                  Expert Insight <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Advisory */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Professional Risk <br /> Architecture.</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Derivatives are powerful tools that require respect and strategy. Our F&O desk provides the high-precision data and advisory support needed to navigate these markets safely. We focus on risk-first capital deployment to ensure longevity in your trading career.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-[#C5A059] text-[#0a1128] px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all text-center">
                Talk to F&O Expert
              </Link>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                <Target className="text-[#C5A059]" size={24} />
                <span className="text-white font-medium">Precision Strategy Building</span>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
        </div>
      </section>
    </main>
  );
}
