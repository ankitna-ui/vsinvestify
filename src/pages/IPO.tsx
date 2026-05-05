import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket, FileText, CheckCircle, Calendar, TrendingUp, HelpCircle, ArrowRight, ShieldCheck, Zap, BarChart3, Activity, Users } from 'lucide-react';
import ipoHero from '../images/ipo_hero.png';

export default function IPO() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-700">Primary Market Access</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#001f66] leading-[1] tracking-tighter">
              IPO <br /> <span className="text-slate-400">Launchpad.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
              Invest in the market leaders of tomorrow. Our IPO desk simplifies the application process for Mainboard and SME listings, providing the research depth needed to identify high-potential opportunities before they hit the secondary market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:scale-105 transition-all flex items-center gap-3">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-slate-200 text-[#001f66] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">IPO Calendar</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-purple-600/5 rounded-[4rem] blur-3xl opacity-50"></div>
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <img src={ipoHero} alt="IPO Center" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">Live Subscription</span>
                  <div className="px-2 py-1 bg-green-500 rounded text-[8px] font-black text-white">ACTIVE</div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-[10px] font-bold mb-1">Retail Segment</p>
                    <p className="text-white text-xl font-black">12.4x</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-[10px] font-bold mb-1">QIB Segment</p>
                    <p className="text-white text-xl font-black">45.8x</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary Market Edge */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f66] mb-6">Strategic Primary Access</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Position your portfolio at the genesis of growth with our streamlined IPO application and research ecosystem.</p>
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
                title: "One-Click UPI Apply", 
                desc: "Seamlessly apply for any IPO using your UPI ID. Zero paperwork, zero delays, and instantaneous blocking of funds.",
                icon: <Zap size={24} />
              },
              { 
                title: "Mainboard & SME Desk", 
                desc: "Full coverage of both mainboard giants and high-growth Small & Medium Enterprises listings.",
                icon: <Rocket size={24} />
              },
              { 
                title: "Institutional Analysis", 
                desc: "Access deep-dive pre-IPO research reports covering business models, financials, and sector valuations.",
                icon: <FileText size={24} />
              },
              { 
                title: "GMP Insights", 
                desc: "Stay updated with Grey Market Premium trends and subscription data to gauge market sentiment accurately.",
                icon: <TrendingUp size={24} />
              },
              { 
                title: "HNI Bid Management", 
                desc: "Specialized support for High Net-worth Individuals for high-value applications and financing options.",
                icon: <ShieldCheck size={24} />
              },
              { 
                title: "Listing Day Strategy", 
                desc: "Expert advice on whether to hold for the long term or capitalize on listing day gains based on market conditions.",
                icon: <BarChart3 size={24} />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-purple-600 bg-purple-50 mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f66] mb-4">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base opacity-80">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IPO Lifecycle - NEW */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {[
                  { title: "DRHP Audit", desc: "We analyze the Draft Red Herring Prospectus to understand the company's past and intended future.", icon: <FileText size={20} /> },
                  { title: "Valuation Gap", desc: "Comparing the issue price against listed peers to find potential listing-day 'money on the table'.", icon: <TrendingUp size={20} /> },
                  { title: "Promoter Quality", desc: "Investigating the track record and skin-in-the-game of the people leading the venture.", icon: <Users size={20} /> },
                  { title: "Subscription Heatmap", desc: "Real-time monitoring of institutional (QIB) demand to gauge big-money confidence.", icon: <Activity size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/5 flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] leading-tight">Genesis of <br /> <span className="text-slate-400">Growth.</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                An Initial Public Offering (IPO) is more than just a listing; it's the bridge where private innovation meets public capital. For an investor, it's the earliest opportunity to own a piece of a future giant.
              </p>
              <p className="text-slate-500 leading-relaxed">
                But not every IPO is a goldmine. Our primary market desk filters through the noise of "hype" to find "value." We look for companies with sustainable competitive advantages, clean balance sheets, and a clear roadmap for utilizing the fresh capital. We help you transition from "bidding" to "strategic allocation."
              </p>
              <div className="p-8 rounded-[2.5rem] bg-purple-900 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-purple-300 font-bold uppercase tracking-widest text-[10px] mb-4">Pro Tip</p>
                  <p className="text-xl font-medium leading-relaxed italic">"Don't just chase listing gains. The biggest wealth is built by holding great companies that the market has just discovered."</p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform">
                  <Rocket size={180} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Framework - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] mb-4">The 4-Point IPO Audit</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our internal checklist before we issue an 'Apply' rating to our clients.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Object of Issue", desc: "Is the money going into growth (Capex) or just paying off old debt? Growth is the focus." },
              { title: "Peer Valuation", desc: "Is the P/E ratio justified when compared to existing industry leaders in the market?" },
              { title: "Cash Flow Stability", desc: "Can the company generate actual cash from its operations, or is it just paper profit?" },
              { title: "Market Sentiment", desc: "Analyzing the 'Grey Market' and institutional interest to project potential demand." }
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <h4 className="text-lg font-bold text-[#001f66] mb-3">{box.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path to Listing */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-purple-900 rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative text-white">
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Expert IPO <br /> Advisory.</h2>
            <p className="text-purple-100/70 text-lg mb-10 leading-relaxed">
              Applying for an IPO is easy; choosing the right one is the challenge. Our analysts provide an unbiased 'Apply' or 'Avoid' rating for every listing, backed by rigorous financial modeling and industrial foresight.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-purple-900 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Consult IPO Desk <ArrowRight size={22} />
            </Link>
          </div>
          <div className="flex-1 hidden lg:block relative z-10">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="space-y-6">
                {[
                  { label: "Research Reports", value: "Available" },
                  { label: "Application Time", value: "<1 Min" },
                  { label: "SME Listing Desk", value: "Dedicated" }
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
