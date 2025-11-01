
import React from 'react';
import type { Node } from '../constants';
import { StatusOnlineIcon } from './icons';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg">
    <h2 className="text-lg font-semibold text-cyan-400 p-4 border-b border-slate-700">{title}</h2>
    <div className="p-4 md:p-6">{children}</div>
  </section>
);

interface NodeCardProps {
  node: Node;
}

export const NodeCard: React.FC<NodeCardProps> = ({ node }) => (
  <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 hover:border-cyan-400 transition-colors duration-300">
    <div className="flex justify-between items-center mb-3">
      <h3 className={`text-xl font-bold capitalize ${node.color}`}>{node.id}</h3>
      <div className="flex items-center space-x-2 text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
        <StatusOnlineIcon className={`w-2 h-2 ${node.color}`} />
        <span>{node.status.replace(/_/g, ' ')}</span>
      </div>
    </div>
    <p className="text-sm text-slate-400 mb-1"><span className="font-semibold text-slate-300">Role:</span> {node.role}</p>
    {node.architecture && <p className="text-sm text-slate-400 mb-1"><span className="font-semibold text-slate-300">Architecture:</span> <code className="text-purple-300 bg-slate-800 px-1 rounded">{node.architecture}</code></p>}
    {node.protocol && <p className="text-sm text-slate-400 mb-1"><span className="font-semibold text-slate-300">Protocol:</span> <code className="text-purple-300 bg-slate-800 px-1 rounded">{node.protocol}</code></p>}
    {node.authority && <p className="text-sm text-slate-400 mb-1"><span className="font-semibold text-slate-300">Authority:</span> {node.authority}</p>}
    {node.function && <p className="text-sm text-slate-400 mb-1"><span className="font-semibold text-slate-300">Function:</span> {node.function}</p>}
  </div>
);

interface GaugeProps {
  value: number; // 0 to 1
  label: string;
}

export const Gauge: React.FC<GaugeProps> = ({ value, label }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - value * circumference;
  const percentage = Math.round(value * 100);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            className="text-slate-700"
            strokeWidth="12"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="text-cyan-400 transition-all duration-500"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
          {percentage}%
        </span>
      </div>
      <span className="text-sm text-center text-slate-400">{label}</span>
    </div>
  );
};
