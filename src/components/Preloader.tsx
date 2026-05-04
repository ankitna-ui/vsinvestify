import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800); // Slightly longer for a more cinematic feel
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-[#001f66] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Gradients */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C5A059]/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-400/10 rounded-full blur-[150px]" 
          />

          <div className="relative flex flex-col items-center">
            {/* Logo Container - NO BACKGROUND */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Radial Glow behind logo */}
              <div className="absolute inset-[-40px] bg-white/20 rounded-full blur-[40px]" />
              <div className="absolute inset-[-20px] bg-white/10 rounded-full blur-[20px]" />

              <motion.img 
                animate={{ 
                  filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 30px rgba(255,255,255,0.6))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                src="https://lh3.googleusercontent.com/d/1EHq6iGOjfeXHjP2CAEXHMLMgB7QBNSxY" 
                alt="VS INVESTIFY" 
                className="h-28 md:h-36 w-auto object-contain relative z-20 brightness-[1.1] contrast-[1.1]"
              />
            </motion.div>

            {/* Glowing Line Loader */}
            <div className="mt-16 w-48 h-[2px] bg-white/10 rounded-full relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent shadow-[0_0_15px_#C5A059]"
              />
            </div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-6 flex flex-col items-center gap-2"
            >
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.6em]">
                Authenticating Session
              </span>
              <div className="flex gap-1.5 mt-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      backgroundColor: ["rgba(255,255,255,0.2)", "rgba(197,160,89,1)", "rgba(255,255,255,0.2)"]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-1 h-1 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Institutional Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 flex flex-col items-center gap-4"
          >
            <div className="h-px w-12 bg-white/20"></div>
            <p className="text-white text-[8px] font-bold uppercase tracking-[0.8em]">Financial Precision</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
