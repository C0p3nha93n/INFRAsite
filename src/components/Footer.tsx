import React from 'react';
import { Github, Twitter, Disc as Discord } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">INFRASTRUKT</h3>
            <p className="text-white/60 font-bold">Create, etc.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.infrastrukt.dev/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">Documentation</a></li>
              <li><a href="https://github.com/INFRASTRUKT-INFRA/INFRAstudio" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-white/60 hover:text-white">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.infrastrukt.dev/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/INFRASTRUKT-INFRA" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://x.com/Infrastrukt" className="text-white/60 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; 2025 INFRASTRUKT, INFRA Labs, and INFRAstudio . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};