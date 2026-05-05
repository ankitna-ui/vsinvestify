import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FileText, CircleDollarSign, ShieldCheck, ArrowRight, BarChart3, Landmark, ShieldAlert, History } from 'lucide-react';

export default function NCD() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Fixed Income Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#001f66] leading-[1] tracking-tighter">
              NCD <br /> <span className="text-slate-400">Wealth.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
              Secure your future with stable, high-yield fixed income solutions. Non-Convertible Debentures (NCDs) provide a powerful alternative to traditional bank deposits, offering superior returns with calculated, asset-backed security.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-900/30 hover:scale-105 transition-all flex items-center gap-3">
                Invest in NCDs <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="border-2 border-slate-200 text-[#001f66] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">Consult Income Expert</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-3xl opacity-50"></div>
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative z-10">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw8NVkrRRZfGHs4G33fPa3NA0SBjahuUXogbqP-zZoy40L95yJpLbmhmsW1x0C36WE8AEHsv4-FxVylokirfDpZaqVrUDT8g14Y5CtCWDJyQI-hIE1yvbf1wH8ZM0YZYtgKf7iCOe7seMfUSEIfBoRQq3bEkmO0ynZdc0dC1u0Kv7QC7S1wNlRTh8Zeku3oc-r1CkTRH8Zusyj7OPYzwSZxOIqo2t4Z8CmpeuCWKzGSesuxhUR4BtMQW3gD5dXKfO9-zRx_Ku4Sxc" alt="NCD Investments" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f66]/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-[10px] font-bold uppercase mb-1">Average Yield</p>
                    <p className="text-white text-2xl font-black">9.5% - 12%</p>
                  </div>
                  <ShieldCheck className="text-white opacity-40" size={40} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stability Advantages */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f66] mb-6">The Safety of Fixed Income</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Curated debt instruments that provide predictable cash flows while maintaining a rigorous focus on principal protection.</p>
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
                title: "Secured Debentures", 
                desc: "Invest in NCDs backed by the tangible assets of the issuing company, providing an extra layer of capital security.",
                icon: <ShieldCheck size={24} />
              },
              { 
                title: "High Yield Alpha", 
                desc: "Capture superior returns that typically outperform traditional fixed deposits and savings accounts.",
                icon: <CircleDollarSign size={24} />
              },
              { 
                title: "Credit Rating Audit", 
                desc: "We exclusively list NCDs with high ratings from agencies like CRISIL, ICRA, and CARE after internal due diligence.",
                icon: <BarChart3 size={24} />
              },
              { 
                title: "Regular Cash Flow", 
                desc: "Choose between monthly, quarterly, or annual interest payouts to supplement your regular income.",
                icon: <History size={24} />
              },
              { 
                title: "Portfolio Stability", 
                desc: "Debt instruments provide the necessary ballast to your portfolio, reducing overall volatility during equity downturns.",
                icon: <Landmark size={24} />
              },
              { 
                title: "Asset Backed", 
                desc: "Direct claim on specific corporate assets ensures that your investment has real-world collateral behind it.",
                icon: <ShieldAlert size={24} />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-primary bg-slate-50 mb-8 group-hover:scale-110 transition-transform duration-500`}>
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

      {/* Fixed Income Education - NEW */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {[
                  { title: "AAA / AA Rated", desc: "Highest safety. Companies with strong balance sheets and minimal risk of default on interest or principal.", color: "bg-emerald-500" },
                  { title: "A Rated", desc: "High safety, though more susceptible to adverse economic conditions than higher-rated peers.", color: "bg-blue-500" },
                  { title: "BBB Rated", desc: "Moderate safety. Considered 'investment grade' but carries higher interest rates to compensate for risk.", color: "bg-amber-500" }
                ].map((rating, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-6 hover:bg-white hover:shadow-xl transition-all">
                    <div className={`w-3 h-12 rounded-full ${rating.color} shrink-0`}></div>
                    <div>
                      <h4 className="font-bold text-[#001f66] mb-1">{rating.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{rating.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] leading-tight">Understanding <br /> <span className="text-slate-400">Credit Risk.</span></h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                In the world of fixed income, the interest rate (yield) is a direct reflection of risk. Higher returns often come with higher credit vulnerability. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                At VS INVESTIFY, we prioritize your principal. We help you decode the "alphabet soup" of credit ratings so you know exactly where your money is going. By diversifying across different issuers and tenures, we help you build a "Fixed Income Ladder" that provides regular liquidity while maximizing total yield.
              </p>
              <div className="p-8 rounded-[2.5rem] bg-slate-100 border border-slate-200 relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4">Financial Guardrail</p>
                  <p className="text-xl font-medium leading-relaxed italic text-[#001f66]">"Don't chase the highest yield blindly. A 2% extra return isn't worth a 100% loss of capital."</p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Framework - NEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#001f66] mb-4">Income Optimization Strategies</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">How to professionally manage your debt portfolio for consistent cash flow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#001f66] mb-4">The Laddering Effect</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Staggering your NCD investments across 1, 3, and 5-year tenures to ensure regular liquidity and protection against interest rate shifts.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#001f66] mb-4">Cumulative vs Payout</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Choosing 'Cumulative' for wealth compounding (interest on interest) or 'Payout' for supplemental monthly/annual income.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-[#001f66] mb-4">Tax Efficiency</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Strategic allocation to NCDs based on your tax bracket to maximize your 'net-of-tax' take-home returns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Income Advisory */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#001f66] rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative text-white">
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Personalized Yield <br /> Management.</h2>
            <p className="text-blue-100/70 text-lg mb-10 leading-relaxed">
              In a fluctuating interest rate environment, choosing the right NCD requires a deep understanding of credit cycles and corporate health. Our fixed-income desk provides the clarity needed to build a resilient and high-yielding portfolio.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C5A059] text-[#0a1128] px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Talk to Income Advisor <ArrowRight size={22} />
            </Link>
          </div>
          <div className="flex-1 hidden lg:block relative z-10">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="space-y-6">
                {[
                  { label: "Minimum Rating", value: "A+ Rated" },
                  { label: "Settlement", value: "T+2 Days" },
                  { label: "Principal Safety", value: "High" }
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
