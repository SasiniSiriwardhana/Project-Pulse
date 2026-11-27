import React from 'react'
import { 
  FolderKanban, 
  CheckCircle2, 
  Clock, 
  AlertOctagon, 
  ShieldAlert, 
  TrendingUp, 
  Activity,
  ArrowUpRight
} from 'lucide-react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts'

const kpis = [
  { label: 'Total Projects', value: '12', change: '+2 this month', icon: FolderKanban, color: 'text-blue-600 bg-blue-50' },
  { label: 'Active Projects', value: '8', change: '6 on schedule', icon: Activity, color: 'text-indigo-600 bg-indigo-50' },
  { label: 'Completed Projects', value: '4', change: '100% delivered', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
  { label: 'Total Tasks', value: '84', change: '52 completed', icon: TrendingUp, color: 'text-slate-600 bg-slate-100' },
  { label: 'Overdue Tasks', value: '3', change: 'Immediate action', icon: Clock, color: 'text-red-600 bg-red-50' },
  { label: 'Critical Risks', value: '2', change: 'Score >= 20', icon: AlertOctagon, color: 'text-rose-600 bg-rose-50' },
]

const progressData = [
  { name: 'Alpha Portal', progress: 85 },
  { name: 'Risk Analytics', progress: 65 },
  { name: 'Core API Engine', progress: 92 },
  { name: 'Mobile Web App', progress: 40 },
  { name: 'Billing Gateway', progress: 20 },
]

const taskStatusData = [
  { name: 'Completed', value: 52, color: '#10b981' },
  { name: 'In Progress', value: 18, color: '#3b82f6' },
  { name: 'In Review', value: 8, color: '#f59e0b' },
  { name: 'To Do', value: 6, color: '#94a3b8' },
]

const recentActivities = [
  { id: 1, action: 'Task "JWT Middleware & RBAC" completed', user: 'Alex Chen', time: '12 mins ago', project: 'Core API Engine' },
  { id: 2, action: 'Critical Risk "DB Connection Saturation" logged', user: 'Sasini S.', time: '45 mins ago', project: 'Risk Analytics' },
  { id: 3, action: 'Project status transitioned to ACTIVE', user: 'Maria Santos', time: '2 hours ago', project: 'Alpha Portal' },
  { id: 4, action: 'New team member assigned to project', user: 'David Kim', time: '4 hours ago', project: 'Mobile Web App' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Welcome Banner */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Platform Status: Healthy
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Executive Project Health Dashboard
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Real-time delivery velocity, automated risk scores, and deadline monitoring.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Day 01 Foundation Active</span>
        </div>
      </div>

      {/* 6 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon
          return (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{kpi.label}</span>
                <div className={`p-2 rounded-lg ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold text-slate-900">{kpi.value}</span>
                <p className="text-xs text-slate-500 mt-1 font-medium">{kpi.change}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Visual Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Progress Chart */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Project Delivery Progress (%)</h3>
              <p className="text-xs text-slate-500">Real-time completion percentage based on task status</p>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(value) => [`${value}%`, 'Progress']} />
                <Bar dataKey="progress" fill="#2563eb" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Status Donut */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Task Status Breakdown</h3>
            <p className="text-xs text-slate-500">Distribution across active workflows</p>
            <div className="h-48 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {taskStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
            {taskStatusData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-600">{item.name}: <strong className="text-slate-800">{item.value}</strong></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities Feed */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Recent Operational Activities</h3>
            <p className="text-xs text-slate-500">Audit trail of latest project, task, and risk events</p>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {recentActivities.map((act) => (
            <div key={act.id} className="py-3 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div>
                  <p className="font-medium text-slate-800">{act.action}</p>
                  <p className="text-xs text-slate-400">By {act.user} · <span className="text-blue-600 font-medium">{act.project}</span></p>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-medium">{act.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
