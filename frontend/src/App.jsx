import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import TasksPage from './pages/TasksPage'
import RisksPage from './pages/RisksPage'
import ReportsPage from './pages/ReportsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  return (
    <Routes>
      {/* Public Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected App Routes wrapped in AppLayout */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/risks" element={<RisksPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
