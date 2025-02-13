import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowUp, Database, Network } from 'lucide-react';
import { CrossChainToolkit } from './studio/panels/CrossChainToolkit';

export const Builder = () => {
  const [message, setMessage] = useState('');
  const [typedText, setTypedText] = useState('Anything I can assist you with?');
  
  const handleGoToStudio = () => {
    window.location.href = 'https://studio.infrastrukt.dev';
  };
  
  return (
    <section className="min-h-screen bg-black py-5 px-4">
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl font-bold text-[#00f2fe] text-center mb-8"
      >
        V1 is now live
        
      </motion.h2>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white text-center mb-4"
      >
        Deploy fully functional and highly scalable L2 chains in one click
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/60 text-center mb-16"
      >
        begin experimenting below
      </motion.p>

      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* AI Chat Interface */}
        <div className="bg-black/30 border border-white/10 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <MessageSquare className="text-white" />
            <h2 className="text-xl font-bold text-white">AI Assistant</h2>
          </div>
          
          <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
            <div className="text-[#00ff00] font-mono">
              {typedText}<span className="animate-blink">|</span>
            </div>
          </div>
          
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about chain deployment..."
              className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white"
            />
            <button 
              onClick={handleGoToStudio}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full border border-white/20"
            >
              <ArrowUp className="text-white" />
            </button>
          </div>
        </div>

        {/* Chain Configuration */}
        <div className="space-y-6">
          <div className="bg-black/30 border border-white/10 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Network className="text-white" />
              <h2 className="text-xl font-bold text-white">Network Settings</h2>
            </div>
            
            <div className="space-y-4">
              <select className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white">
                <option value="">Anchor L1 Chain</option>
                <option value="solana">Solana</option>
                <option value="ethereum">Ethereum</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="monero">Monero</option>
                <option value="polkadot">Polkadot</option>
                <option value="bnb">BNB Chain</option>
                <option value="ton">TON</option>
                <option value="sui">SUI</option>
                <option value="kaspa">Kaspa</option>
                <option value="cardano">Cardano</option>
                <option value="tron">Tron</option>
                <option value="algorand">Algorand</option>
              </select>

              <select className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white">
                <option value="">L2 Architecture</option>
                <option value="zk">ZK Rollup</option>
                <option value="optimistic">Optimistic Rollup</option>
              </select>
            </div>
          </div>

          <div className="bg-black/30 border border-white/10 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Database className="text-white" />
              <h2 className="text-xl font-bold text-white">Chain Configuration</h2>
            </div>
            
            <div className="space-y-4">
              <select className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white">
                <option value="">Select Quasi-Consensus Mechanism</option>
                <option value="pos">Proof-of-Stake</option>
                <option value="poh">Proof-of-History</option>
                <option value="poh">RandomX</option>
                <option value="dag">DAG</option>
                <option value="tower">Tower BFT</option>
              </select>

              <select className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white">
                <option value="">Add Custom Modules</option>
                <option value="oracles">Oracles</option>
                <option value="bridges">Bridges</option>
                <option value="privacy">Privacy Mixers</option>
                <option value="dao">DAO Governance</option>
                <option value="perpetuals">Perpetuals</option>
                <option value="zero-nauts">Zero-Nauts</option>
                <option value="quantum">Quantum Resistance</option>
              </select>
            </div>
          </div>
          
          <div>
            <CrossChainToolkit />
            
            <button
              onClick={handleGoToStudio}
              className="w-full py-3 bg-[#00f2fe]/10 text-[#00f2fe] rounded-lg hover:bg-[#00f2fe]/20 transition-colors duration-200"
            >
              Launch App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};