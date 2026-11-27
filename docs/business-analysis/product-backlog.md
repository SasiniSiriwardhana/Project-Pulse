# Prioritized Product Backlog

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Backlog Prioritization Methodology
Items in this backlog are prioritized using the **MoSCoW** framework (Must Have, Should Have, Could Have, Won't Have this release) aligned with estimated Story Points (Fibonacci scale: 1, 2, 3, 5, 8, 13) to ensure completion within the 5-day delivery roadmap.

---

## 2. Product Backlog Items (PBI)

| Backlog ID | Feature / Component | User Story Ref | MoSCoW Priority | Est. Points | Acceptance Criteria Ref | Target Milestone |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PBI-001** | Project Documentation & Engineering Governance | All | **Must Have** | 5 | Charters, BRD, SRS, UI/UX specs | Day 01 |
| **PBI-002** | Full-Stack Monorepo Scaffolding (React + Vite + Express + Prisma) | All | **Must Have** | 5 | Clean builds, health endpoint | Day 01 |
| **PBI-003** | PostgreSQL Database Schema & Prisma Modeling | All | **Must Have** | 5 | AC-01 to AC-08 schema integrity | Day 02 |
| **PBI-004** | User Registration, Login & bcrypt Password Hashing | US-ADM-01, US-TM-04 | **Must Have** | 5 | AC-01, AC-02 | Day 02 |
| **PBI-005** | JWT Authentication & RBAC Authorization Middleware | US-ADM-02 | **Must Have** | 5 | AC-02 | Day 02 |
| **PBI-006** | Project Management RESTful APIs (CRUD & Filters) | US-PM-01 | **Must Have** | 5 | AC-03 | Day 03 |
| **PBI-007** | Team Member Allocation & Project Roster APIs | US-PM-02 | **Must Have** | 3 | AC-04 | Day 03 |
| **PBI-008** | Task Management APIs & Lifecycle State Engine | US-PM-03, US-TM-02 | **Must Have** | 5 | AC-05 | Day 03 |
| **PBI-009** | Overdue Task Detection & Due Date Monitoring | US-PM-05, US-TM-01 | **Must Have** | 3 | AC-06 | Day 03 |
| **PBI-010** | Algorithmic Risk Management Engine ($P \times I$) | US-PM-04, US-TM-03 | **Must Have** | 5 | AC-07 | Day 03 |
| **PBI-011** | Dynamic Project Health Score Calculation Engine | US-PM-05 | **Must Have** | 5 | AC-08 | Day 03 |
| **PBI-012** | Executive Dashboard Analytics & Aggregation Endpoints | US-PM-05, US-ADM-03 | **Must Have** | 5 | AC-09 | Day 03 |
| **PBI-013** | React Shell, Sidebar, Navigation & Theme Styling | All | **Must Have** | 5 | Responsive UI design system | Day 04 |
| **PBI-014** | Authentication Views (Login, Register & Protected Routes) | All | **Must Have** | 3 | AC-01, AC-02 | Day 04 |
| **PBI-015** | Executive Analytics Dashboard with Recharts Charts | US-PM-05 | **Must Have** | 5 | AC-09 | Day 04 |
| **PBI-016** | Projects List, Create Modal & Detailed Project Overview | US-PM-01 | **Must Have** | 5 | AC-03 | Day 04 |
| **PBI-017** | Interactive Task Management Board & Status Toggles | US-TM-01, US-TM-02 | **Must Have** | 5 | AC-05, AC-06 | Day 04 |
| **PBI-018** | Risk Register View & Matrix Color Categorization | US-PM-04 | **Must Have** | 5 | AC-07, AC-08 | Day 04 |
| **PBI-019** | Tabular Reporting & Exportable Summary Views | US-PM-06 | **Should Have** | 3 | Reporting criteria | Day 04 / 05 |
| **PBI-020** | End-to-End System Testing & Role Boundary Verification | All | **Must Have** | 5 | TSC-01 to TSC-06 | Day 05 |
| **PBI-021** | Error Handling Polish, Input Validation & Toast Alerts | All | **Must Have** | 3 | NFR-USE-002, NFR-REL-001 | Day 05 |
| **PBI-022** | Final Documentation, Setup Guides & Production Readiness | All | **Must Have** | 3 | Release criteria | Day 05 |

---

## 3. Sprint / Daily Allocation Summary

| Milestone | Target Story Points | Key Focus Areas |
| :--- | :--- | :--- |
| **Day 01 (Foundation)** | 10 pts | Requirements, System Specs, UI/UX, Scaffolding, Health Check |
| **Day 02 (Data & Auth)** | 15 pts | PostgreSQL, Prisma Schema, JWT Auth, RBAC Middleware |
| **Day 03 (Core Services)** | 23 pts | Project, Task, Risk, Health Score & Dashboard APIs |
| **Day 04 (Frontend UI)** | 28 pts | React Dashboard, Recharts, Task Board, Risk View, Forms |
| **Day 05 (QA & Release)** | 14 pts | End-to-End Testing, Validation Polish, Final Audit & Handover |
| **Total MVP Scope** | **90 pts** | Complete Production-Grade 5-Day Delivery |
