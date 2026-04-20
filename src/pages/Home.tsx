import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
        // Shift candles to the left and add a new one
        const next = [...prev.slice(1)];
        const lastCandle = prev[prev.length - 1];
        
        // Simulate a "walk" where the next candle is somewhat related to the previous one
        const change = (Math.random() - 0.5) * 20;
        let newHeight = lastCandle.height + change;
        
        // Keep height within bounds
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
                <span className="material-symbols-outlined">trending_up</span>
              </Link>
              <Link className="bg-surface-container-low text-primary px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-surface-container-high transition-all flex items-center justify-center gap-2" to="/contact">
                Get Free Consultation
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD193L5nkgmcIIl4Y1IwFDKbm2yG15w1DIhsiOc5yyvRp4_HXQYoBRSPwzmgBWbLWrbCAw6OVYzq0rJMe8DZi7aWnqYvtj8o16yjcXVetltkIQ_yJVPaaJSPTJcjVzbU92EuK4Ofi3-YO-ohx69Opt0IYTMIYcoQssorrjYyEwEOJiUhGRs4UuliG-C5_ARGhTEgWXIPQBrIEeAbT-p9Qy_hCXSrUZRU6P_WvnAwvfV2oEguhHjntYoqfVg23v9GZxi8wNJMK0DKNA" alt="Investor" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE7R6X1j4-qnPC9R2sn8fijbTekA9blF5ND0UEC6yYt6DtjKS1H1cBfpB8ZzzQge8DAaJce7QKqdHcsW6hkUOcdD5VNdAmtRakzaHsmhZ-hKKTd2LjUUc6XaA-ok6PwY-_ZbtRzfSXHKaZX2MC8gsuwxVVjbzMNeK_fgZ6cqnrsU_dt-zpWm5vdkxfXaaxWndr4pvpAyeW5XHgVO3WNpU9FbbJ2M_7AVptfImFEdKvRRoSsnqCXOiIrASpAZg9cWXrN9t37GtVWdY" alt="Trader" referrerPolicy="no-referrer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5wcmQaz2M7N2tUsUshZt7lsbqP-9Ojlb8CwuwKtefJFt1AS-kjM1PqDApTly7nfe1_dY-HL_4SMKOVJ-dwmilmkujr1hLUTcN2wxSycPW7i_cVVB8Oi5Tn4KC6bDBUqa-dkJYg95U8y3BnyKzLNDnkfMyBrJ-X-QGBWb-kdjmPC8P89X_ap3D3s8TU1RFiXNPIxBM92bjh82yWcwu5pTT5KtA6CTUw-nd3z30KDPApNGpng4NFJZfQfYJtLcZJY0TU2eB1d6PZE" alt="Client" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm font-medium text-on-surface-variant">Trusted by 10k+ Active Investors</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
            <div className="relative bg-[#0a0c14] p-6 rounded-3xl shadow-[0_40px_80px_rgba(0,31,102,0.25)] border border-white/10 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">REAL-TIME DATA FEED</span>
                  <div className="flex items-center gap-1.5 bg-tertiary/20 px-2 py-0.5 rounded border border-tertiary-fixed-dim/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                    <span className="text-[8px] font-bold text-tertiary-fixed-dim uppercase">LIVE</span>
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
                  <p className="text-lg font-extrabold text-tertiary-fixed-dim">+₹18,240</p>
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
      <div className="w-full bg-white border-y border-outline-variant/30">
        <div className="bg-surface-container-low py-1.5 border-b border-outline-variant/10 overflow-hidden whitespace-nowrap">
          <div className="flex items-center space-x-12 animate-marquee animate-marquee-fast">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">NIFTY 50</span><span className="text-xs font-bold text-primary">22,419.55</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.45% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">SENSEX</span><span className="text-xs font-bold text-primary">73,876.82</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.38% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">BANK NIFTY</span><span className="text-xs font-bold text-error">47,214.10</span><span className="text-[10px] text-error font-bold">-0.12% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">NIFTY IT</span><span className="text-xs font-bold text-primary">36,120.45</span><span className="text-[10px] text-on-tertiary-container font-bold">+1.24% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">USD/INR</span><span className="text-xs font-bold text-primary">83.42</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.05% ▲</span></div>
            </div>
            <div className="flex items-center gap-12 ml-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">NIFTY 50</span><span className="text-xs font-bold text-primary">22,419.55</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.45% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">SENSEX</span><span className="text-xs font-bold text-primary">73,876.82</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.38% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">BANK NIFTY</span><span className="text-xs font-bold text-error">47,214.10</span><span className="text-[10px] text-error font-bold">-0.12% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">NIFTY IT</span><span className="text-xs font-bold text-primary">36,120.45</span><span className="text-[10px] text-on-tertiary-container font-bold">+1.24% ▲</span></div>
            </div>
          </div>
        </div>
        <div className="bg-white py-1.5 border-b border-outline-variant/10 overflow-hidden whitespace-nowrap">
          <div className="flex items-center space-x-12 animate-marquee">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">RELIANCE</span><span className="text-xs font-bold text-primary">2,984.50</span><span className="text-[10px] text-on-tertiary-container font-bold">+2.15% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">HDFC BANK</span><span className="text-xs font-bold text-error">1,425.20</span><span className="text-[10px] text-error font-bold">-0.85% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">TCS</span><span className="text-xs font-bold text-primary">4,120.15</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.45% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">INFY</span><span className="text-xs font-bold text-error">1,512.40</span><span className="text-[10px] text-error font-bold">-1.20% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">ICICI BANK</span><span className="text-xs font-bold text-primary">1,085.60</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.95% ▲</span></div>
            </div>
            <div className="flex items-center gap-12 ml-12">
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">RELIANCE</span><span className="text-xs font-bold text-primary">2,984.50</span><span className="text-[10px] text-on-tertiary-container font-bold">+2.15% ▲</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">HDFC BANK</span><span className="text-xs font-bold text-error">1,425.20</span><span className="text-[10px] text-error font-bold">-0.85% ▼</span></div>
              <div className="flex items-center gap-2"><span className="text-[10px] font-bold text-on-surface-variant">TCS</span><span className="text-xs font-bold text-primary">4,120.15</span><span className="text-[10px] text-on-tertiary-container font-bold">+0.45% ▲</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <section className="py-12 md:py-16 bg-surface-container-low/30 px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-8 md:mb-10">Strategic Partners & Exchanges</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg md:text-2xl font-black text-primary">NUVAMA WEALTH</span>
            <span className="text-lg md:text-2xl font-black text-primary">AXIS SECURITIES</span>
            <span className="text-lg md:text-2xl font-black text-primary">LIC INSURANCE</span>
            <span className="text-lg md:text-2xl font-black text-primary">MAX BUPA</span>
            <span className="text-lg md:text-2xl font-black text-primary">JM FINANCIAL</span>
            <span className="text-lg md:text-2xl font-black text-primary">NSE</span>
            <span className="text-lg md:text-2xl font-black text-primary">BSE</span>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">Diversify Your Wealth</h2>
          <p className="text-on-secondary-container max-w-xl mx-auto lg:mx-0">From traditional equity to high-yield unlisted shares, we provide the tools you need to grow your capital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Link className="md:col-span-2 group relative overflow-hidden bg-surface-container-low rounded-[2rem] p-8 md:p-10 hover:scale-[1.01] transition-all" to="/equity">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">analytics</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Equity & Stocks</h3>
                <p className="text-sm md:text-base text-on-secondary-container max-w-md">Access direct equity markets with real-time data, expert research, and seamless execution.</p>
              </div>
              <div className="mt-8 flex items-center text-primary font-bold gap-2">
                Explore Markets <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
              <span className="material-symbols-outlined text-[15rem]">monitoring</span>
            </div>
          </Link>
          <Link className="bg-surface-container-high rounded-[2rem] p-8 md:p-10 group hover:bg-primary transition-all duration-300" to="/mutual-funds">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
              <span className="material-symbols-outlined text-2xl md:text-3xl">account_balance_wallet</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-white mb-4">Mutual Funds</h3>
            <p className="text-on-secondary-container group-hover:text-white/80 mb-6 text-sm">Invest in top-performing schemes tailored to your risk appetite and goals.</p>
            <div className="flex items-center text-primary group-hover:text-white font-bold gap-2">
              Start SIP <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </div>
          </Link>
          <Link className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-10 border border-outline-variant/20 group shadow-sm" to="/derivatives">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-2xl md:text-3xl">currency_exchange</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Derivatives</h3>
            <p className="text-on-secondary-container mb-6 text-sm">Hedge and trade with F&O strategies using our advanced low-latency platforms.</p>
            <div className="flex items-center text-primary font-bold gap-2">
              Trade F&O <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </div>
          </Link>
          <Link className="md:col-span-2 bg-[#002d0d] text-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden group" to="/unlisted">
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 bg-tertiary-fixed text-tertiary font-bold text-[10px] rounded-full mb-6 uppercase tracking-widest">Exclusive Opportunity</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Unlisted Shares</h3>
              <p className="text-white/70 max-w-lg mb-8 leading-relaxed text-sm md:text-base">Early-stage investment opportunities in high-growth companies before they hit the stock exchange.</p>
              <div className="flex items-center font-bold gap-2">
                View Opportunities <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20 hidden sm:block">
              <span className="material-symbols-outlined text-[12rem] text-tertiary-fixed">token</span>
            </div>
          </Link>
        </div>
      </section>

      {/* About Us Highlight */}
      <section className="py-20 md:py-32 bg-surface-container-low px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl relative max-w-md mx-auto lg:max-w-none">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgGsUJMzBwdh0Z6He9KGoXbjQIzwJ5HzGqttx-Y6wL7V-Pxs7w5AB48M7zQzAXCZhLFrltBs9aJ9B8dlNjVd6WHI_euJ0lxSFB0PUiSSrVvkTJl-BE8OBDPR_B9PA8W3v1G93X32QJq5lascJ3wPuXAJpFcEbgsjOI-_EKnqMOMJnbLaR59sS7oGxT5EMffh30P9XFzSjO99q15R-0FpLzYZQRskpwnHHmbL6KeatUiCT8pP1S9Pda0apMdqk-PPRRt_pnLe8eNxg" alt="Consultation" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg border border-white/50">
                <p className="text-primary font-bold text-lg md:text-xl mb-1">15+ Years</p>
                <p className="text-on-surface-variant text-xs md:text-sm font-medium">Of Financial Excellence & Trust</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 tracking-tight leading-tight">Empowering Your <br className="hidden sm:block" />Financial Journey</h2>
            <p className="text-on-secondary-container text-base md:text-lg leading-relaxed mb-8">
              VS INVESTIFY is a leading financial services firm dedicated to helping individuals and institutions navigate the complexities of wealth management. We combine innovative technology with personalized advisory to deliver superior outcomes.
            </p>
            <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-tertiary-container font-bold">check_circle</span>
                <span className="text-on-surface-variant font-medium text-sm md:text-base">SEBI Registered Investment Advisory</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-tertiary-container font-bold">check_circle</span>
                <span className="text-on-surface-variant font-medium text-sm md:text-base">Paperless & Instant Demat Opening</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-tertiary-container font-bold">check_circle</span>
                <span className="text-on-surface-variant font-medium text-sm md:text-base">Customized Portfolio Solutions</span>
              </li>
            </ul>
            <Link className="inline-flex items-center gap-2 text-primary font-bold text-base md:text-lg hover:underline decoration-2 underline-offset-8" to="/about">
              Read Our Full Story <span className="material-symbols-outlined">chevron_right</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-surface-container-low p-6 md:p-8 rounded-3xl border border-outline-variant/10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h3 className="text-xl font-bold text-primary">Jaipur</h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">B-42 First floor Rangoli plaza Maharana pratap road vaishali Nagar Jaipur 302034</p>
            <a 
              className="text-primary font-bold text-sm flex items-center gap-1 group" 
              href="https://www.google.com/maps/search/?api=1&query=B-42 First floor Rangoli plaza Maharana pratap road vaishali Nagar Jaipur 302034"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">open_in_new</span>
            </a>
          </div>
          <div className="bg-surface-container-low p-6 md:p-8 rounded-3xl border border-outline-variant/10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h3 className="text-xl font-bold text-primary">Dehradun</h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">Suite 12, Capital Plaza, Rajpur Road, Dehradun, Uttarakhand - 248001</p>
            <a 
              className="text-primary font-bold text-sm flex items-center gap-1 group" 
              href="https://www.google.com/maps/search/?api=1&query=Suite 12, Capital Plaza, Rajpur Road, Dehradun, Uttarakhand - 248001"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">open_in_new</span>
            </a>
          </div>
          <div className="bg-surface-container-low p-6 md:p-8 rounded-3xl border border-outline-variant/10 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h3 className="text-xl font-bold text-primary">Jhansi</h3>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">First Floor, Heritage Mall, Civil Lines, Jhansi, Uttar Pradesh - 284001</p>
            <a 
              className="text-primary font-bold text-sm flex items-center gap-1 group" 
              href="https://www.google.com/maps/search/?api=1&query=First Floor, Heritage Mall, Civil Lines, Jhansi, Uttar Pradesh - 284001"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-primary text-white px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="material-symbols-outlined text-5xl md:text-6xl text-primary-container/40">format_quote</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Investor Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQgiF9a3e0hu9M5BdUjowQFDNDNlaHiPX8N425nSHFNx1axd8NjRm-hjuOleqc7wvAgja8S1Z8b7-c_m2SeqbOfjV5ADh7Kg6yIAbJ0RAJwcqzM_k0EfUesmH2M-PAuZuonu0ImpgmOahVHqAXX4uFoUiD-NqiTpWJKLGA2p7byQrJvbu-5uwajvjqBB381WSdJEVK5ePB-hBFFWMp4k_kcKohMA4buvbmEBjcj6ZQ-ueulI99OmdYAcgsmfFuD2FNFA3dz2E6ezc" alt="Rahul Mehra" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-sm md:text-base">Rahul Mehra</p>
                  <p className="text-[10px] md:text-xs text-white/50">Tech Entrepreneur</p>
                </div>
              </div>
              <p className="italic text-base md:text-lg text-white/80 leading-relaxed">"The unlisted shares platform gave me access to high-growth tech firms I couldn't find elsewhere. Their advisory team is exceptionally professional."</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img className="w-10 h-10 md:w-12 md:h-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT_2_wycye2vE0CIOdwn6xKhXSfJoR8cocNF-5weNCyaWM9l_I_gJy0OrJjqG-HJDjYz5ff0N0Rmb43pqi-eZA-dw85pO_NQ7BjoVcBiDzxJBCKssqHQJWvgQQVp8J-p2N-uC4tKAGLfc_wue3NZ1KzHWOgGo9RW1SelKWTSSoGPIl7j1xJcMnguDmtqSWcVSmSskK-YLw1eme0sxpj4rgRaXjBzBPYbwnAcb8ONHakdrhvmBhg1dagli5yDgk2LWHJYN6t2UPLaA" alt="Ananya Sharma" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-sm md:text-base">Ananya Sharma</p>
                  <p className="text-[10px] md:text-xs text-white/50">Senior Manager</p>
                </div>
              </div>
              <p className="italic text-base md:text-lg text-white/80 leading-relaxed">"Switching my SIPs to VS INVESTIFY was the best decision. The dashboard makes it so easy to track my wealth across multiple asset classes."</p>
            </div>
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
