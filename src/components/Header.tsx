import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { walletConnect } from 'wagmi/connectors';
import { ethers } from 'ethers';

export const Header = () => {
  const { isConnected, address } = useAccount();
  const { connect } = useConnect({
    connector: injected(),
  });
  const { disconnect } = useDisconnect();

  const isStudio = window.location.hash === '#studio';

  const handleConnect = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  const handleLaunchApp = () => {
    window.location.hash = 'studio';
    window.location.reload(); // Ensure proper reload when hash changes
  };

  const buttonText = isStudio 
    ? isConnected 
      ? `${address?.slice(0, 6)}...${address?.slice(-4)}` 
      : 'Connect Wallet'
    : 'Launch App';

  const handleClick = isStudio ? handleConnect : handleLaunchApp;

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-center space-x-2 text-white">
            <img 
              src="/INFRASTRUKT w symbol.png" 
              alt="INFRASTRUKT" 
              className="h-8 object-contain"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://docs.infrastrukt.dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              /Docs
            </a>
            <a 
              href="https://github.com/INFRASTRUKT-INFRA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Github</span>
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/INFRASTRUKT-INFRA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://twitter.com/infrastrukt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          <button 
            onClick={handleClick}
            className="px-6 py-2 border border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  );
};