import React from 'react';
import { ChainArchitect } from './panels/ChainArchitect';
import { SmartContractWorkbench } from './panels/SmartContractWorkbench';
import { DeploymentHub } from './panels/DeploymentHub';
import { CrossChainToolkit } from './panels/CrossChainToolkit';
import { CollaborationLayer } from './panels/CollaborationLayer';

export const StudioLayout = () => {
  return (
    <div className="h-screen bg-black text-white pt-20">
      <div className="h-[calc(100vh-20px-192px)] flex"> {/* Adjusted height to account for CrossChainToolkit */}
        {/* Left Panel - Chain Architect */}
        <div className="w-80 border-r border-white/10 overflow-y-auto">
          <ChainArchitect />
        </div>

        {/* Center - Smart Contract Workbench */}
        <div className="flex-1 flex flex-col">
          <SmartContractWorkbench />
        </div>

        {/* Right Panel - Deployment Hub */}
        <div className="w-80 border-l border-white/10 overflow-y-auto">
          <DeploymentHub />
        </div>
      </div>

      {/* Bottom Dock - Cross Chain Toolkit */}
      <div className="h-48 border-t border-white/10">
        <CrossChainToolkit />
      </div>

      {/* Floating UI - Collaboration Layer */}
      <CollaborationLayer />
    </div>
  );
};