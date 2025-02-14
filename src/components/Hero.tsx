import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "";
  const tokenSymbol = "";
  const contractSuffix = "TBA"; // Awewtvamt7MMxuq4gadK41N663ejeCFUv74QeE6Lpump
  
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress + tokenSymbol + contractSuffix);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4 pt-20"
    >
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        src="/INFRA.png"
        alt="INFRA"
        className="max-w-[1000px] w-full mb-4"
      />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-4xl font-mono font-bold text-[#ffe63a] mb-6"
      >
        CREATE, etc.
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-1xl font-mono font-italic text-white mb-4"
      >
        OFFICIAL $INFRA CA
      </motion.h2>
      
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          value={contractAddress + tokenSymbol + contractSuffix}
          readOnly
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white font-mono"
        />
        <button
          onClick={handleCopy}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-md transition-colors"
        >
          {copied ? <Check className="text-green-400" /> : <Copy className="text-white" />}
        </button>
      </div>
    </motion.section>
  );
};