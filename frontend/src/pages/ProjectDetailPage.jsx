import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  FolderKanban, 
  Calendar, 
  Users, 
  AlertTriangle, 
  CheckSquare, 
  ArrowLeft,
  Plus
} from 'lucide-react'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      {/* Back button and breadcrumb */}
      <div>
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 mb-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-900">Alpha Customer Portal Modernization</h2>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                HEALTHY
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-1">Project ID: {id || 'prj-101'} · Owner: Sasini Siriwardhana (PM)</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm">
              Edit Project
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Header */}
      <div className="border-b border-slate-200">
        <nav className="flex space-x-6">
          {['overview', 'tasks', 'risks', 'team'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-sm font-semibold capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Contents */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Project Scope & Description</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprehensive overhaul of the legacy portal into an intelligent, responsive single page application powered by React and Vite. Deliverables include role-based authentication, real-time dashboard analytics, and automated risk scoring.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-sm">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase">Kickoff Date</span>
                  <span className="font-medium text-slate-800">2026-11-27</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase">Target Deadline</span>
                  <span className="font-medium text-slate-800">2026-12-15</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">Overall Progress</h3>
              <div className="text-3xl font-extrabold text-blue-600">85%</div>
              <p className="text-xs text-slate-500 mt-1">17 of 20 tasks completed</p>
              <div className="w-full bg-slate-100 h-2.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tasks' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900">Project Tasks</h3>
            <Link to="/tasks" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Open Full Task Board →
            </Link>
          </div>
          <p className="text-sm text-slate-500">Tasks associated with this project are actively synced with the Kanban board.</p>
        </div>
      )}

      {activeTab === 'risks' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900">Project Risk Register</h3>
            <Link to="/risks" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              Open Global Risk Matrix →
            </Link>
          </div>
          <p className="text-sm text-slate-500">All registered project risks are evaluated against the 5x5 Probability/Impact engine.</p>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4">Assigned Team Members</h3>
          <div className="divide-y divide-slate-100 text-sm">
            <div className="py-2.5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">Sasini Siriwardhana</p>
                <p className="text-xs text-slate-400">sasinisiriwardhana0106@gmail.com</p>
              </div>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 text-blue-700">Project Lead</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
