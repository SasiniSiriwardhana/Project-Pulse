import React from 'react'
import { User, Shield, Mail, Key } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">User Profile & Account</h2>
        <p className="text-sm text-slate-500">Manage your identity, permissions, and security settings.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl">
            SS
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Sasini Siriwardhana</h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 mt-1">
              <Shield className="w-3 h-3" />
              Project Manager
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-sm">
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase block">Email Address</span>
            <span className="font-medium text-slate-800">sasinisiriwardhana0106@gmail.com</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase block">System Role</span>
            <span className="font-medium text-slate-800">PROJECT_MANAGER</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-sm font-bold text-slate-900 mb-3">Security & Password</h4>
          <button className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-lg transition-colors">
            Change Password
          </button>
        </div>
      </div>
    </div>
  )
}
