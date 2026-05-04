import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket, FileText, CheckCircle, Calendar, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-700">New Market Listings</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#001f66] leading-[1.05] tracking-tight">
              IPO <br /> <span className="text-slate-400">Center.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Get priority access to the most anticipated public offerings. We simplify the application process so you can invest in the market leaders of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/demat" className="bg-[#001f66] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform flex items-center gap-2">
                Apply for IPO <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="border border-slate-200 text-[#001f66] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">Upcoming List</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img src={ipoHero} alt="IPO Center" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* IPO Grid */}
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
              { title: "One-Click Application", desc: "Apply for any IPO in seconds using UPI. Seamless, paperless, and instantaneous.", icon: <CheckCircle size={24} /> },
              { title: "In-depth Analysis", desc: "Access comprehensive research reports on every mainboard and SME IPO.", icon: <FileText size={24} /> },
              { title: "SME Opportunities", desc: "Unlock growth by investing in high-potential Small and Medium Enterprises.", icon: <Rocket size={24} /> },
              { title: "Live Tracking", desc: "Real-time subscription data and grey market premium (GMP) insights.", icon: <TrendingUp size={24} /> },
              { title: "IPO Calendar", desc: "Stay ahead with our curated calendar of upcoming, active, and recent listings.", icon: <Calendar size={24} /> },
              { title: "Expert Guidance", desc: "Not sure whether to apply? Get 'Apply' or 'Avoid' ratings from our analysts.", icon: <HelpCircle size={24} /> }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
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
