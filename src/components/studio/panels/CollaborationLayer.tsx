import React from 'react';
import { Users, GitBranch, History } from 'lucide-react';

export const CollaborationLayer = () => {
  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      <button className="p-2 bg-black border border-white/10 rounded-lg hover:border-[#00f2fe] transition-colors duration-200">
        <Users size={20} className="text-[#00f2fe]" />
      </button>
      <button className="p-2 bg-black border border-white/10 rounded-lg hover:border-[#00f2fe] transition-colors duration-200">
        <GitBranch size={20} className="text-[#00f2fe]" />
      </button>
      <button className="p-2 bg-black border border-white/10 rounded-lg hover:border-[#00f2fe] transition-colors duration-200">
        <History size={20} className="text-[#00f2fe]" />
      </button>
    </div>
  );
};