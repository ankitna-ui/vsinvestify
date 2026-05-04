import React, { useState } from 'react';
import { 
  BadgeCheck, 
  Send, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Navigation 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '919660039402';
    const text = `*New Inquiry from VS INVESTIFY*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Get in Touch</span>
            <h1 className="text-6xl md:text-7xl font-bold text-primary tracking-tighter leading-tight">
              We're here to <br />scale your wealth.
            </h1>
          </div>
          <div className="hidden lg:block pb-4">
            <div className="flex items-center gap-2 text-[#002d0d] bg-emerald-50 px-4 py-2 rounded-full font-bold text-sm border border-emerald-100">
              <BadgeCheck size={18} className="text-emerald-600" />
              SEBI Registered Investment Advisor
            </div>
          </div>
        </div>

      {/* Map Section */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="w-full h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-surface-container-lowest">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.733596723234!2d75.73602497522432!3d26.911881776648733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db37998399999%3A0x67890abcdef12345!2sRangoli%20Plaza!5e0!3m2!1sen!2sin!4v1711288479000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="VS INVESTIFY Office Location"
          ></iframe>
        </div>
      </section>

      {/* Bento Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-[2rem] p-10 shadow-[0_20px_40px_rgba(0,31,102,0.04)]">
            <h2 className="text-2xl font-bold text-primary mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                    placeholder="Enter your full name" 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                      setFormData({...formData, name: val});
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Phone Number</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                    placeholder="9876543210" 
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Please enter a valid 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      if (val.length <= 10) setFormData({...formData, phone: val});
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Email Address</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                  placeholder="your.email@example.com" 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Message</label>
                <textarea 
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                  placeholder="How can we help scale your portfolio?" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2">
                <Send size={20} />
                Submit to WhatsApp
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-white rounded-[2.5rem] p-10 flex flex-col justify-between h-full min-h-[500px] relative overflow-hidden group shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-125 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-2 block">Premium Concierge</span>
                    <h2 className="text-3xl font-extrabold tracking-tight">Private Wealth Desk</h2>
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/80">Priority Online</span>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="group/item flex items-start gap-5">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover/item:bg-white group-hover/item:text-[#0a1128] transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-bold uppercase tracking-widest mb-1">Direct Line</p>
                      <a href="tel:+919660039402" className="text-xl font-bold hover:text-[#C5A059] transition-colors">+91 96600 39402</a>
                      <p className="text-[10px] text-white/40 mt-1">Available Mon-Sat, 9 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="group/item flex items-start gap-5">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover/item:bg-[#25D366] group-hover/item:text-white transition-all duration-300">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-bold uppercase tracking-widest mb-1">WhatsApp Desk</p>
                      <a href="https://wa.me/919660039402" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-[#25D366] transition-colors">+91 96600 39402</a>
                      <p className="text-[10px] text-white/40 mt-1">Fastest response for portfolio queries</p>
                    </div>
                  </div>

                  <div className="group/item flex items-start gap-5">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover/item:bg-white group-hover/item:text-[#0a1128] transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-bold uppercase tracking-widest mb-1">Global Desk</p>
                      <a href="mailto:info@vsinvestify.in" className="text-xl font-bold hover:text-[#C5A059] transition-colors">info@vsinvestify.in</a>
                      <p className="text-[10px] text-white/40 mt-1">For institutional & NRE inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-10 border-t border-white/10">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Accredited Compliance</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-white/80">ISO 27001 SECURE</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-white/80">SEBI REGISTERED</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold text-white/80">AMFI CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary tracking-tight">Regional Hubs</h2>
            <p className="text-slate-500 mt-2 font-medium">Visit our local offices for personalized wealth advisory.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Main Hub: Jaipur */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[2.5rem] border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
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
                    <a 
                      className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg group" 
                      href="https://www.google.com/maps/search/?api=1&query=B-42 First floor Rangoli plaza Maharana pratap road vaishali Nagar Jaipur 302034"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Maps
                      <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="aspect-video bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden shadow-inner group-hover:shadow-lg transition-all duration-700">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.733596723234!2d75.73602497522432!3d26.911881776648733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db37998399999%3A0x67890abcdef12345!2sRangoli%20Plaza!5e0!3m2!1sen!2sin!4v1711288479000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="VS INVESTIFY Jaipur Headquarters"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Hubs */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 hover:shadow-xl transition-all duration-500 hover:-translate-x-2 cursor-default group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-0.5 block opacity-60">Regional Node</span>
                    <h3 className="text-xl font-bold text-primary">Dehradun</h3>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 hover:shadow-xl transition-all duration-500 hover:-translate-x-2 cursor-default group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-0.5 block opacity-60">Regional Node</span>
                    <h3 className="text-xl font-bold text-primary">Jhansi</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
