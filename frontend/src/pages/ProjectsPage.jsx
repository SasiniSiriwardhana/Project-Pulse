import React from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Filter, Calendar, Users, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 'prj-101',
    title: 'Alpha Customer Portal Modernization',
    description: 'Migration to modern React architecture with automated role-based access.',
    department: 'Engineering',
    health: 'HEALTHY',
    progress: 85,
    status: 'ACTIVE',
    dueDate: '2026-12-15',
    membersCount: 6,
    openRisks: 0
  },
  {
    id: 'prj-102',
    title: 'Intelligent Risk Scoring Engine',
    description: 'Core algorithmic calculation module computing probability by impact metrics.',
    department: 'Data Platform',
    health: 'AT_RISK',
    progress: 65,
    status: 'ACTIVE',
    dueDate: '2026-12-05',
    membersCount: 4,
    openRisks: 2
  },
  {
    id: 'prj-103',
    title: 'PostgreSQL Relational DB Hardening',
    description: 'Database connection pooling, indexing, and Prisma schema optimization.',
    department: 'Infrastructure',
    health: 'HEALTHY',
    progress: 92,
    status: 'ACTIVE',
    dueDate: '2026-11-30',
    membersCount: 3,
    openRisks: 1
  },
  {
    id: 'prj-104',
    title: 'Legacy Billing Microservice Deprecation',
    description: 'Decommissioning old billing endpoints and routing to payment processor.',
    department: 'Finance Tech',
    health: 'CRITICAL',
    progress: 25,
    status: 'ACTIVE',
    dueDate: '2026-11-20', // Overdue
    membersCount: 5,
    openRisks: 3
  }
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Projects Portfolio</h2>
          <p className="text-sm text-slate-500">Manage and monitor all organizational initiatives.</p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Create Project</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <select className="px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Planning</option>
            <option>Completed</option>
          </select>
          <select className="px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Priorities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const isOverdue = new Date(project.dueDate) < new Date() && project.progress < 100
          return (
            <div key={project.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {project.department}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    project.health === 'HEALTHY' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : project.health === 'AT_RISK'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {project.health}
                  </span>
                </div>

                <Link to={`/projects/${project.id}`} className="group">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-500">Progress</span>
                    <span className="text-slate-800">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        project.health === 'HEALTHY' ? 'bg-emerald-500' :
                        project.health === 'AT_RISK' ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    {project.membersCount} members
                  </span>
                  <span className={`inline-flex items-center gap-1 font-medium ${isOverdue ? 'text-red-600 font-bold' : ''}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    {project.dueDate} {isOverdue && '(OVERDUE)'}
                  </span>
                </div>
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-800"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
