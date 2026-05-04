import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TrendingUp, ShieldCheck, Rocket, Zap, PieChart, Globe, ArrowRight, Wallet, HelpCircle, Calendar, FileText, CheckCircle, TrendingDown } from 'lucide-react';

export default function Unlisted() {
  const [marketData, setMarketData] = useState([
    { name: "NIFTY 50", symbol: "NIFTY", price: "22,419.55", change: "+0.45%", isUp: true, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMXDcrCy5Knmo5Zqo8-L269Gndp_Ntzzr5A&s" },
    { name: "SENSEX", symbol: "SENSEX", price: "73,876.82", change: "+0.38%", isUp: true, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/BSE_India_Logo.svg/1200px-BSE_India_Logo.svg.png" },
    { name: "BANK NIFTY", symbol: "BANKNIFTY", price: "47,214.10", change: "-0.12%", isUp: false, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMXDcrCy5Knmo5Zqo8-L269Gndp_Ntzzr5A&s" },
    { name: "RELIANCE", symbol: "RELIANCE", price: "2,984.50", change: "+2.15%", isUp: true, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png" }
  ]);

  // Fetch Live Market Data from Twelve Data API
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const symbols = "NIFTY,SENSEX,BANKNIFTY,RELIANCE";
        const response = await fetch(`https://api.twelvedata.com/quote?symbol=${symbols}&apikey=f67e9f3b5f3d4d4f8f3b5f3d4d4f8f3b`);
        const data = await response.json();

        if (data && !data.code) {
          setMarketData(prev => prev.map(item => {
            const live = data[item.symbol];
            if (live) {
              return {
                ...item,
                price: parseFloat(live.close).toLocaleString('en-IN', { maximumFractionDigits: 2 }),
                change: `${parseFloat(live.percent_change) > 0 ? '+' : ''}${parseFloat(live.percent_change).toFixed(2)}%`,
                isUp: parseFloat(live.percent_change) >= 0
              };
            }
            return item;
          }));
        }
      } catch (error) {
        console.error("Market API Error:", error);
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, []);
  const deals = [
    { name: "HDB Financial Services", sector: "Financial Services", price: "1270", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSN71c8ALeWaCC_haacPsqwKwx5nfJQonHA&s", tag: "High Demand" },
    { name: "Chennai Super Kings", sector: "IPL Team", price: "208", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7sXUh32iqRgTODGSqa1d7J5PKGC5GR0WODw&s", tag: "Trending" },
    { name: "Care Health Insurance", sector: "Insurance", price: "168", logo: "https://cdn.prod.website-files.com/6145f7156a1337613524d548/63f4a938bd530358e029988a_logo__care%20(1).png", tag: "Stable" },
    { name: "Sterlite Power", sector: "Power & Transmission", price: "591", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdmaKsVDlE2SIHp8dw-nBaO_puT-Qk74COA&s", tag: "High Yield" },
    { name: "Veeda Clinical Research", sector: "Drug Development", price: "483", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbwoCbcZ_ggjHot9mRFT97W5OMPRdtKJ-1Q&s", tag: "Growth" },
    { name: "Studds Accessories", sector: "Helmet Accessories", price: "710", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcdPQOk-RcvhhMQWx1VezWLQ8dk71eN7UsA&s", tag: "Value" },
    { name: "HDFC Securities", sector: "Broking Service", price: "11200", logo: "https://www.hdfcsec.com/hsl.images/HSL_20_For%20White%20Background_PNG-202105110913277691627.png", tag: "Institutional" },
    { name: "SBI Mutual Fund", sector: "Mutual Fund", price: "2760", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XzfvsFYTGS38guY5Ot-itO9Esqt8HMWOfw&s", tag: "Bluechip" },
    { name: "Orbis Financials", sector: "Custodian", price: "-", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgIHFN8UOrbtFLhA-Nmdf7SX7rrkScSuluw&s", tag: "Niche" },
    { name: "Capgemini Technologies", sector: "Consulting Services", price: "12600", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_2017_logo.svg/1280px-Capgemini_2017_logo.svg.png", tag: "Global Leader" },
    { name: "Mohan Meakin", sector: "Beverages", price: "2285", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KdnqkqBUq2Wks9x2O3voHucmaDgB9kLcMw&s", tag: "Vintage" },
    { name: "Oravel Stays (OYO)", sector: "Hospitality", price: "46", logo: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-146835,resizemode-75,msid-79085329/tech/startups/oravel-stays-infuses-rs-634-5-crore-into-india-operations-of-oyo-through-allotment-of-new-shares.jpg", tag: "High Beta" },
    { name: "Indofill Industries", sector: "Agrochemical", price: "1260", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWgYUTb5DuBQJT3x3YUPRE8y0t9rN0-81Cg&s", tag: "Industrial" },
    { name: "PPFAS", sector: "Mutual Fund", price: "-", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/PPFAS_Mutual_Fund_logo.svg/1280px-PPFAS_Mutual_Fund_logo.svg.png", tag: "Quality" },
    { name: "NSE", sector: "Stock Exchange", price: "2430", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMXDcrCy5Knmo5Zqo8-L269Gndp_Ntzzr5A&s", tag: "Top Pick" },
    { name: "NSDL", sector: "Depository", price: "1250", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8b3Ev-FuunFkiOFLu_5SYMwW5P94l4w-DAw&s", tag: "Essential" }
  ];

  return (
    <main className="pt-20 bg-[#0a1128] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-8 py-16 md:py-32 overflow-hidden relative border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/40 px-4 py-2 rounded-full">
              <span className="text-[#C5A059] font-bold text-xs tracking-widest uppercase">Institutional Desk</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.05]">
              India's Most Exclusive <br /> <span className="text-[#C5A059]">Unlisted Equities.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Access pre-IPO shares and private equity opportunities before they hit the public markets. Secure institutional-grade assets with VS INVESTIFY.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-[#C5A059] text-[#0a1128] px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-amber-900/20">Explore Inventory</button>
              <Link to="/contact" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">Get Callback</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059] to-amber-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#0a1128] rounded-[2.8rem] p-8 md:p-10 border border-white/10 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 tracking-tight">Market Watch</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Live Inventory Desk</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Market Open</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {marketData.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group/item flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-inner overflow-hidden">
                          <img src={item.logo} className="w-full h-full object-contain" alt={item.name} />
                        </div>
                        <div>
                          <span className="block font-bold text-white text-[13px]">{item.name}</span>
                          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">{item.symbol}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block font-bold text-[#C5A059] text-[15px]">₹{item.price}</span>
                        <span className={`text-[10px] font-bold tracking-tight ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>
                          {item.change} {item.isUp ? '↑' : '↓'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>Active Deals</span>
                    <span className="text-white">124 Companies</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 md:px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Live <span className="text-[#C5A059]">Opportunities.</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Direct settlement in your Demat account. Transparency and security at every step.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#161e35] p-6 rounded-[2rem] border border-white/5 hover:border-[#C5A059]/30 transition-all group cursor-pointer relative overflow-hidden"
            >
              <div className="w-full h-24 bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm border border-slate-100 mb-6 relative z-10">
                <img 
                  src={deal.logo} 
                  onError={(e) => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${deal.name}&background=0a1128&color=fff&bold=true`; }}
                  className="max-w-full max-h-full object-contain" 
                  alt={deal.name} 
                />
              </div>
              <span className="absolute top-4 right-4 z-20 px-2 py-1 bg-[#C5A059]/10 text-[#C5A059] text-[8px] font-extrabold uppercase tracking-widest rounded-md border border-[#C5A059]/20">{deal.tag}</span>
              
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#C5A059] transition-colors line-clamp-1">{deal.name}</h3>
              <p className="text-xs text-slate-500 mb-4">{deal.sector}</p>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Estimated Price</span>
                <span className="font-bold text-[#C5A059]">₹{deal.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Unlisted Section */}
      <section className="bg-[#0e1629] py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#C5A059]/20 to-transparent border border-[#C5A059]/20">
            <Rocket className="text-[#C5A059] mb-8" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Alpha Generation</h3>
            <p className="text-slate-400 leading-relaxed">Capture maximum value by investing in startups during their hyper-growth phase, long before they hit the public markets.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
            <ShieldCheck className="text-[#C5A059] mb-8" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Vetted Inventory</h3>
            <p className="text-slate-400 leading-relaxed">Every company in our list undergoes strict financial and legal due diligence to ensure minimal counterparty risk.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
            <Zap className="text-[#C5A059] mb-8" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Direct Transfer</h3>
            <p className="text-slate-400 leading-relaxed">Experience seamless off-market transfers directly to your NSDL/CDSL demat account within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">Start Your Private <br /> <span className="text-[#C5A059]">Equity Journey.</span></h2>
          <p className="text-xl text-slate-400">Our advisors are ready to help you build a diversified pre-IPO portfolio.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#C5A059] text-[#0a1128] px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all">Get Portfolio Review</button>
            <button className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">Download Guide</button>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
        <div className="p-8 rounded-3xl bg-white/2 border border-white/5 text-xs text-slate-500 leading-relaxed text-center">
          <p className="max-w-4xl mx-auto uppercase font-bold mb-4 tracking-widest text-slate-400">Risk Disclosure</p>
          Investments in unlisted shares are subject to market risks, including liquidity risk and capital loss. Financial data is based on available disclosures. VS INVESTIFY does not guarantee returns. Please consult your financial advisor before investing.
        </div>
      </section>
    </main>
  );
}
