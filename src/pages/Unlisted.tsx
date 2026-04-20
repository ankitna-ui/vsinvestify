import { Link } from 'react-router-dom';

export default function Unlisted() {
  return (
    <main className="pt-20 bg-[#0a1128] text-white min-h-screen">
      {/* Hero Section */}
      <section className="unlisted-hero-gradient px-6 md:px-8 py-16 md:py-24 lg:py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/40 px-4 py-2 rounded-full">
              <span className="text-[#00FF9D] font-bold text-[10px] md:text-xs tracking-widest uppercase text-glow-green">Institutional Access</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
              Invest in Tomorrow's <br className="hidden md:block" /> <span className="text-[#C5A059]">Market Leaders</span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Exclusive access to high-growth Pre-IPO companies and unlisted equities. Secure your position in the private markets with precision.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={() => alert('Exploring opportunities... Listing coming soon!')}
                className="w-full sm:w-auto bg-[#C5A059] text-[#0a1128] px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all"
              >
                Explore Opportunities
              </button>
              <button 
                onClick={() => alert('Portfolio view coming soon!')}
                className="w-full sm:w-auto bg-[#161e35] border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/5 transition-all"
              >
                View Portfolio
              </button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden">
              <div className="absolute inset-0 trading-visual opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Growth</p>
                    <p className="text-2xl md:text-3xl font-bold text-[#00FF9D] text-glow-green">+24.8% YOY</p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#00FF9D]/10 flex items-center justify-center border border-[#00FF9D]/20">
                    <span className="material-symbols-outlined text-[#00FF9D] text-xl md:text-2xl">trending_up</span>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00FF9D] w-3/4 shadow-[0_0_15px_#00FF9D]"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <p className="text-[10px] md:text-xs text-slate-400">Unlisted AUM</p>
                      <p className="text-lg md:text-xl font-bold text-white">₹450Cr+</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <p className="text-[10px] md:text-xs text-slate-400">Active Deals</p>
                      <p className="text-lg md:text-xl font-bold text-white">12+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 md:w-64 h-48 md:h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 md:w-64 h-48 md:h-64 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Why <span className="text-[#C5A059]">Private Equities?</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg">Harness the power of institutional-grade intelligence to build a resilient, high-alpha portfolio.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 p-8 md:p-10 rounded-[2rem] glass-card flex flex-col justify-between min-h-[350px] md:min-h-[400px]">
            <div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-[#C5A059] text-2xl md:text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Alpha Generation</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">Capture exponential value during the hyper-growth phase of pre-IPO companies before they reach the saturation of public markets.</p>
            </div>
            <div className="flex items-center space-x-4 mt-8">
              <span className="px-4 py-2 bg-[#00FF9D]/10 border border-[#00FF9D]/20 rounded-lg text-[#00FF9D] text-xs md:text-sm font-bold">Historical Returns 18%+</span>
            </div>
          </div>
          <div className="p-8 md:p-10 rounded-[2rem] bg-primary/40 border border-primary/60 text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl">pie_chart</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Strategic Diversification</h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">Minimize correlation with public market volatility through exclusive exposure to private infrastructure and growth equity.</p>
            </div>
            <button 
              onClick={() => alert('Strategy document coming soon!')}
              className="mt-8 flex items-center space-x-2 text-[#C5A059] font-bold group"
            >
              <span className="text-sm md:text-base">Learn Strategy</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="md:col-span-2 lg:col-span-3 p-8 md:p-10 rounded-[2rem] glass-card flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8 mx-auto lg:mx-0">
                <span className="material-symbols-outlined text-[#C5A059] text-2xl md:text-3xl">account_balance</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Institutional Class Assets</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">We provide fractional access to shares previously restricted to Tier-1 Venture Capitalists and Sovereign Wealth Funds.</p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl text-center">
                <p className="text-[#C5A059] font-bold text-xl md:text-2xl">Zero</p>
                <p className="text-[10px] md:text-sm text-slate-400">Hidden Custody Fees</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/5 rounded-2xl text-center">
                <p className="text-[#C5A059] font-bold text-xl md:text-2xl">Direct</p>
                <p className="text-[10px] md:text-sm text-slate-400">DP Settlement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="bg-[#161e35]/50 border-y border-white/5 px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Curated <span className="text-[#C5A059]">Pre-IPO</span> Opportunities</h2>
              <p className="text-slate-400 text-sm md:text-base">Strictly vetted opportunities for private desks and accredited investors.</p>
            </div>
            <div className="flex space-x-4">
              <button className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-white">chevron_left</span>
              </button>
              <button className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-white">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Swiggy", sector: "E-commerce", min: "₹1.5 Lakhs", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqtJGIPBDqDMdsRsbWRwOqQTuJGh6ZQgSQRJvCK9dEphGzEQ5vXvbq0_AGOC3Q8vnD_snzlE9PrjxDbJAkz9SwJAYCiK9FEBm6OIOhoPfDt7PiMKwvuahpnj-9eKXjgB-pNpWnJJAxx_UOa8rs-sMCVCXSzpeFNL84c-EwxsUSjghhP9lhEc1du8FoB_8k9XytrO5BX_tYI2hfaZ7ZAyUhwW9ycVLzaTEEb60zau79LVOH6NoRtCnReT3MerXIOd9hsnl1s9w_9PY", tag: "High Demand" },
              { name: "NSE India", sector: "Fin-Infrastructure", min: "₹5 Lakhs", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACL-hY-ilr9tTZA8yPb2vbFRYN6vxeX8bAwwRtI0z4qmuvbHAJG649Nx6HvSXHdoSKOxyy-eZAKbkbYA9tWkkrOrqgOmtZbrJ7ZQNKmGoB22Uz-2xCtiJaVeGiekFQnyHDRjmKXgKLLkB0NIVaAILKwwcobZndpeoqDaEVd9TaO_5079esYs2OLWxviMqIn6QthuI1541dQ61cI5ZZHTiMMJ7s6l3_Kn20uKKFsXpZocKQPoaufglAC1haUX6tvwOaJzfAj5RnvEg", tag: "Institutional Tier" },
              { name: "Ola Electric", sector: "EV Mobility", min: "₹2.5 Lakhs", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVcLQoq5SzMQjZ0nEjJGwgO_LWo6StVTPy9a2wj4yDrRwnaX1bNxpkOs35BBJ8YW5QOYJOzo3OkXfCy5vdY2m_DGaohBY78S2LoUrSgeRLOZFpCSU6KH0Uyoh3Pm1lKlK5L7PnIfZGlCmt41cCGqcqYW7gEDjJY9iwdWaFtoR_21dpnA8Exr74aYZFiap1W1VoRZz8Jutb1ZWnDT_FFwcQHvOHwp0JtqS-zNeNILQQUK6tqEYaRRE54px4_tGVDGeGGJTK5yQF15g", tag: "Trending Hot" }
            ].map((deal, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-[2.5rem] transition-all duration-300 group relative">
                <div className="absolute inset-0 bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img className="w-8 h-8 md:w-10 md:h-10 object-contain" src={deal.img} alt={deal.name} referrerPolicy="no-referrer" />
                    </div>
                    <span className="px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest text-[#C5A059] rounded-full">{deal.tag}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{deal.name}</h4>
                  <p className="text-xs md:text-sm text-slate-400 mb-6 leading-relaxed">Exclusive pre-IPO opportunity in the {deal.sector} space.</p>
                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-slate-400">Min. Investment</span>
                      <span className="font-bold text-white">{deal.min}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-slate-400">Sector</span>
                      <span className="font-bold text-white">{deal.sector}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert('Executive Summary request received! Our team will contact you.')}
                    className="w-full py-3 md:py-4 rounded-xl border border-[#C5A059] text-[#C5A059] font-bold text-sm md:text-base hover:bg-[#C5A059] hover:text-[#0a1128] transition-all"
                  >
                    Request Executive Summary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto premium-button rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Ready for <span className="text-[#C5A059]">Smart Wealth?</span></h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">Connect with our private wealth advisors for a curated entry into India's most promising startups.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <button 
                onClick={() => alert('Connecting you to an advisor...')}
                className="w-full sm:w-auto bg-[#C5A059] text-[#0a1128] px-8 md:px-10 py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all"
              >
                Speak to Advisor
              </button>
              <button 
                onClick={() => alert('Investor Deck download starting soon!')}
                className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 md:px-10 py-4 rounded-xl font-bold text-base md:text-lg backdrop-blur-md hover:bg-white/10 transition-all"
              >
                Investor Deck
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#C5A059]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="p-6 md:p-8 rounded-3xl glass-card border border-white/5 bg-white/2">
          <div className="flex items-start space-x-4">
            <span className="material-symbols-outlined text-[#C5A059] mt-1 text-xl md:text-2xl">warning</span>
            <div className="space-y-2">
              <h5 className="font-bold text-white text-sm md:text-base">Risk Disclosure</h5>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                Investment in unlisted shares involves substantial risks including illiquidity, lack of standard market prices, and potential capital loss. These are considered high-risk speculative investments. Financial data and valuations for unlisted companies are based on disclosures provided by the respective entities and independent research. VS INVESTIFY facilitates transactions but strongly advises independent due diligence before committing capital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
