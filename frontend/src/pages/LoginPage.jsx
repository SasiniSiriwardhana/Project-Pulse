import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Activity, Lock, Mail } from 'lucide-react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@projectpulse.dev')
  const [password, setPassword] = useState('Admin@123')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Day 01 placeholder login flow
    localStorage.setItem('projectpulse_token', 'day-01-mock-token')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20 mb-3">
          <Activity className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">ProjectPulse</h2>
        <p className="text-xs uppercase font-semibold text-blue-600 tracking-widest mt-1">Intelligent Health & Risk Monitoring</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm border border-slate-200 rounded-2xl sm:px-10">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Sign in to your account</h3>
          <p className="text-xs text-slate-500 mb-6">Enter your registered email and credentials below.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-600" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="font-semibold text-blue-600 hover:text-blue-800">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors mt-2"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-800">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
