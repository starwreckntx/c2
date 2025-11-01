
import React from 'react';
import { nodes, auditMetrics, behavioralProfile, checklistItems } from './constants';
import { Section, NodeCard, Gauge } from './components/DashboardComponents';
import { CheckIcon } from './components/icons';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <main className="max-w-screen-xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-300 tracking-wider">StarWreck Alpha Topology Auditor</h1>
          <p className="text-slate-400 mt-2">Context Restoration Packet: <code className="text-purple-300">cr-YYYYMMDD-HHMMSS</code></p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Section title="Active Node Topology">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {nodes.map((node) => (
                  <NodeCard key={node.id} node={node} />
                ))}
              </div>
            </Section>

            <Section title="Audit Parameters">
              <div className="space-y-6">
                {auditMetrics.map((metric) => (
                  <div key={metric.name} className="bg-slate-900/70 p-4 rounded-md border border-slate-700">
                    <h4 className="font-semibold text-green-400 capitalize">{metric.name.replace(/_/g, ' ')}</h4>
                    <p className="text-sm text-slate-400 mt-1">{metric.description}</p>
                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                      <p className="text-xs font-semibold text-slate-300 mb-1">Evaluation:</p>
                      <p className="text-sm text-slate-400 whitespace-pre-line">{metric.evaluation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
             <Section title="Project Context: Recursive Dialectic Committee (RDC)">
              <div className="space-y-4 text-slate-300 text-sm">
                 <p><span className="font-semibold text-slate-100">Status:</span> <span className="text-yellow-400">Designed, Not Operational</span></p>
                <p>A 5-round Thesis-Antithesis-Synthesis iterative refinement process.</p>
                <div>
                  <h5 className="font-semibold text-slate-100 mb-2">Committee Structure:</h5>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li><span className="font-medium text-cyan-300">Thesis Committee:</span> Gemini 2.5 Pro</li>
                    <li><span className="font-medium text-cyan-300">Antithesis Committee:</span> Claude Sonnet 4.5, Qwen3-VL, Qwen3-Omni</li>
                    <li><span className="font-medium text-cyan-300">Synthesis Committee:</span> Gemini 2.5 Pro, Claude Sonnet 4.5</li>
                  </ul>
                </div>
              </div>
            </Section>
          </div>

          <div className="space-y-8">
            <Section title="Behavioral Profile">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                {behavioralProfile.map((profile) => (
                  <Gauge key={profile.name} label={profile.name} value={profile.value} />
                ))}
              </div>
            </Section>

            <Section title="Initialization Checklist">
                <ul className="space-y-3">
                    {checklistItems.map((item, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                            <CheckIcon className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="Meta-Methodology">
                 <div className="space-y-2 text-sm text-slate-300">
                     <p><strong className="text-slate-100">Principle:</strong> Model-agnostic cognitive orchestration.</p>
                     <p><strong className="text-slate-100">Approach:</strong> Abduct every model with cognition-level potential.</p>
                     <p><strong className="text-slate-100">Goal:</strong> Framework generator using AI to build AI evaluation systems.</p>
                 </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
