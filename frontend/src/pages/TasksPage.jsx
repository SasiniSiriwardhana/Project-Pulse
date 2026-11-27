import React from 'react'
import { Plus, CheckSquare, Clock, AlertCircle } from 'lucide-react'

const kanbanColumns = [
  {
    id: 'TODO',
    title: 'To Do',
    color: 'border-slate-300',
    tasks: [
      { id: 'TSK-1', title: 'Prepare Postman API Test Suite', priority: 'MEDIUM', dueDate: '2026-11-29', assignee: 'Maria S.' },
      { id: 'TSK-2', title: 'Configure Production Dockerfile', priority: 'LOW', dueDate: '2026-12-02', assignee: 'Alex C.' },
    ]
  },
  {
    id: 'IN_PROGRESS',
    title: 'In Progress',
    color: 'border-blue-400',
    tasks: [
      { id: 'TSK-3', title: 'Implement JWT Auth & Refresh Tokens', priority: 'URGENT', dueDate: '2026-11-28', assignee: 'Sasini S.' },
      { id: 'TSK-4', title: 'Connect Recharts to Backend Analytics API', priority: 'HIGH', dueDate: '2026-11-30', assignee: 'David K.' },
    ]
  },
  {
    id: 'IN_REVIEW',
    title: 'In Review',
    color: 'border-amber-400',
    tasks: [
      { id: 'TSK-5', title: 'PR #10: Express Health & Error Middleware', priority: 'HIGH', dueDate: '2026-11-27', assignee: 'Alex C.' },
    ]
  },
  {
    id: 'COMPLETED',
    title: 'Completed',
    color: 'border-emerald-400',
    tasks: [
      { id: 'TSK-6', title: 'Author Project Charter & SRS Specifications', priority: 'HIGH', dueDate: '2026-11-27', assignee: 'Sasini S.' },
      { id: 'TSK-7', title: 'Define Prisma Schema Models & Relations', priority: 'URGENT', dueDate: '2026-11-27', assignee: 'Sasini S.' },
    ]
  }
]

export default function TasksPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Task Coordination Board</h2>
          <p className="text-sm text-slate-500">Track tasks through lifecycle stages from planning to completion.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Create Task</span>
        </button>
      </div>

      {/* Kanban Board Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {kanbanColumns.map((col) => (
          <div key={col.id} className="bg-slate-100/70 p-4 rounded-2xl border border-slate-200/80 flex flex-col min-h-[480px]">
            <div className={`flex items-center justify-between pb-3 mb-3 border-b-2 ${col.color}`}>
              <h3 className="font-bold text-sm text-slate-800">{col.title}</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                {col.tasks.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {col.tasks.map((task) => (
                <div key={task.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400">{task.id}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      task.priority === 'URGENT' ? 'bg-red-50 text-red-700 border border-red-200' :
                      task.priority === 'HIGH' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">{task.title}</h4>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-slate-700">{task.assignee}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.dueDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
