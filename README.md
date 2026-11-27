# ProjectPulse – Intelligent Project Health & Risk Monitoring Platform

![Platform](https://img.shields.io/badge/Platform-Full--Stack%20Web-blue)
![Architecture](https://img.shields.io/badge/Architecture-React%20%7C%20Express%20%7C%20PostgreSQL-indigo)
![Status](https://img.shields.io/badge/Milestone-Day%2001%20Foundation-emerald)
![License](https://img.shields.io/badge/License-MIT-slate)

> A unified, data-driven platform that integrates task execution directly with automated risk scoring and real-time executive project health assessment.

---

## 1. Project Overview

**ProjectPulse** is an intelligent project health and risk monitoring web platform designed to eliminate blind spots in delivery execution. It helps organizations, project managers, and agile teams orchestrate projects, coordinate tasks, quantify operational risks, and visualize project trajectories through interactive dashboards and executive analytics.

### 1.1 Problem Statement
Modern delivery teams suffer from tool fragmentation. Key project data—such as task velocity, dependencies, blockers, and risk assessments—is scattered across ad-hoc spreadsheets, chat applications, and disjointed ticketing systems. This creates operational silos, masks emerging bottlenecks, turns unmanaged risks into delivery crises, and forces project managers to spend up to 25% of their working hours manually compiling status reports.

### 1.2 Proposed Solution
ProjectPulse centralizes project governance by combining:
- A responsive, high-density **React SPA** with dynamic Recharts visualizations.
- A robust **Node.js/Express REST API** enforcing strict Role-Based Access Control (RBAC).
- An algorithmic **Risk Engine** that calculates severity scores ($Score = Probability \times Impact$) and highlights critical thresholds.
- An automated **Project Health Engine** that evaluates progress, overdue tasks, and risk severity into transparent health indicators (`HEALTHY`, `AT_RISK`, `CRITICAL`).
- A normalized **PostgreSQL** relational database managed via **Prisma ORM**.

---

## 2. Core Objectives & Key Features

### 2.1 Main Objectives
1. **Centralized Visibility:** Single source of truth for projects, tasks, team rosters, and risk registries.
2. **Predictive Delivery:** Automated detection of overdue tasks and delivery bottlenecks before milestone deadlines slip.
3. **Objective Risk Quantification:** Standardized 1–5 likelihood and impact metrics eliminating subjective guesswork.
4. **Role Governance:** Granular authorization boundaries separating Admin, Project Manager, and Team Member workflows.

### 2.2 Key Features
- **Executive Health Dashboard:** 6 KPI metric cards (Total Projects, Active Projects, Completed, Tasks, Overdue Tasks, Critical Risks), Recharts progress bars, and task status donut charts.
- **Project Lifecycle Management:** Project creation, milestone tracking, team member assignment, and real-time completion percentages.
- **Task Coordination Board:** Kanban-style and tabular task workflows (`TODO` $\rightarrow$ `IN_PROGRESS` $\rightarrow$ `IN_REVIEW` $\rightarrow$ `COMPLETED`) with priority tags (`LOW`, `MEDIUM`, `HIGH`, `URGENT`) and overdue flags.
- **Risk Registry & Matrix:** 5x5 Probability $\times$ Impact risk matrix, color-coded severity tiers, and mitigation action tracking.
- **Executive Reporting:** Structured exports for portfolio delivery velocity and risk mitigation summaries.

---

## 3. Target User Roles & Permissions

| Role | Permissions & Operational Scope |
| :--- | :--- |
| **System Administrator (`ADMIN`)** | Global governance, user account provisioning, role modification, system health monitoring, and system-wide audits. |
| **Project Manager (`PROJECT_MANAGER`)** | Creation and editing of managed projects, team member allocation, task breakdown and assignment, risk logging, and status report generation. |
| **Team Member (`TEAM_MEMBER`)** | View assigned projects and tasks, update task lifecycle status, log blockers, and report emerging project risks. |

---

## 4. Technology Stack

### Frontend
- **Framework & Build:** [React.js](https://react.dev/) (v18+) with [Vite](https://vitejs.dev/)
- **Styling & Design System:** [Tailwind CSS](https://tailwindcss.com/) (v3)
- **Routing:** [React Router DOM](https://reactrouter.com/) (v6)
- **Data Visualizations:** [Recharts](https://recharts.org/)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **HTTP Client:** [Axios](https://axios-http.com/) with JWT bearer interceptors

### Backend
- **Runtime Environment:** [Node.js](https://nodejs.org/) (v22 LTS)
- **Web Framework:** [Express.js](https://expressjs.com/) (v4)
- **Architecture:** RESTful API with modular routes, controllers, and centralized error handling
- **Security & Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/) & [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Cross-Origin Security:** [CORS](https://www.npmjs.com/package/cors)

### Database & ORM
- **Database Engine:** [PostgreSQL](https://www.postgresql.org/) (v14+)
- **ORM:** [Prisma ORM](https://www.prisma.io/) (declarative schemas, migrations, type-safe queries)

### Tooling & IDE
- **Version Control:** Git & GitHub
- **IDE:** Antigravity IDE / VS Code
- **API Testing:** Postman

---

## 5. System Architecture

```
React Frontend (Vite + Tailwind + Recharts)
                  │
                  ▼ HTTPS / JSON REST API
Express.js Application Server (JWT + RBAC + Controllers)
                  │
                  ▼ TCP / Connection Pool
Prisma ORM (Schema Modeling & Migrations)
                  │
                  ▼ SQL Queries
PostgreSQL Relational Database
```

---

## 6. Project Monorepo Structure

```
Project-Pulse/
├── frontend/                     # React Single Page Application
│   ├── public/                   # Static assets & icons
│   ├── src/
│   │   ├── components/           # Reusable UI widgets
│   │   ├── context/              # Authentication & global state
│   │   ├── layouts/              # AppLayout, Sidebar, TopNavbar
│   │   ├── pages/                # Dashboard, Projects, Tasks, Risks, Reports, Auth
│   │   ├── services/             # Axios API client
│   │   ├── App.jsx               # Client routes
│   │   ├── index.css             # Tailwind CSS entry
│   │   └── main.jsx              # Application root
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/                      # Node.js + Express REST API
│   ├── prisma/
│   │   └── schema.prisma         # Relational schema (User, Project, Task, Risk)
│   ├── src/
│   │   ├── config/               # Database and environment configs
│   │   ├── controllers/          # Request handlers
│   │   ├── middleware/           # JWT verification, RBAC, error handlers
│   │   ├── routes/               # API endpoint definitions
│   │   ├── services/             # Algorithmic calculation engines
│   │   ├── utils/                # Standardized response formatters
│   │   └── server.js             # Server entry point
│   ├── package.json
│   └── .env.example
│
├── docs/                         # Engineering & Management Documentation
│   ├── project-management/       # Charter, Roadmap, Scope, Stakeholders, Success Criteria
│   ├── business-analysis/        # BRD, FRS, NFRS, Stories, Backlog, Acceptance Criteria
│   ├── ui-ux/                    # Design System, Wireframes, Screen Layouts, Responsive
│   └── technical-design/         # Architecture, DB Design, ERD, API specs
│
├── .gitignore                    # Version control ignore rules
├── .env.example                  # Environment configuration template
└── README.md                     # Master project documentation
```

---

## 7. Local Setup & Installation

### Prerequisites
- **Node.js:** v18.0.0 or higher (`node -v`)
- **npm:** v9.0.0 or higher (`npm -v`)
- **PostgreSQL:** v14.0 or higher (or Docker)

### 1. Clone Repository & Switch Branch
```bash
git clone https://github.com/SasiniSiriwardhana/Project-Pulse.git
cd Project-Pulse
git checkout feature/day-01-foundation
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your PostgreSQL credentials
# Generate Prisma Client:
npx prisma generate
# Start backend in development mode:
npm run dev
```
Backend will be live at `http://localhost:5000`. Test health status: `curl http://localhost:5000/api/health`.

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Frontend client will be live at `http://localhost:3000`.

---

## 8. Environment Variables

Create `.env` in the root and `/backend` directories using `.env.example`:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/projectpulse_db?schema=public"
JWT_SECRET="replace_with_a_secure_random_jwt_secret_key_minimum_32_characters"
JWT_EXPIRES_IN="24h"
CLIENT_URL="http://localhost:3000"
VITE_API_URL="http://localhost:5000/api"
```

---

## 9. Day 01 Progress & 5-Day Roadmap

### Day 01: Project Foundation, Architecture & Scaffolding (Completed)
- [x] Comprehensive Project Management Documentation (Charter, Problem Statement, Scope, Stakeholders, Roadmap, Success Criteria).
- [x] Full Business Analysis Specification (BRD, FRS with FR-001–FR-030, NFRS, User Stories, Acceptance Criteria, Use Cases, Product Backlog).
- [x] UI/UX Design System, 10 screen specifications, responsive guidelines, and wireframe blueprints.
- [x] Technical Architecture, Normalized Database Schema, Mermaid ER Diagram, REST API Specification.
- [x] Frontend React + Vite setup with Tailwind CSS, Lucide React, Recharts, React Router, App Shell, and page components.
- [x] Backend Express setup with modular routing, centralized error handling, `/api/health` diagnostic endpoint, and initial Prisma schema.
- [x] Strict Git branching on `feature/day-01-foundation` with 8+ meaningful commits.

### Day 02: Database Migrations, Prisma & Authentication (Upcoming)
- [ ] Connect PostgreSQL database and run Prisma migrations.
- [ ] Implement user registration, login, and bcrypt password hashing.
- [ ] Implement JWT token issuance, verification middleware, and RBAC guards.
- [ ] Build User and Profile management API endpoints.

### Day 03: Business Logic, Domain Services & REST APIs
- [ ] Project Management CRUD endpoints and team allocation logic.
- [ ] Task Management CRUD endpoints with priority and deadline filters.
- [ ] Risk Calculation Engine ($Score = Probability \times Impact$).
- [ ] Dynamic Project Health computation engine.
- [ ] Executive Dashboard analytics aggregation endpoints.

### Day 04: Frontend Application & Dashboard Integration
- [ ] Connect React pages with backend REST APIs via Axios.
- [ ] Real-time authentication state persistence.
- [ ] Interactive Recharts visualizations with live database data.
- [ ] Dynamic Task Kanban board and Risk Matrix interactions.

### Day 05: Quality Assurance, Integration Testing & Release
- [ ] End-to-end integration testing across Admin, PM, and Member personas.
- [ ] Input validation, error boundary hardening, and performance checks.
- [ ] Final documentation and production deployment preparation.

---

## 10. Future Improvements (Post-MVP)
- **Bidirectional Webhooks:** Automated synchronizations with GitHub issues and Jira epics.
- **AI-Powered Predictive Lead-Time:** Machine learning algorithms forecasting milestone delays.
- **Real-Time Collaboration:** Live task notifications and team chat via WebSockets.
- **Mobile Native Applications:** Cross-platform mobile clients with push notifications.

---

## 11. Author & Contributors
- **Lead Developer & Architect:** Sasini Siriwardhana ([@SasiniSiriwardhana](https://github.com/SasiniSiriwardhana))
