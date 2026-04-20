import { Link } from 'react-router-dom';

export default function Equity() {
  return (
    <main className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Institutional Grade</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary text-editorial-contrast leading-[1.1]">
            Precision <br className="hidden md:block" />Investments
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Access high-velocity equity trading tools designed for the modern curator. Our institutional-grade platform provides the clarity required to navigate volatile markets with absolute confidence.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-sm md:text-md hover:scale-[1.05] transition-all shadow-xl shadow-primary/20" to="/demat">Start Trading Now</Link>
            <Link className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-bold text-sm md:text-md hover:bg-surface-container-low transition-all" to="/contact">View Brokerage Plans</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2rem] blur-3xl -z-10"></div>
          <div className="bg-surface-container-lowest rounded-[2rem] p-4 shadow-[0_40px_80px_rgba(0,31,102,0.08)] overflow-hidden max-w-md mx-auto lg:max-w-none">
            <img className="w-full h-[300px] md:h-[400px] object-cover rounded-[1.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCM-Ib2VWytMAo2Lll2h7xwc-pnumnrtOrEDJ6JT-kn9G7-Bbmry5OxecMaYyoEt7BNOhgHw-BQFVROepZC5dGQcBN9MxLrnSQ0QgPzYhmf4JIaHuB9WKpVioH6UJCHd1__7jFHVfes-gzIX5mlKDKw2nt_Olkw4h7bm77UOO8elgwZQzUqyFIk5ihO1wGY6JVm9cskOQrCCBulXedPH54wfjgaDLz8azhk20rEKKEJJpl2DXW5c652o1Ne9e46-gXqseOmHFcoh8" alt="Trading Interface" referrerPolicy="no-referrer" />
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              <div className="flex-none bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/10">
                <span className="block text-[10px] uppercase font-bold text-outline">Market Vol</span>
                <span className="text-base md:text-lg font-extrabold text-on-tertiary-container">+2.45%</span>
              </div>
              <div className="flex-none bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/10">
                <span className="block text-[10px] uppercase font-bold text-outline">Order Speed</span>
                <span className="text-base md:text-lg font-extrabold text-primary">0.02ms</span>
              </div>
              <div className="flex-none bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/10">
                <span className="block text-[10px] uppercase font-bold text-outline">Reliability</span>
                <span className="text-base md:text-lg font-extrabold text-on-tertiary-container">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low mt-16 md:mt-24 -mx-6 md:-mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">The Edge</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-4">Powerful Trading Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex flex-col h-full justify-between">
                <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                    <span className="material-symbols-outlined text-primary">monitoring</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Real-Time Analysis</h3>
                  <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">Experience zero-latency market feeds and advanced technical indicators that update in the blink of an eye. Never miss a price pivot again.</p>
                </div>
                <div className="mt-8 pt-8 border-t border-surface-container-low flex justify-center md:justify-start gap-8">
                  <div>
                    <span className="text-2xl md:text-3xl font-extrabold text-primary">50+</span>
                    <span className="block text-[10px] md:text-xs uppercase font-bold text-outline mt-1">Indicators</span>
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-extrabold text-primary">Low</span>
                    <span className="block text-[10px] md:text-xs uppercase font-bold text-outline mt-1">Latency</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-container p-8 md:p-10 rounded-[2rem] text-on-primary shadow-xl text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 mx-auto md:mx-0">
                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>summarize</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Expert Reports</h3>
              <p className="text-sm md:text-base text-on-primary-container/80 leading-relaxed mb-6">Deep-dive fundamental research and daily technical outlooks delivered to your cockpit before the opening bell.</p>
              <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center max-w-[200px] mx-auto md:mx-0">
                <span className="material-symbols-outlined text-4xl opacity-50">auto_awesome</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
