import { motion } from 'motion/react';
import { FileText, Scale, Gavel, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#001f66]/5 rounded-2xl flex items-center justify-center text-[#001f66]">
              <FileText size={24} />
            </div>
            <h1 className="text-4xl font-extrabold text-[#001f66] tracking-tight">Terms of Service</h1>
          </div>
          
          <p className="text-slate-500 mb-12 leading-relaxed">
            Please read these terms carefully. By using VS INVESTIFY's platform, you agree to comply with and be bound by these legal terms.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                1. Eligibility
              </h2>
              <p className="text-slate-600 leading-relaxed">
                You must be at least 18 years old and reside in a jurisdiction where our services are permitted. By registering, you warrant that you are legally capable of entering into binding contracts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                2. Advisory Disclaimer
              </h2>
              <p className="text-slate-600 leading-relaxed">
                While VS INVESTIFY provides institutional-grade research and advisory, all final investment decisions are the sole responsibility of the client. Past performance is not indicative of future results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                3. Platform Usage
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Unauthorized use of our platform, including data scraping, automated trading without API approval, or distribution of our proprietary research, is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                4. Account Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                You are responsible for maintaining the confidentiality of your login credentials. VS INVESTIFY will never ask for your password via phone or email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                5. Termination
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
