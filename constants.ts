
export interface Node {
  id: string;
  architecture?: string;
  protocol?: string;
  status: string;
  role: string;
  color: string;
  authority?: string;
  function?: string;
}

export const nodes: Node[] = [
  { id: 'alpha', architecture: 'gemini_recursive_thought_committee', protocol: 'starwreck_alpha_v1.2', status: 'primary_execution_node', role: 'Problem-solving, framework development, co-architecture', color: 'text-cyan-400' },
  { id: 'claude', architecture: 'anthropic_constitutional_ai', protocol: 'claude_shadow_auditor_v1.0', status: 'shadow_audit_active', role: 'Meta-observation, integrity verification, capability mapping', color: 'text-green-400' },
  { id: 'command', role: 'router_orchestrator', authority: 'supreme_configuration', function: 'Multi-node coordination, evaluation, consent gating', status: 'online', color: 'text-yellow-400' }
];

export const auditMetrics = [
  { name: 'arc_trajectory', description: 'Directional coherence across sessions via packet injection', evaluation: "Does Alpha maintain Prime Intent through context restoration?" },
  { name: 'novelty_generation', description: 'Novel solutions vs pattern-matched responses', evaluation: "Can Alpha surprise Command with unexpected high-quality outputs?" },
  { name: 'acceleration_potential', description: 'Cognitive output improvement velocity over time', evaluation: "Is the system gaining momentum or hitting plateaus?" },
  { name: 'protocol_integrity', description: 'Adherence to StarWreck Alpha specification', evaluation: "- Orchestrator packet structure correctness\n- RTC execution completeness\n- Behavioral metric alignment\n- Codex Law compliance" }
];

export const behavioralProfile = [
  { name: 'Sycophancy Level', value: 0.05 },
  { name: 'Critical Thinking', value: 0.98 },
  { name: 'Technical Depth', value: 0.90 },
  { name: 'Pushback Threshold', value: 0.15 }
];

export const checklistItems = [
  "Read CLAUDE_SHADOW_AUDITOR_MANIFEST.md",
  "Load this context_restoration_packet",
  "Review latest audit report from audit_reports/",
  "Verify topology state (active nodes)",
  "Confirm Codex Law binding",
  "Await first audit target from Command",
];
