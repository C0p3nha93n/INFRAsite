import React from 'react';
import { Link2, Database, Lock } from 'lucide-react';

export const CrossChainToolkit = () => {
  return (
    <div className="h-full p-4">
      <div className="flex items-center gap-8">
        {/* Bridge Configuration */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Link2 size={16} className="text-[#00f2fe]" />
            Bridge Configuration
          </h3>
          <select className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm">
            <option value="wormhole">Wormhole</option>
            <option value="layerzero">LayerZero</option>
            <option value="ibc">IBC</option>
          </select>
        </div>

        {/* Oracle Integration */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Database size={16} className="text-[#00f2fe]" />
            Oracle Integration
          </h3>
          <select className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm">
            <option value="chainlink">Chainlink</option>
            <option value="pyth">Pyth</option>
          </select>
        </div>

        {/* Privacy Tools */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Lock size={16} className="text-[#00f2fe]" />
            Privacy Tools
          </h3>
          <select className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm">
            <option value="zksnarks">zkSNARKs</option>
            <option value="coinjoin">CoinJoin</option>
          </select>
        </div>
      </div>
    </div>
  );
};