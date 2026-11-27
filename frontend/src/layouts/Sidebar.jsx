import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FolderKanban, 
  CheckSquare, 
  AlertTriangle, 
  BarChart3, 
  User, 
  Activity,
  ShieldCheck
} from 'lucide-react'

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', path: '/projects', icon: FolderKanban },
  { name: 'Tasks', path: '/tasks', icon: CheckSquare },
  { name: 'Risk Register', path: '/risks', icon: AlertTriangle },
  { name: 'Reports', path: '/reports', icon: BarChart3 },
  { name: 'Profile', path: '/profile', icon: User },
]

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 text-slate-200 flex flex-col transition-transform duration-200 ease-in-out border-r border-slate-800
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        {/* Brand header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white shadow-sm shadow-blue-500/30">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-bold text-white tracking-tight">ProjectPulse</span>
            <span className="block text-[10px] uppercase font-semibold text-blue-400 tracking-wider">Health & Risk</span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Platform Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => onClose?.()}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30 font-semibold' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'}
                `}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            )
          })}
        </nav>

        {/* Bottom system status pill */}
        <div className="p-4 border-t border-slate-800">
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/50 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <p className="font-semibold text-white">System Online</p>
              <p className="text-slate-400 text-[11px]">Day 01 Foundation</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
