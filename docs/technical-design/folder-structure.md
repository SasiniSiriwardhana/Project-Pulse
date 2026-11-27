# Project Folder Structure Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Monorepo Repository Structure
ProjectPulse is organized as a clean, modular full-stack monorepo:

```
Project-Pulse/
├── frontend/                     # React.js SPA Client (Vite + Tailwind)
│   ├── public/                   # Static assets, favicon, brand icons
│   │   └── pulse-icon.svg
│   ├── src/
│   │   ├── assets/               # Local styles and images
│   │   ├── components/           # Reusable UI components
│   │   │   ├── common/           # Buttons, Badges, Modals, Inputs
│   │   │   ├── dashboard/        # KPI Cards, Chart Widgets
│   │   │   ├── projects/         # Project Cards, Project Forms
│   │   │   ├── tasks/            # Task Kanban Cards, Task Row
│   │   │   └── risks/            # Risk Matrix Card, Risk Row
│   │   ├── context/              # React Context (AuthContext)
│   │   ├── hooks/                # Custom React hooks (useAuth, useFetch)
│   │   ├── layouts/              # AppShell, Sidebar, TopNavbar, AuthLayout
│   │   ├── pages/                # Route page components
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── ProjectDetailPage.jsx
│   │   │   ├── TasksPage.jsx
│   │   │   ├── RisksPage.jsx
│   │   │   ├── ReportsPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   ├── services/             # Axios API client & endpoint services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── projectService.js
│   │   │   ├── taskService.js
│   │   │   └── riskService.js
│   │   ├── App.jsx               # Route definitions & providers
│   │   ├── index.css             # Tailwind CSS directives
│   │   └── main.jsx              # Application entry point
│   ├── index.html                # Single-page HTML template
│   ├── package.json              # Frontend dependencies & scripts
│   ├── postcss.config.js         # PostCSS configuration
│   ├── tailwind.config.js        # Tailwind theme tokens & color extensions
│   └── vite.config.js            # Vite build & proxy settings
│
├── backend/                      # Node.js + Express REST API Server
│   ├── prisma/
│   │   └── schema.prisma         # Declarative PostgreSQL schema & models
│   ├── src/
│   │   ├── config/               # Environment & database configuration
│   │   │   ├── db.js             # Prisma Client instance
│   │   │   └── env.js            # Environment variable validation
│   │   ├── controllers/          # Business logic handlers
│   │   │   ├── authController.js
│   │   │   ├── projectController.js
│   │   │   ├── taskController.js
│   │   │   ├── riskController.js
│   │   │   └── dashboardController.js
│   │   ├── middleware/           # Express middlewares
│   │   │   ├── authMiddleware.js # JWT verification & role authorization
│   │   │   └── errorHandler.js   # Centralized error handler
│   │   ├── routes/               # REST route declarations
│   │   │   ├── authRoutes.js
│   │   │   ├── projectRoutes.js
│   │   │   ├── taskRoutes.js
│   │   │   ├── riskRoutes.js
│   │   │   ├── dashboardRoutes.js
│   │   │   └── index.js          # Main API router mounting /api
│   │   ├── services/             # Algorithmic calculation engines
│   │   │   ├── healthScoreService.js
│   │   │   └── riskCalculatorService.js
│   │   ├── utils/                # Helper functions & response formatters
│   │   │   └── responseHandler.js
│   │   └── server.js             # Server bootstrap & listen
│   ├── package.json              # Backend dependencies & scripts
│   └── .env.example              # Sample environment variables
│
├── docs/                         # Engineering & Management Documentation
│   ├── project-management/       # Charter, Roadmap, Scope, Stakeholders
│   ├── business-analysis/        # BRD, FRS, NFRS, Stories, Backlog
│   ├── ui-ux/                    # Design System, Wireframes, Screen Layouts
│   └── technical-design/         # Architecture, DB Design, ERD, API specs
│
├── .gitignore                    # Root Git ignore configuration
├── .env.example                  # Root placeholder environment config
└── README.md                     # Comprehensive Project Master Guide
```
