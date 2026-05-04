import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wallet, PieChart, TrendingUp, ShieldCheck, Heart, Repeat, ArrowRight } from 'lucide-react';
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">Diversified Wealth Building</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#001f66] leading-[1.05] tracking-tight">
              Curated <br /> <span className="text-slate-400">Mutual Funds.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Invest in top-performing funds tailored to your financial goals. From tax-saving ELSS to aggressive small-cap growth, we guide your compounding journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform flex items-center gap-2">
                Start SIP <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="border border-slate-200 text-[#001f66] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">Goal Planning</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img src={mutualFundsHero} alt="Mutual Funds" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funds Grid */}
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
              { title: "Smart SIP", desc: "Automate your savings with flexible Systematic Investment Plans starting as low as ₹500.", icon: <Repeat size={24} /> },
              { title: "Tax Savers (ELSS)", desc: "Save up to ₹46,800 in taxes under Section 80C while building long-term wealth.", icon: <ShieldCheck size={24} /> },
              { title: "Sector Focus", desc: "Capitalize on booming sectors like Tech, Pharma, and Infra with specialized thematic funds.", icon: <PieChart size={24} /> },
              { title: "Retirement Planning", desc: "Long-horizon wealth creation strategies to ensure a worry-free post-work life.", icon: <Heart size={24} /> },
              { title: "Portfolio Rebalancing", desc: "Expert guidance on when to switch funds to maintain your target asset allocation.", icon: <Wallet size={24} /> },
              { title: "Lumpsum Investing", icon: <TrendingUp size={24} />, desc: "Deploy your surplus capital into carefully vetted debt or equity funds for maximum alpha." }
            ].map((fund, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {fund.icon}
                </div>
                <h3 className="text-xl font-bold text-[#001f66] mb-3">{fund.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed opacity-80">{fund.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
