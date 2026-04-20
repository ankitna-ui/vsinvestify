import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Demat() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    mobile: '9876543210',
    email: 'investor@vsinvestify.com',
    pan: 'ABCDE1234F',
    dob: '15/08/1990'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '919660039402';
    const text = `*New Demat Account Request from VS INVESTIFY*%0A%0A*Mobile:* ${formData.mobile}%0A*Email:* ${formData.email}%0A*PAN:* ${formData.pan}%0A*DOB:* ${formData.dob}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Narrative Column */}
        <div className="lg:col-span-5 space-y-8 mt-4">
          <div className="space-y-6">
            <img 
              src="https://lh3.googleusercontent.com/d/1EHq6iGOjfeXHjP2CAEXHMLMgB7QBNSxY" 
              alt="VS INVESTIFY Logo" 
              className="h-16 w-auto object-contain mb-4"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-xs font-bold tracking-wider uppercase">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                SEBI REGISTERED
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
                Begin Your Wealth Journey
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                Join 2M+ investors building their future with precision-grade financial tools and paperless onboarding.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
              <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <h3 className="font-bold text-primary">256-bit SSL</h3>
              <p className="text-xs text-on-surface-variant">Military grade encryption for your data security.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl mt-4">
              <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <h3 className="font-bold text-primary">Fast-Track</h3>
              <p className="text-xs text-on-surface-variant">Average account activation in under 24 hours.</p>
            </div>
          </div>
          <div className="relative h-48 rounded-2xl overflow-hidden bg-primary-container/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <img alt="Financial charts" className="w-full h-full object-cover opacity-20 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQr7IwlrJl_KpbyLaCc9trP2lsAOb2eNty2FyS2cPW3SyJYvw7h_Pb79pN7nl2ruxVI0UlHkUkNuosFZElOSTXDCMLA-i0WvA8PqZ5xSalTKYh_dfGjpN-95_yKQNe1Nq_NhO_QoKJSknPv1qkz9U6nM2dzPSBzzNfvzIcDw0izqbXxRe2HWsrmtAwwFLiWa1cLV9BmisENfk3PzoJ9o5-rKst_r62o2lnL2gpWKiDqzpXuSpD_ihRjOYGJGrgbo54eNQYwLLvj30" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <div className="bg-surface-container-lowest rounded-[2rem] p-12 shadow-[0_20px_40px_rgba(0,31,102,0.06)] text-center space-y-8 animate-in fade-in zoom-in duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-emerald-600"></div>
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-primary">Registration Active!</h2>
                <p className="text-on-surface-variant max-w-sm mx-auto">
                  Your dummy registration has been successfully activated. Your application is now in the <span className="text-green-600 font-bold">VERIFIED</span> state.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/20 text-left space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Application Status</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500 text-white text-[10px] font-black tracking-tighter">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    ACTIVE / VERIFIED
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                  <div>
                    <p className="text-[9px] font-bold text-outline uppercase mb-1">Application ID</p>
                    <p className="font-mono font-bold text-primary text-sm">VS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-outline uppercase mb-1">Registered Email</p>
                    <p className="font-bold text-primary text-sm truncate">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-outline uppercase mb-1">PAN Number</p>
                    <p className="font-bold text-primary text-sm">{formData.pan}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-outline uppercase mb-1">Account Type</p>
                    <p className="font-bold text-primary text-sm">Premium Individual</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-outline uppercase mb-1">KYC Status</p>
                    <p className="font-bold text-emerald-600 text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">verified</span> Completed
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-outline uppercase mb-1">Trading Segment</p>
                    <p className="font-bold text-primary text-sm">Equity, F&O, Commodity</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                >
                  Go to Dashboard (Dummy)
                </button>
                <Link 
                  to="/"
                  className="w-full py-4 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-surface-container-highest transition-colors"
                >
                  Back to Home
                </Link>
              </div>
              <p className="text-[10px] text-outline italic">Note: This is a simulated active state for demonstration purposes.</p>
            </div>
          ) : (
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,31,102,0.06)] relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">Current Step</span>
                    <h2 className="text-2xl font-bold text-on-surface">Registration</h2>
                  </div>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden flex gap-1 p-0.5">
                  <div className="h-full w-1/3 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
                  <div className="h-full w-1/3 bg-surface-variant/30 rounded-full"></div>
                  <div className="h-full w-1/3 bg-surface-variant/30 rounded-full"></div>
                </div>
                <div className="flex justify-between mt-3 px-1">
                  <span className="text-[10px] font-bold text-primary uppercase">Identity</span>
                  <span className="text-[10px] font-bold text-outline uppercase">KYC Details</span>
                  <span className="text-[10px] font-bold text-outline uppercase">E-Sign</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Mobile Number</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm font-medium">+91</span>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-14 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium transition-all" 
                        placeholder="98765 43210" 
                        type="tel" 
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Email Address</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">mail</span>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium transition-all" 
                        placeholder="name@domain.com" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">PAN Number</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">badge</span>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium uppercase transition-all" 
                        placeholder="ABCDE1234F" 
                        type="text" 
                        required
                        value={formData.pan}
                        onChange={(e) => setFormData({...formData, pan: e.target.value.toUpperCase()})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Date of Birth</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">calendar_today</span>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium transition-all" 
                        placeholder="DD / MM / YYYY" 
                        type="text" 
                        required
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 p-4 rounded-xl flex gap-3 items-start mt-4">
                  <input className="mt-1 rounded text-primary focus:ring-primary" id="consent" type="checkbox" required defaultChecked />
                  <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="consent">
                    I authorize VS INVESTIFY and its partners to contact me via phone, email, or WhatsApp for my account opening application.
                  </label>
                </div>
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-5 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group" type="submit">
                  Continue to KYC
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </form>
              <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">security</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure Socket</span>
                </div>
                <div className="h-px w-8 bg-outline-variant"></div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">database</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">CDSL/NSDL</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
