import { Link } from 'react-router-dom';

export default function Derivatives() {
  return (
    <main className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">High Leverage</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary text-editorial-contrast leading-[1.1]">
            Derivative <br className="hidden md:block" />Strategies
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Master market volatility with our sophisticated Futures and Options trading desk. Designed for the strategic investor seeking to hedge risks or capitalize on price movements with precision.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <Link className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-sm md:text-md hover:scale-[1.05] transition-all shadow-xl shadow-primary/20" to="/demat">Activate F&O Segment</Link>
            <Link className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-bold text-sm md:text-md hover:bg-surface-container-low transition-all" to="/contact">Consult an Expert</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-transparent rounded-[2rem] blur-3xl -z-10"></div>
          <div className="bg-surface-container-lowest rounded-[2rem] p-4 shadow-[0_40px_80px_rgba(0,31,102,0.08)] overflow-hidden max-w-md mx-auto lg:max-w-none">
            <img className="w-full h-[300px] md:h-[400px] object-cover rounded-[1.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXRTz3gfy-Dji66AYGwyGrRaiOC0viRQOvMyRT7MbszTuPb_kXslzK1EPSYqQD7ykXIfmuxi0D_e6m3sOFLcrns9_eGwuyyj8bCp1SICgqip8eNkmCj-AM9l2f7vYWpHBun3s3b0fj-oxUUhJYP4OFIiqjFwVogLsCLRjljNdILkiO478r-GhkwIn0vL7hSNY7i5V3m514GhuZQZGDPmWyQYzQ0NqAnO-36FG5YqNrh8dskLuRTXkKeW_xaoHxWly5yDdmnvpEhTQ" alt="Derivatives Trading" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low mt-16 md:mt-24 -mx-6 md:-mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-sm text-center md:text-left">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-6">analytics</span>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Futures Trading</h3>
              <p className="text-on-surface-variant text-sm md:text-base">Lock in future prices and manage portfolio exposure with institutional-grade liquidity.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-sm text-center md:text-left">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-6">layers</span>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Options Desk</h3>
              <p className="text-on-surface-variant text-sm md:text-base">Sophisticated call and put strategies for income generation and downside protection.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-sm text-center md:text-left">
              <span className="material-symbols-outlined text-primary text-3xl md:text-4xl mb-6">speed</span>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Real-time Greeks</h3>
              <p className="text-on-surface-variant text-sm md:text-base">Monitor Delta, Gamma, Theta, and Vega in real-time for precise position management.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
