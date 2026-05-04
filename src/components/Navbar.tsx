import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, TrendingUp, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isUnlisted = location.pathname === '/unlisted';

  // Handle scroll for floating effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Unlisted Share', path: '/unlisted', icon: TrendingUp },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
      scrolled 
        ? (isUnlisted ? 'py-3 bg-[#0a1128]/95 border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.4)]' : 'py-3 bg-white/90 border-b border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)]') 
        : (isUnlisted ? 'py-6 bg-transparent' : 'py-6 bg-white/40')
    } backdrop-blur-2xl`}>
      <div className="flex justify-between items-center px-6 md:px-12 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center relative z-[110] group">
          <div className="relative">
            <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1EHq6iGOjfeXHjP2CAEXHMLMgB7QBNSxY" 
              alt="VS INVESTIFY Logo" 
              className={`transition-all duration-500 relative z-10 ${scrolled ? 'h-9 md:h-11' : 'h-11 md:h-14'} w-auto object-contain group-hover:scale-110`}
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 font-['Inter'] font-bold text-[11px] uppercase tracking-[0.2em] antialiased">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              className={`${location.pathname === link.path ? (isUnlisted ? 'text-[#C5A059]' : 'text-[#001f66]') : (isUnlisted ? 'text-slate-400' : 'text-slate-500')} hover:text-[#001f66] transition-all duration-300 relative group py-2`} 
              to={link.path}
            >
              <span className="relative z-10">{link.name}</span>
              <motion.span 
                className={`absolute bottom-0 left-0 w-0 h-[3px] rounded-full ${isUnlisted ? 'bg-[#C5A059]' : 'bg-[#001f66]'} transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}
                initial={false}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 relative z-[110]">
          <Link 
            className={`${isUnlisted ? 'bg-gradient-to-r from-[#C5A059] to-[#B08B44] text-[#0a1128] shadow-[#C5A059]/30' : 'bg-[#001f66] text-white shadow-[#001f66]/20'} hidden lg:flex items-center gap-3 px-9 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.15em] hover:scale-[1.05] hover:-translate-y-1 transition-all duration-500 cursor-pointer active:scale-95 shadow-2xl overflow-hidden group/btn relative`} 
            to="/demat"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-[-20deg]"></div>
            <span className="relative z-10">Open Account</span>
            <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3.5 rounded-2xl transition-all ${isUnlisted ? 'text-white bg-white/5 hover:bg-white/10' : 'text-[#001f66] bg-slate-100 hover:bg-slate-200'} active:scale-90 shadow-sm border ${isUnlisted ? 'border-white/10' : 'border-slate-200'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xl md:hidden z-[101]" 
            />
            
            <motion.div 
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`fixed top-0 left-0 w-full h-fit max-h-[90vh] ${isUnlisted ? 'bg-[#0a1128]/95 text-white' : 'bg-white/95 text-slate-900'} md:hidden z-[105] shadow-2xl rounded-b-[3rem] flex flex-col overflow-hidden border-b ${isUnlisted ? 'border-white/10' : 'border-slate-100'}`}
            >
              <div className="flex flex-col pt-28 pb-12 px-8 relative z-10">
                <div className="grid grid-cols-1 gap-3">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 ${isUnlisted ? 'text-slate-500' : 'text-slate-400'}`}>Main Menu</p>
                  {navLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Link 
                          className={`flex items-center gap-5 py-4 px-5 rounded-2xl transition-all ${location.pathname === link.path ? (isUnlisted ? 'bg-white/10 text-[#C5A059]' : 'bg-slate-100 text-[#001f66]') : (isUnlisted ? 'hover:bg-white/5' : 'hover:bg-slate-50')}`} 
                          to={link.path}
                        >
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${location.pathname === link.path ? (isUnlisted ? 'bg-[#C5A059] text-[#0a1128] shadow-lg shadow-[#C5A059]/20' : 'bg-[#001f66] text-white shadow-lg shadow-[#001f66]/20') : (isUnlisted ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-400')}`}>
                            <Icon size={20} />
                          </div>
                          <span className="text-lg font-bold tracking-tight">{link.name}</span>
                          {location.pathname === link.path && (
                            <motion.div layoutId="active-nav-dot" className={`ml-auto w-2 h-2 rounded-full ${isUnlisted ? 'bg-[#C5A059]' : 'bg-[#001f66]'}`} />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="mt-10 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      className={`w-full ${isUnlisted ? 'bg-[#C5A059] text-[#0a1128]' : 'bg-[#001f66] text-white'} py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-all group`} 
                      to="/demat"
                    >
                      Open Demat Account
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`pt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${isUnlisted ? 'border-white/10' : 'border-slate-100'}`}
                  >
                    <div className="flex flex-col gap-3">
                      <a href="tel:+919660039402" className="flex items-center gap-3 group">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isUnlisted ? 'bg-white/5' : 'bg-slate-100'} group-hover:scale-110 transition-transform`}>
                          <Phone size={14} className="text-[#C5A059]" />
                        </div>
                        <span className={`text-sm font-bold ${isUnlisted ? 'text-slate-300' : 'text-slate-600'}`}>+91 96600 39402</span>
                      </a>
                      <a href="mailto:info@vsinvestify.in" className="flex items-center gap-3 group">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isUnlisted ? 'bg-white/5' : 'bg-slate-100'} group-hover:scale-110 transition-transform`}>
                          <Mail size={14} className="text-[#C5A059]" />
                        </div>
                        <span className={`text-sm font-bold ${isUnlisted ? 'text-slate-300' : 'text-slate-600'}`}>info@vsinvestify.in</span>
                      </a>
                    </div>

                    <div className="flex gap-4">
                      {socialLinks.map((social, i) => {
                        const SocialIcon = social.icon;
                        return (
                          <a 
                            key={i} 
                            href={social.href} 
                            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${isUnlisted ? 'bg-white/5 hover:bg-[#C5A059] hover:text-[#0a1128]' : 'bg-slate-100 hover:bg-[#001f66] hover:text-white'}`}
                          >
                            <SocialIcon size={20} />
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
