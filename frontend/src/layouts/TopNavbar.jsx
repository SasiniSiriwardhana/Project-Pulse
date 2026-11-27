import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Bell, Plus, LogOut, ChevronDown, UserCircle } from 'lucide-react'

export default function TopNavbar({ onMenuClick }) {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 text-slate-600 hover:text-slate-900 rounded-lg lg:hidden hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-base font-semibold text-slate-900 hidden sm:block">
            Intelligent Health & Risk Monitoring Platform
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Quick create action */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Project</span>
        </Link>

        {/* Notification bell */}
        <button 
          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* User profile dropdown snippet */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <Link to="/profile" className="flex items-center gap-2 text-left group">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs ring-2 ring-slate-100">
              PM
            </div>
            <div className="hidden md:block text-xs">
              <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Sasini S.</p>
              <p className="text-slate-400 text-[10px]">Project Manager</p>
            </div>
          </Link>

          <button 
            onClick={() => navigate('/login')}
            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-50 ml-1"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
