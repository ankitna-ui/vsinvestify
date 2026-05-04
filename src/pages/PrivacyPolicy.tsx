import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, CheckCircle, Scale, Globe, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-20 bg-slate-100 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[1rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-200 overflow-hidden relative"
        >
          {/* Header/Letterhead */}
          <div className="bg-[#001f66] p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
              <img 
                src="https://lh3.googleusercontent.com/d/1EHq6iGOjfeXHjP2CAEXHMLMgB7QBNSxY" 
                alt="VS INVESTIFY" 
                className="h-12 w-auto object-contain brightness-0 invert mb-6"
              />
              <h1 className="text-3xl font-extrabold tracking-tight">Privacy & Data Protection Policy</h1>
              <p className="text-blue-200 mt-2 text-sm font-medium uppercase tracking-[0.2em]">Institutional Wealth Management Division</p>
            </div>
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-100 mb-1">Document ID</p>
              <p className="font-mono text-xs mb-4">VSI-PRIV-2026-004</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-100 mb-1">Effective Since</p>
              <p className="text-sm font-bold">May 04, 2026</p>
            </div>
          </div>

          {/* Policy Body */}
          <div className="p-10 md:p-20 space-y-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-[#001f66] mb-6">Introduction</h2>
              <p className="text-slate-600 leading-relaxed italic">
                "At VS INVESTIFY, we consider your privacy as the cornerstone of our advisory relationship. This document outlines our rigorous standards for data handling, ensuring that your financial footprint remains confidential and secure."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#001f66] flex items-center gap-3">
                  <Shield size={20} className="text-[#C5A059]" />
                  1. Information we Collect
                </h3>
                <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                  <p>We collect and process the following categories of data:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>KYC Data:</strong> PAN, Aadhaar, Passport, and other regulatory identifiers.</li>
                    <li><strong>Financial Data:</strong> Bank account details, transaction history, and asset allocations.</li>
                    <li><strong>Technical Data:</strong> IP addresses, browser fingerprinting for security, and device identifiers.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#001f66] flex items-center gap-3">
                  <Lock size={20} className="text-[#C5A059]" />
                  2. Security Architecture
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our systems are built on an ISO 27001 compliant framework. We use 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. Multi-factor authentication (MFA) is mandatory for all internal access to client databases.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#001f66] flex items-center gap-3">
                  <Scale size={20} className="text-[#C5A059]" />
                  3. Regulatory Compliance
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  VS INVESTIFY adheres to the guidelines set by the Securities and Exchange Board of India (SEBI) and the Information Technology Act, 2000. We comply with all PMLA (Prevention of Money Laundering) requirements.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-lg font-bold text-[#001f66] flex items-center gap-3">
                  <Globe size={20} className="text-[#C5A059]" />
                  4. Third-Party Sharing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Data is only shared with authorized entities such as NSE, BSE, NSDL, CDSL, and KRA agencies solely for account processing. We do not engage in data monetization or selling leads to third parties.
                </p>
              </section>
            </div>

            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-[#001f66] mb-4">5. Grievance Redressal</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                If you have any concerns regarding your data privacy, you may contact our appointed Compliance Officer. We commit to acknowledging your grievance within 24 hours and resolving it within 15 business days.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-bold text-[#001f66]">compliance@vsinvestify.in</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Designation</p>
                  <p className="text-sm font-bold text-[#001f66]">Chief Data Privacy Officer</p>
                </div>
              </div>
            </section>

            {/* Signature Section */}
            <div className="pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-end gap-10">
              <div className="space-y-4 max-w-sm">
                <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest font-bold">Official Declaration</p>
                <p className="text-xs text-slate-500 italic">
                  "I hereby certify that this policy represents the full and current data protection standards of VS INVESTIFY as of the effective date mentioned above."
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                   <p className="font-['Playfair_Display'] text-3xl text-[#001f66] italic opacity-60">VS Wealth Management</p>
                   <div className="h-px w-48 bg-[#001f66]/20 mx-auto mt-2"></div>
                </div>
                <p className="text-[10px] font-bold text-[#001f66] uppercase tracking-[0.2em]">Authorized Signatory</p>
                <p className="text-[9px] text-slate-400 mt-1 uppercase">VS INVESTIFY Compliance Division</p>
              </div>
            </div>
          </div>

          {/* Footer Branding */}
          <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
             <div className="flex items-center justify-center gap-2 text-[#001f66] opacity-30">
               <Shield size={14} />
               <span className="text-[10px] font-bold uppercase tracking-widest">ISO 27001 : 2022 Certified Architecture</span>
             </div>
          </div>
        </motion.div>
        
        <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-widest">
          © 2026 VS INVESTIFY. This document is electronically generated and requires no physical signature for validity.
        </p>
      </div>
    </main>
  );
}
