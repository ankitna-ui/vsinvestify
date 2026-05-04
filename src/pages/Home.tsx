import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  Wallet, 
  Rocket, 
  Zap, 
  Target, 
  Crown,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Navigation
} from 'lucide-react';

import axisLogo from '../images/Axis-removebg-preview.png';
import financialLogo from '../images/Financial-removebg-preview.png';
import licLogo from '../images/LIC-removebg-preview.png';
import maxLogo from '../images/max-removebg-preview.png';
import nuvamaLogo from '../images/images.png';

export default function Home() {
  const [candles, setCandles] = useState(() => 
    [...Array(15)].map(() => ({
      height: 20 + Math.random() * 70,
      isGreen: Math.random() > 0.5
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCandles(prev => {
        const next = [...prev.slice(1)];
        const lastCandle = prev[prev.length - 1];
        const change = (Math.random() - 0.5) * 20;
        let newHeight = lastCandle.height + change;
        if (newHeight < 15) newHeight = 15 + Math.random() * 10;
        if (newHeight > 95) newHeight = 95 - Math.random() * 10;
        next.push({
          height: newHeight,
          isGreen: newHeight > lastCandle.height
        });
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block py-1 px-4 rounded-full bg-surface-container-low text-primary font-bold text-[10px] md:text-xs tracking-widest uppercase mb-6">Premium Wealth Management</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
              Invest Smart. <br className="hidden sm:block" />Trade with <span className="text-on-primary-container">Confidence.</span>
            </h1>
            <p className="text-base md:text-lg text-on-secondary-container mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Equity, IPOs, Mutual Funds & Wealth Solutions – All in One Platform. Expert-led strategies for the modern investor.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2" to="/demat">
                Open Demat Account
                <TrendingUp size={20} />
              </Link>
              <Link className="bg-surface-container-low text-primary px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-surface-container-high transition-all flex items-center justify-center gap-2" to="/contact">
                Get Free Consultation
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=11" alt="Investor" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=12" alt="Trader" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=13" alt="Client" />
              </div>
              <p className="text-sm font-medium text-on-surface-variant">Trusted by 10k+ Active Investors</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
            <div className="relative bg-[#0a0c14] p-6 rounded-3xl shadow-[0_40px_80px_rgba(0,31,102,0.25)] border border-white/10 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">REAL-TIME DATA FEED</span>
                  <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[8px] font-bold text-green-500 uppercase">LIVE</span>
                  </div>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-1 relative px-2 mb-8">
                <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                  <div className="w-full h-px bg-white"></div>
                  <div className="w-full h-px bg-white"></div>
                  <div className="w-full h-px bg-white"></div>
                  <div className="w-full h-px bg-white"></div>
                </div>
                {candles.map((candle, i) => (
                  <div 
                    key={i} 
                    className={`candle ${candle.isGreen ? 'neon-green' : 'neon-red'} transition-all duration-500 ease-in-out`} 
                    style={{ height: `${candle.height}%` }}
                  ></div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[9px] font-bold text-white/40 uppercase mb-1">Portfolio Balance</p>
                  <p className="text-lg font-extrabold text-white">₹12.4L</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[9px] font-bold text-white/40 uppercase mb-1">Today's P&L</p>
                  <p className="text-lg font-extrabold text-emerald-400">+₹18,240</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[9px] font-bold text-white/40 uppercase mb-1">Open Trades</p>
                  <p className="text-lg font-extrabold text-white">08</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Ticker Stack */}
      <div className="w-full bg-white border-y border-slate-100 overflow-hidden">
        {/* Row 1: Major Indices */}
        <div className="bg-slate-50/50 py-2 border-b border-slate-100 overflow-hidden whitespace-nowrap">
          <div className="flex items-center space-x-12 animate-marquee">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">NIFTY 50</span><span className="text-xs font-bold text-primary">22,419.55</span><span className="text-[10px] text-emerald-600 font-bold">+0.45% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">SENSEX</span><span className="text-xs font-bold text-primary">73,876.82</span><span className="text-[10px] text-emerald-600 font-bold">+0.38% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">BANK NIFTY</span><span className="text-xs font-bold text-red-600">47,214.10</span><span className="text-[10px] text-red-600 font-bold">-0.12% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">NIFTY IT</span><span className="text-xs font-bold text-primary">36,120.45</span><span className="text-[10px] text-emerald-600 font-bold">+1.24% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">NIFTY AUTO</span><span className="text-xs font-bold text-primary">21,450.20</span><span className="text-[10px] text-emerald-600 font-bold">+0.85% ▲</span></div>
            </div>
            <div className="flex items-center gap-12" aria-hidden="true">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">NIFTY 50</span><span className="text-xs font-bold text-primary">22,419.55</span><span className="text-[10px] text-emerald-600 font-bold">+0.45% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">SENSEX</span><span className="text-xs font-bold text-primary">73,876.82</span><span className="text-[10px] text-emerald-600 font-bold">+0.38% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">BANK NIFTY</span><span className="text-xs font-bold text-red-600">47,214.10</span><span className="text-[10px] text-red-600 font-bold">-0.12% ▼</span></div>
            </div>
          </div>
        </div>

        {/* Row 2: Top Stocks (Reverse Direction) */}
        <div className="bg-white py-2 border-b border-slate-100 overflow-hidden whitespace-nowrap">
          <div className="flex items-center space-x-12 animate-marquee-reverse">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">RELIANCE</span><span className="text-xs font-bold text-primary">2,984.50</span><span className="text-[10px] text-emerald-600 font-bold">+2.15% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">HDFC BANK</span><span className="text-xs font-bold text-red-600">1,425.20</span><span className="text-[10px] text-red-600 font-bold">-0.85% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">TCS</span><span className="text-xs font-bold text-primary">4,120.15</span><span className="text-[10px] text-emerald-600 font-bold">+0.45% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">INFY</span><span className="text-xs font-bold text-red-600">1,512.40</span><span className="text-[10px] text-red-600 font-bold">-1.20% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">ICICI BANK</span><span className="text-xs font-bold text-primary">1,085.60</span><span className="text-[10px] text-emerald-600 font-bold">+0.95% ▲</span></div>
            </div>
            <div className="flex items-center gap-12" aria-hidden="true">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">RELIANCE</span><span className="text-xs font-bold text-primary">2,984.50</span><span className="text-[10px] text-emerald-600 font-bold">+2.15% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">HDFC BANK</span><span className="text-xs font-bold text-red-600">1,425.20</span><span className="text-[10px] text-red-600 font-bold">-0.85% ▼</span></div>
            </div>
          </div>
        </div>

        {/* Row 3: Sectoral & Commodities */}
        <div className="bg-slate-50/50 py-2 border-b border-slate-100 overflow-hidden whitespace-nowrap">
          <div className="flex items-center space-x-12 animate-marquee-slow">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">GOLD</span><span className="text-xs font-bold text-[#C5A059]">72,450</span><span className="text-[10px] text-emerald-600 font-bold">+0.15% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">SILVER</span><span className="text-xs font-bold text-slate-400">91,200</span><span className="text-[10px] text-red-600 font-bold">-0.45% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">USD/INR</span><span className="text-xs font-bold text-primary">83.42</span><span className="text-[10px] text-emerald-600 font-bold">+0.05% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">CRUDE OIL</span><span className="text-xs font-bold text-primary">6,840</span><span className="text-[10px] text-red-600 font-bold">-1.15% ▼</span></div>
            </div>
            <div className="flex items-center gap-12" aria-hidden="true">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">GOLD</span><span className="text-xs font-bold text-[#C5A059]">72,450</span><span className="text-[10px] text-emerald-600 font-bold">+0.15% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">SILVER</span><span className="text-xs font-bold text-slate-400">91,200</span><span className="text-[10px] text-red-600 font-bold">-0.45% ▼</span></div>
            </div>
          </div>
        </div>

        {/* Row 4: Global Markets */}
        <div className="bg-white py-2 border-b border-slate-100 overflow-hidden whitespace-nowrap">
          <div className="flex items-center space-x-12 animate-marquee-reverse-slow">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">DOW JONES</span><span className="text-xs font-bold text-primary">39,127.14</span><span className="text-[10px] text-emerald-600 font-bold">+0.12% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">NASDAQ</span><span className="text-xs font-bold text-primary">16,277.94</span><span className="text-[10px] text-emerald-600 font-bold">+0.23% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">NIKKEI 225</span><span className="text-xs font-bold text-red-600">38,992.08</span><span className="text-[10px] text-red-600 font-bold">-0.97% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">DAX</span><span className="text-xs font-bold text-primary">18,175.04</span><span className="text-[10px] text-emerald-600 font-bold">+0.06% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">FTSE 100</span><span className="text-xs font-bold text-primary">7,975.89</span><span className="text-[10px] text-emerald-600 font-bold">+0.48% ▲</span></div>
            </div>
            <div className="flex items-center gap-12" aria-hidden="true">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">DOW JONES</span><span className="text-xs font-bold text-primary">39,127.14</span><span className="text-[10px] text-emerald-600 font-bold">+0.12% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-slate-500">NASDAQ</span><span className="text-xs font-bold text-primary">16,277.94</span><span className="text-[10px] text-emerald-600 font-bold">+0.23% ▲</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <section className="py-12 md:py-16 bg-surface-container-low/30 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-8 md:mb-10">Strategic Partners & Exchanges</p>
          <div className="flex flex-nowrap justify-center items-center gap-4 md:gap-8 lg:gap-10 overflow-x-auto py-4 no-scrollbar">
            <div className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer group w-28 md:w-40 h-10 md:h-16">
              <img className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500" src={nuvamaLogo} alt="Nuvama Wealth" />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center hover:scale-125 transition-all duration-500 cursor-pointer group w-36 md:w-56 h-14 md:h-24">
              <img className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500" src={axisLogo} alt="Axis Securities" />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center hover:scale-125 transition-all duration-500 cursor-pointer group w-36 md:w-56 h-14 md:h-24">
              <img className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500" src={licLogo} alt="LIC Insurance" />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center hover:scale-125 transition-all duration-500 cursor-pointer group w-36 md:w-56 h-14 md:h-24">
              <img className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500" src={maxLogo} alt="Max Bupa" />
            </div>
            <div className="flex-shrink-0 flex items-center justify-center hover:scale-125 transition-all duration-500 cursor-pointer group w-36 md:w-56 h-14 md:h-24">
              <img className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500" src={financialLogo} alt="JM Financial" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">Diversify Your Wealth</h2>
          <p className="text-on-secondary-container max-w-xl mx-auto lg:mx-0">From traditional equity to high-yield unlisted shares, we provide the tools you need to grow your capital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <Link className="md:col-span-2 lg:col-span-2 group relative overflow-hidden bg-surface-container-low rounded-[2rem] p-8 md:p-10 hover:scale-[1.01] transition-all" to="/equity">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Equity & Stocks</h3>
                <p className="text-sm md:text-base text-slate-500 max-w-md">Access direct equity markets with real-time data, expert research, and seamless execution.</p>
              </div>
              <div className="mt-8 flex items-center text-primary font-bold gap-2">
                Explore Markets <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link className="bg-slate-50 rounded-[2rem] p-8 md:p-10 group hover:bg-primary transition-all duration-300" to="/mutual-funds">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
              <Wallet size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-white mb-4">Mutual Funds</h3>
            <p className="text-slate-500 group-hover:text-white/80 mb-6 text-sm">Invest in top-performing schemes tailored to your goals.</p>
            <div className="flex items-center text-primary group-hover:text-white font-bold gap-2">
              Start SIP <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 group shadow-sm hover:shadow-xl transition-all" to="/derivatives">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Derivatives</h3>
            <p className="text-slate-500 mb-6 text-sm">Hedge and trade with sophisticated F&O strategies.</p>
            <div className="flex items-center text-primary font-bold gap-2">
              Trade F&O <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link className="bg-amber-50 rounded-[2rem] p-8 md:p-10 group hover:bg-amber-100 transition-all" to="/commodity">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-amber-600 mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Commodity</h3>
            <p className="text-slate-500 mb-6 text-sm">Trade Gold, Silver, and Energy assets securely.</p>
            <div className="flex items-center text-primary font-bold gap-2">
              Trade MCX <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link className="bg-purple-50 rounded-[2rem] p-8 md:p-10 group hover:bg-purple-100 transition-all" to="/ipo">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-6">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">IPO Center</h3>
            <p className="text-slate-500 mb-6 text-sm">Apply for upcoming public offerings in one click.</p>
            <div className="flex items-center text-primary font-bold gap-2">
              Apply Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link className="md:col-span-2 lg:col-span-2 bg-[#002d0d] text-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden group" to="/unlisted">
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 bg-white/10 text-white font-bold text-[10px] rounded-full mb-6 uppercase tracking-widest">Exclusive Opportunity</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Unlisted Shares</h3>
              <p className="text-white/70 max-w-lg mb-8 leading-relaxed text-sm md:text-base">Early-stage investment opportunities in high-growth companies before they hit the stock exchange.</p>
              <div className="flex items-center font-bold gap-2">
                View Opportunities <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20 hidden sm:block">
              <Crown size={200} />
            </div>
          </Link>
        </div>
      </section>

      {/* About Us Highlight */}
      <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl relative max-w-md mx-auto lg:max-w-none">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" alt="Consultation" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg border border-white/50">
                <p className="text-primary font-bold text-lg md:text-xl mb-1">15+ Years</p>
                <p className="text-on-surface-variant text-xs md:text-sm font-medium">Of Financial Excellence & Trust</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 tracking-tight leading-tight">Empowering Your <br className="hidden sm:block" />Financial Journey</h2>
            <p className="text-on-secondary-container text-base md:text-lg leading-relaxed mb-8">
              VS INVESTIFY is a leading financial services firm dedicated to helping individuals and institutions navigate the complexities of wealth management.
            </p>
            <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                <span className="text-on-surface-variant font-medium text-sm md:text-base">SEBI Registered Investment Advisory</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                <span className="text-on-surface-variant font-medium text-sm md:text-base">Paperless & Instant Demat Opening</span>
              </li>
            </ul>
            <Link className="inline-flex items-center gap-2 text-primary font-bold text-base md:text-lg hover:underline decoration-2 underline-offset-8" to="/about">
              Read Our Full Story <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Our Presence</h2>
          <p className="text-on-secondary-container">Visit us at our regional hubs for personalized assistance.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">Headquarters</span>
                  <h3 className="text-3xl font-extrabold text-primary">Jaipur Hub</h3>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-end">
                <div>
                  <p className="text-on-surface-variant text-base leading-relaxed mb-8 max-w-sm">
                    B-42 First floor Rangoli plaza Maharana pratap road vaishali Nagar Jaipur 302034
                  </p>
                  <a className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    View on Maps <Navigation size={18} />
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="aspect-video bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden shadow-inner group-hover:shadow-lg transition-all duration-700">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.733596723234!2d75.73602497522432!3d26.911881776648733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db37998399999%3A0x67890abcdef12345!2sRangoli%20Plaza!5e0!3m2!1sen!2sin!4v1711288479000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {['Dehradun', 'Jhansi'].map((city, i) => (
              <div key={i} className="flex-1 bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/5 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-x-2 cursor-default group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-0.5 block opacity-60">Regional Node</span>
                    <h3 className="text-xl font-bold text-primary">{city}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 leading-tight">Ready to Build Your Legacy?</h2>
          <p className="text-base md:text-xl text-on-secondary-container mb-10 md:mb-12 max-w-2xl mx-auto">Start your investment journey today with India's most trusted wealth management platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:scale-105 transition-all shadow-2xl" to="/demat">
              Open Your Free Account
            </Link>
            <Link className="bg-white text-primary border border-primary/10 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-surface-container-high transition-all" to="/contact">
              Contact an Advisor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

