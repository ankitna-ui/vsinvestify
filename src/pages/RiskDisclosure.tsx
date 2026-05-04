import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, ShieldAlert, Info } from 'lucide-react';

export default function RiskDisclosure() {
  return (
    <main className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-xl border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-amber-500/5 rounded-2xl flex items-center justify-center text-amber-600">
              <AlertTriangle size={24} />
            </div>
            <h1 className="text-4xl font-extrabold text-[#001f66] tracking-tight">Risk Disclosure</h1>
          </div>
          
          <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl mb-12">
            <p className="text-amber-800 text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Info size={16} /> Statutory Warning
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Investments in the securities market are subject to market risks. Read all related documents carefully before investing. No assurance or guarantee is provided for any returns.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                1. Market Volatility Risk
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Prices of equities, derivatives, and commodities can fluctuate significantly in response to global events, economic indicators, and corporate news. You may lose part or all of your invested capital.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                2. Liquidity Risk (Unlisted Shares)
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Unlisted and pre-IPO shares are inherently illiquid. There is no guaranteed secondary market for these securities, and you may be unable to sell your holdings for an extended period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                3. Derivative Leverage Risk
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Trading in Futures and Options (F&O) involves high leverage. While this can amplify gains, it can also lead to losses exceeding your initial margin deposit. Only experienced traders should participate in F&O.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#001f66] mb-4 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#C5A059] rounded-full"></div>
                4. Operational & Technology Risk
              </h2>
              <p className="text-slate-600 leading-relaxed">
                System failures, internet outages, or technical glitches can prevent order execution or data updates. VS INVESTIFY is not liable for losses caused by third-party infrastructure failures.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs font-medium">
              INVEST RESPONSIBLY. NEVER INVEST MONEY YOU CANNOT AFFORD TO LOSE.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
