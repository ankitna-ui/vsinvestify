import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="flex items-center gap-2 text-on-tertiary-fixed-variant bg-tertiary-fixed px-4 py-2 rounded-full font-bold text-sm">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
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
                    placeholder="John Doe" 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Phone Number</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                    placeholder="+91 00000 00000" 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">Email Address</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                  placeholder="john@example.com" 
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
              <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">send</span>
                Submit to WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info Side Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary-container text-white rounded-[2rem] p-10 flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <h2 className="text-2xl font-bold mb-6">Customer Support</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-sm opacity-60 font-medium">Call Us Directly</p>
                      <a href="tel:+919660039403" className="text-xl font-bold hover:underline">+91 96600 39403</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <div>
                      <p className="text-sm opacity-60 font-medium">WhatsApp Support</p>
                      <a href="https://wa.me/919660039402" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:underline">+91 96600 39402</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-sm opacity-60 font-medium">Email Support</p>
                      <a href="mailto:support@vsinvestify.in" className="text-xl font-bold hover:underline">support@vsinvestify.in</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm font-medium opacity-80 mb-4">Trust & Compliance</p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold border border-white/5">ISO 27001</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold border border-white/5">AMFI REGISTERED</div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-xs font-bold border border-white/5">SEBI CERTIFIED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Hubs Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary tracking-tight">Regional Hubs</h2>
            <p className="text-slate-500 mt-2 font-medium">Visit our local offices for personalized wealth advisory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "Jaipur", address: "B-42 First floor Rangoli plaza Maharana pratap road vaishali Nagar Jaipur 302034" },
              { city: "Dehradun", address: "Suite 12, Capital Plaza, Rajpur Road, Dehradun, Uttarakhand - 248001" },
              { city: "Jhansi", address: "First Floor, Heritage Mall, Civil Lines, Jhansi, Uttar Pradesh - 284001" }
            ].map((hub, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-48 rounded-2xl bg-slate-200 mb-6 relative overflow-hidden border border-outline-variant/10">
                  <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(hub.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${hub.city} Office Location`}
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{hub.city}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{hub.address}</p>
                <a 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline group" 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hub.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
