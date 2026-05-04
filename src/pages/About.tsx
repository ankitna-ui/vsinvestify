import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Gem, 
  Eye, 
  ArrowRight, 
  Landmark, 
  Globe, 
  Shield, 
  ScrollText 
} from 'lucide-react';
import image1 from '../images/image1.png';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-primary-container bg-primary-fixed px-3 py-1 rounded-full">Established Excellence</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight text-editorial-contrast">Architects of Wealth Preservation.</h1>
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl mx-auto lg:mx-0">
              At VS INVESTIFY, we don't just manage assets; we construct legacies. Our philosophy is rooted in the meticulous balance of risk mitigation and aggressive growth, ensuring your financial fortress stands resilient through generations.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Link className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-base hover:scale-[1.02] active:scale-95 shadow-[0_20px_40_rgba(0,31,102,0.15)] transition-all" to="/contact">Schedule Consultation</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
              <img className="w-full h-full object-cover" src={image1} alt="Office" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden lg:block border border-surface-container-high">
              <p className="text-sm italic text-on-surface-variant leading-relaxed">"True wealth is not measured by the capital you possess, but by the freedom and security it buys for your future."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-16 md:py-24 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter">5k+</h2>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">High-Net-Worth Clients</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter">15+</h2>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Years of Market Expertise</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tighter">500Cr+</h2>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">Assets Under Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-7 bg-primary text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <Gem size={40} className="text-[#C5A059]" />
              <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
              <p className="text-base md:text-lg opacity-80 leading-relaxed">To democratize sophisticated institutional-grade investment strategies for private investors, ensuring that every portfolio we touch is optimized for long-term compounding and absolute security.</p>
            </div>
            <div className="mt-8 md:mt-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/20"></div>
              <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">Strategy First</span>
            </div>
          </div>
          <div className="lg:col-span-5 bg-surface-container-highest p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between">
            <div className="space-y-6">
              <Eye size={40} className="text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">To be the global benchmark for bespoke financial advisory, where technology meets human intuition to create the ultimate wealth preservation ecosystem.</p>
            </div>
            <div className="mt-8">
              <Link className="flex items-center gap-2 text-primary font-bold group text-sm md:text-base" to="/services">
                Explore our services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-12 bg-surface-container-low p-8 md:p-12 rounded-[2.5rem] border border-surface-container-high">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4">
                <h4 className="font-bold text-lg md:text-xl text-primary">Unrivaled Expertise</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Deep domain knowledge across Equity, Derivatives, and Commodity markets with a focus on Alpha generation.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg md:text-xl text-primary">Technology Driven</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Utilizing proprietary algorithmic tools and real-time data analytics to identify undervalued opportunities.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg md:text-xl text-primary">Bespoke Advisory</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">No two investors are alike. We craft personalized blueprints tailored to your specific liquidity needs and risk profile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wealth Ecosystem Section */}
      <section className="px-8 max-w-7xl mx-auto mb-32 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="md:col-span-2 lg:col-span-4 mb-8">
            <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-primary mb-4 leading-tight">The Wealth Ecosystem</motion.h2>
            <motion.div variants={itemVariants} className="w-20 h-1.5 bg-primary rounded-full"></motion.div>
          </div>
          
          {[
            { title: "Strategic Advisory", desc: "Institutional-grade strategies tailored for individual growth targets.", icon: Landmark },
            { title: "Global Insights", desc: "Real-time analysis of international markets to identify alpha opportunities.", icon: Globe },
            { title: "Risk Mitigation", desc: "Sophisticated hedging techniques to preserve capital in volatile markets.", icon: Shield },
            { title: "Legacy Planning", desc: "Structured blueprints for multi-generational wealth preservation.", icon: ScrollText }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/10 hover:shadow-2xl hover:bg-white transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="bg-primary-container rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to architect your wealth?</h2>
            <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">Join the ranks of our successful investors and secure your financial future today with a complimentary portfolio audit.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link className="bg-white text-primary px-10 py-5 rounded-2xl font-extrabold hover:scale-105 transition-transform" to="/contact">Schedule My Session</Link>
              <Link className="bg-primary text-white border border-white/20 px-10 py-5 rounded-2xl font-extrabold hover:bg-primary/80 transition-all" to="/demat">Open Account Now</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
