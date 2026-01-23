import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden selection:bg-white selection:text-black">
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.1]"></div>
      
      {/* Animated Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6"
      >
        {/* Large 404 Typography */}
        <h1 className="text-[20vw] font-black leading-none tracking-tighter mix-blend-difference select-none">
          404
        </h1>
        
        <div className="max-w-md mx-auto space-y-8 mt-4">
           <p className="text-xl text-gray-400 font-light leading-relaxed">
             The page you're looking for seems to have drifted into the digital void.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link 
               to="/"
               className="group px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:scale-105 transition-transform duration-300"
             >
               Return Home
             </Link>
             <Link 
               to="/portfolio"
               className="group px-8 py-4 border border-white/20 text-white font-medium rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
             >
               View Works <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
        </div>
      </motion.div>

      {/* Footer / Context */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
         <p className="font-mono text-xs uppercase tracking-widest text-gray-600">Error: Page_Not_Found</p>
      </div>
    </div>
  );
}
