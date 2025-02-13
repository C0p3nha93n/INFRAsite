import React, { useState, useEffect } from 'react';
import { Code, Play, Bug, Shield } from 'lucide-react';
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi';

const TEMPLATES = {
  solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InfrastruktProtocol {
    // Your code here
}`,
  rust: `use anchor_lang::prelude::*;

#[program]
pub mod infrastrukt_protocol {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        // Your code here
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}`,
  move: `module InfrastruktProtocol::main {
    use std::signer;
    use std::vector;

    struct Resource has key {
        data: vector<u8>
    }

    public fun initialize(account: &signer) {
        // Your code here
    }
}`
};

export const SmartContractWorkbench = () => {
  const [code, setCode] = useState(TEMPLATES.solidity);
  const [language, setLanguage] = useState('solidity');
  const { isConnected } = useAccount();

  useEffect(() => {
    setCode(TEMPLATES[language]);
  }, [language]);

  const handleDeploy = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    alert('Contract deployed successfully!');
  };

  const handleDebug = () => {
    alert('Debug mode activated');
  };

  const handleScan = () => {
    alert('Security Audit in progress...');
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-white/10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleDeploy}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00f2fe]/10 text-[#00f2fe] hover:bg-[#00f2fe]/20 transition-colors duration-200"
          >
            <Play size={16} />
            Deploy
          </button>
          <button 
            onClick={handleDebug}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200"
          >
            <Bug size={16} />
            Debug
          </button>
          <button 
            onClick={handleScan}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors duration-200"
          >
            <Shield size={16} />
            Audit Code
          </button>
        </div>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-black border border-white/10 rounded-lg px-3 py-1.5 text-sm"
        >
          <option value="solidity">Solidity</option>
          <option value="rust">Rust</option>
          <option value="move">Move</option>
        </select>
      </div>

      <div className="flex-1 bg-black/30 p-4 font-mono text-sm">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-transparent resize-none focus:outline-none text-[#00f2fe]"
          spellCheck="false"
        />
      </div>
    </div>
  );
};