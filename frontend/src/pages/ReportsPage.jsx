import React from 'react'
import { BarChart3, Download, FileText, CheckCircle, TrendingUp } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Reports & Analytics</h2>
          <p className="text-sm text-slate-500">Generate portfolio summaries, velocity charts, and compliance exports.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm">
          <Download className="w-4 h-4" />
          <span>Export Summary CSV</span>
        </button>
      </div>

      {/* Available Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Project Delivery Health Report</h3>
            <p className="text-xs text-slate-500 mt-1">Complete breakdown of all active projects, overdue deliverables, and calculated progress percentages.</p>
          </div>
          <button className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-800 text-left">Generate Report →</button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl w-fit mb-3">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Risk Severity & Mitigation Registry</h3>
            <p className="text-xs text-slate-500 mt-1">Audit log of all high and critical risks with corresponding mitigation strategies and ownership.</p>
          </div>
          <button className="mt-5 text-sm font-semibold text-rose-600 hover:text-rose-800 text-left">Generate Report →</button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Team Velocity & Milestone Summary</h3>
            <p className="text-xs text-slate-500 mt-1">Sprint completion metrics, task distribution by contributor, and on-time delivery percentages.</p>
          </div>
          <button className="mt-5 text-sm font-semibold text-emerald-600 hover:text-emerald-800 text-left">Generate Report →</button>
        </div>
      </div>
    </div>
  )
}
