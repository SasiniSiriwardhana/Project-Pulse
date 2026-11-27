import React from 'react'
import { Plus, AlertTriangle, ShieldCheck, Flame } from 'lucide-react'

const sampleRisks = [
  {
    id: 'RSK-01',
    title: 'Database Connection Pool Exhaustion',
    category: 'TECHNICAL',
    probability: 4,
    impact: 5,
    riskScore: 20,
    severity: 'CRITICAL',
    mitigation: 'Implement PgBouncer proxy layer and configure Prisma connection pooling thresholds.',
    status: 'IDENTIFIED',
    project: 'Core API Engine'
  },
  {
    id: 'RSK-02',
    title: 'Third-Party Auth Provider Rate Limits',
    category: 'EXTERNAL',
    probability: 3,
    impact: 4,
    riskScore: 12,
    severity: 'MEDIUM',
    mitigation: 'Implement local JWT caching and exponential backoff retry interceptor.',
    status: 'MITIGATING',
    project: 'Alpha Customer Portal'
  },
  {
    id: 'RSK-03',
    title: 'Senior Frontend Engineer Bandwidth Bottleneck',
    category: 'RESOURCE',
    probability: 2,
    impact: 3,
    riskScore: 6,
    severity: 'LOW',
    mitigation: 'Cross-train full-stack engineers on Tailwind design system components.',
    status: 'CLOSED',
    project: 'Mobile Web App'
  }
]

export default function RisksPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Project Risk Register & Matrix</h2>
          <p className="text-sm text-slate-500">Automated probability and impact quantification engine.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Log New Risk</span>
        </button>
      </div>

      {/* 5x5 Severity Formula Card */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Algorithmic Calculation Engine</span>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Risk Score = Probability (1–5) × Impact (1–5)</h3>
          <p className="text-sm text-slate-500 mt-1">
            Scores range from 1 to 25. Critical items (score ≥ 20) directly influence overall project health indicators.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">1–6 Low</span>
          <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">7–14 Medium</span>
          <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-700 border border-orange-200">15–19 High</span>
          <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 border border-red-200">20–25 Critical</span>
        </div>
      </div>

      {/* Risks Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Active Risk Registry</h3>
          <span className="text-xs text-slate-500 font-medium">3 Total Logged Risks</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold border-b border-slate-100">
              <tr>
                <th className="px-6 py-3">ID & Title</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">P × I</th>
                <th className="px-6 py-3">Score</th>
                <th className="px-6 py-3">Severity</th>
                <th className="px-6 py-3">Mitigation Plan</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleRisks.map((risk) => (
                <tr key={risk.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-400 block">{risk.id} · {risk.project}</span>
                    <span className="font-semibold text-slate-900">{risk.title}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded text-slate-700">
                      {risk.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">
                    {risk.probability} × {risk.impact}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-base font-bold text-slate-900">{risk.riskScore}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      risk.severity === 'CRITICAL' ? 'bg-red-50 text-red-700 border border-red-200' :
                      risk.severity === 'MEDIUM' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {risk.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-600 max-w-xs">
                    {risk.mitigation}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-slate-700">{risk.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
