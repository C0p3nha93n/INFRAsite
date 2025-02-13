import React, { useEffect, useState } from 'react';
import { Activity, Gauge, Server, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export const DeploymentHub = () => {
  const [metrics, setMetrics] = useState({
    tps: 0,
    gas: 0,
    uptime: 99.9,
    latency: 45,
    sync: 100
  });

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics(prev => ({
        tps: Math.floor(Math.random() * 500) + 2000, // 2000-2500 TPS
        gas: Math.floor(Math.random() * 20) + 15, // 15-35 Gwei
        uptime: Math.min(100, prev.uptime + (Math.random() * 0.05 - 0.025)), // Smaller fluctuation
        latency: Math.max(20, Math.min(100, prev.latency + (Math.random() * 5 - 2.5))), // 20-100ms, smaller changes
        sync: Math.min(100, prev.sync + (Math.random() * 0.1 - 0.05)) // Smaller fluctuation
      }));
    };

    const interval = setInterval(updateMetrics, 15000); // Slower update rate (15 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Activity className="text-[#00f2fe]" />
        Deployment Hub
      </h2>

      {/* Network Metrics */}
      <div className="space-y-4">
        <motion.div 
          className="border border-white/10 rounded-lg p-4"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1.5 }} // Slower animation
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/60">TPS</span>
            <motion.span 
              className="text-[#00f2fe]"
              key={metrics.tps}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} // Slower animation
            >
              {metrics.tps.toLocaleString()}
            </motion.span>
          </div>
          <motion.div 
            className="h-12 bg-black/30 rounded-lg overflow-hidden"
            animate={{ width: '100%' }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00f2fe]/20 to-[#00f2fe]/40"
              animate={{ width: `${(metrics.tps / 3000) * 100}%` }}
              transition={{ duration: 1.5 }} // Slower animation
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="border border-white/10 rounded-lg p-4"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1.5, delay: 0.5 }} // Slower animation
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/60">Gas (Gwei)</span>
            <motion.span 
              className="text-[#00f2fe]"
              key={metrics.gas}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} // Slower animation
            >
              {metrics.gas}
            </motion.span>
          </div>
          <motion.div 
            className="h-12 bg-black/30 rounded-lg overflow-hidden"
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-[#00f2fe]/20 to-[#00f2fe]/40"
              animate={{ width: `${(metrics.gas / 40) * 100}%` }}
              transition={{ duration: 1.5 }} // Slower animation
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Node Status */}
      <motion.div 
        className="border border-white/10 rounded-lg p-4"
        animate={{ opacity: [0.8, 1] }}
        transition={{ duration: 2 }} // Slower animation
      >
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <Server size={16} className="text-[#00f2fe]" />
          Node Health
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Uptime</span>
            <motion.span 
              className="text-green-400"
              key={metrics.uptime}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }} // Slower animation
            >
              {metrics.uptime.toFixed(1)}%
            </motion.span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Latency</span>
            <motion.span 
              className="text-[#00f2fe]"
              key={metrics.latency}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }} // Slower animation
            >
              {Math.round(metrics.latency)}ms
            </motion.span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Sync</span>
            <motion.span 
              className="text-green-400"
              key={metrics.sync}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }} // Slower animation
            >
              {metrics.sync.toFixed(1)}%
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Emergency Controls */}
      <div className="border border-white/10 rounded-lg p-4">
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle size={16} className="text-[#00f2fe]" />
          Emergency Controls
        </h3>
        <button className="w-full p-2 text-sm border border-red-500/50 text-red-500 rounded-lg hover:bg-red-500/10 transition-colors duration-200">
          Emergency Pause
        </button>
      </div>
    </div>
  );
};