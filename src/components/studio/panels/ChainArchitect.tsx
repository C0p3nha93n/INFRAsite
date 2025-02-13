import React from 'react';
import { motion } from 'framer-motion';
import { Box, GitBranch, Cpu, Coins } from 'lucide-react';

export const ChainArchitect = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <img src="./src/INFRAstudio good.png" alt="INFRAstudio" className="h-8" />
      </h2>

      {/* Topology Builder */}
      <div className="border border-white/10 rounded-lg p-4">
        <h3 className="text-sm font-semibold mb-4 text-[#00f2fe]">Network Topology</h3>
        <div className="aspect-square bg-black/30 rounded-lg border border-white/10 mb-4">
          {/* 3D Visualization would go here */}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="p-2 text-sm border border-white/10 rounded-lg hover:border-[#00f2fe] transition-colors duration-200">
            DeFi Chain
          </button>
          <button className="p-2 text-sm border border-white/10 rounded-lg hover:border-[#00f2fe] transition-colors duration-200">
            NFT Optimized
          </button>
        </div>
      </div>

      {/* Core Configuration */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-white/60 flex items-center gap-2">
            <GitBranch size={16} className="text-[#00f2fe]" />
            Consensus Engine
          </label>
          <select className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm">
            <option value="tendermint">Tendermint</option>
            <option value="snowman">Snowman</option>
            <option value="narwhal">Narwhal</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white/60 flex items-center gap-2">
            <Cpu size={16} className="text-[#00f2fe]" />
            Virtual Machine
          </label>
          <select className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm">
            <option value="evm">EVM</option>
            <option value="svm">SVM</option>
            <option value="movevm">MoveVM</option>
            <option value="cosmwasm">CosmWasm</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white/60 flex items-center gap-2">
            <Coins size={16} className="text-[#00f2fe]" />
            Tokenomics
          </label>
          <button className="w-full p-2 text-sm border border-white/10 rounded-lg hover:border-[#00f2fe] transition-colors duration-200">
            Generate Distribution Model
          </button>
        </div>
      </div>
    </div>
  );
};