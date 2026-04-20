import { Link } from 'react-router-dom';

export default function About() {
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
              <Link className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-base hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(0,31,102,0.15)] transition-all" to="/contact">Schedule Consultation</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm_feEPGeVGOiw17ctYjEdhlM0IBnF05Y30z2TXSuztkc1MilcRfiGwRormCcHVQ4E74BRvYynzIhaA_iobuDmWDl9IevlnTTdYxHbiQ0AKlc1ZKo3UA-DtesyWXINXxs2Q46yDqbWo9c66FDZvn5pCRsFjY72LdE2b5jXnhzsMMhqL43Hnn-mZC7qwJvPg1yJake2-GXhUnKrgZiBr0xFtAYC5_8rChqyRlTook3IHuGpSYLYRREUQQQ5qKXiLcTsFIXqu7UkbI0" alt="Office" referrerPolicy="no-referrer" />
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
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary-fixed">diamond</span>
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
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">visibility</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">To be the global benchmark for bespoke financial advisory, where technology meets human intuition to create the ultimate wealth preservation ecosystem.</p>
            </div>
            <div className="mt-8">
              <Link className="flex items-center gap-2 text-primary font-bold group text-sm md:text-base" to="/services">
                Explore our services
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
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

      {/* Advisory Council */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Elite Advisory Council</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Vikram Singh", role: "Chief Investment Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVJJYuLpbQRVFbrJc9kgY5Phc6AiHdFk6JUFkBQZaV5tE99kSnQOf5WxZ1w2yg7Hw90rrjqhfNbmNcLY-8Epq5kiB0hKwJF4ga-6Tp8eAQZhBI_1Ue6ECSlArudctukkCKS8c6CvvrPqtBM0fhMOoNQfk_9biEjqVTrvqje1uMUuP4pjqeNLd3QGQM4l1Di93rE5SEt0gk38ScMQapJzonLQI7RsZc1hhitmjyx6vxdZqlMM57l2mpgJ96Jvo03i6ghd_UToYVi6w" },
            { name: "Ananya Sharma", role: "Head of Equity Research", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-iuS8y970FVYO9_45Au6rKaJvGLuEnWl653zSsoljototTb4gFHgNdk7EUYR6fstwXQrE2clvtaKK50x6stmM0pDxm_LGB87VFjG1WskI73e_ahv9Kn5LD_Oy1lgjmhLAdqOMRSjm0Xr1x1W5eNoUlrdCgQv3P5dRrRs6N-Fqr6SSu2baA5bhZTPSnJiRwIx5mQFXnXy_8Jw0cVwV0GEaWF-uBDqLEnaio-au2TEw0i7gWNmtWvbWIsCV2pvF2TjPaXhCXhcNHJ4" },
            { name: "David Chen", role: "Strategic Global Markets", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2OYv6XLRFEp2i3EzyDAuw1u5vbSv474uWItRFW3XUnkGm7FuXw7YnpXqMjnI6dxSHyhEg_Pq2feQBLcTj1NiTdrDPWiKaqJawgAt_klJ4pQr79y__aOmh779F_8VkCNqH8fxJqcd_myirVTCOAFYdcALsEt2mfkrvh7XE0os9yl1sJlFS_NdDpMdhLFu4agU68-WFabnhM2LrHaNwwMBI7RicSn-MRO3OtdAgJRRGotsJp-BE1q2spCDngRIIeE5Il9R2Ay8VdWY" },
            { name: "Priya Verma", role: "Director of Client Relations", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXM4z_W7Jj51e-J_E79jAFyS4wxphSWXiFa39mvQ6rSg6owb_yTa3Sxcu38ukgFAVop3r8ynFcv2ig44iuJ2SkIzXMAvMo2j2TQRWgr_JodGgA2pFUjEcaXZULX-3cpUHChOz37y3arhwZ_niESIAyz9DeNWewom2WuwDpQ4HKSs2fFhG6turvPeFwDehcYa4RI4AF_E-7iiLo6QxI0hjMTk4yswBp6j9gF4C_y61KNSqeqLjcVEhS56eFOuj20C2Cjxx4CgQyPhU" }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={member.img} alt={member.name} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-xl font-bold text-primary">{member.name}</h4>
              <p className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
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
