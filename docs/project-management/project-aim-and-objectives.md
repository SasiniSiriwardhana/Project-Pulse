# Project Aim and Objectives

## 1. Project Aim
The primary aim of **ProjectPulse** is to design, develop, and deliver a robust, full-stack, intelligent project health and risk monitoring web platform that centralizes project orchestration, streamlines task coordination, quantifies operational risks, and delivers real-time project health insights through interactive analytics.

---

## 2. Project Objectives

The project objectives are structured according to the **SMART** framework (Specific, Measurable, Achievable, Relevant, and Time-bound) across the 5-day delivery cycle:

### Objective 1: Architectural Foundation & Project Governance (Day 01)
- **Specific:** Establish a clean monorepo architecture, standardized Git branching model, comprehensive software engineering documentation, and initial technical scaffolding for frontend and backend.
- **Measurable:** 100% completion of Project Management, Business Analysis, UI/UX, and Technical Design documentation; clean build check of React/Vite frontend and Express/Prisma backend.
- **Achievable:** Utilizing industry-standard boilerplate patterns and modern full-stack tooling.
- **Relevant:** Sets the structural, architectural, and governance foundation for all subsequent development days.
- **Time-bound:** Completed within Day 01.

### Objective 2: Data Modeling, Database Integration & Authentication (Day 02)
- **Specific:** Model and migrate relational database entities (User, Project, ProjectMember, Task, Risk) using Prisma ORM and PostgreSQL; implement secure JWT authentication and password hashing.
- **Measurable:** Complete database migration with relational integrity; successful registration, login, and token verification API tests with status code 200/201.
- **Achievable:** Prisma provides declarative schema modeling and auto-generated type-safe database queries.
- **Relevant:** Security and data persistence form the backbone of the multi-user platform.
- **Time-bound:** Completed within Day 02.

### Objective 3: Core Business Logic & RESTful API Implementation (Day 03)
- **Specific:** Develop comprehensive REST API controllers and routes for Project Management, Member Allocation, Task Lifecycle, Risk Register, and dynamic Project Health computation.
- **Measurable:** Over 20 functioning REST endpoints covering complete CRUD operations, automated risk score computation ($Score = Probability \times Impact$), and health status calculation.
- **Achievable:** Express.js routing, controller modularity, and Prisma relational queries.
- **Relevant:** Powers all frontend dashboard data requirements and enforces business validation rules.
- **Time-bound:** Completed within Day 03.

### Objective 4: Frontend Dashboard & Interactive UI Implementation (Day 04)
- **Specific:** Implement responsive React UI components using Vite, Tailwind CSS, Lucide icons, and Recharts, integrating with the backend API via Axios interceptors.
- **Measurable:** Functional UI for Authentication, Executive Dashboard, Project List/Details, Task Kanban/List, Risk Matrix, and Reports with reactive state updates.
- **Achievable:** Component-driven architecture using reusable layout shells, navigation bars, and data display cards.
- **Relevant:** Provides end-users with an intuitive, modern SaaS experience.
- **Time-bound:** Completed within Day 04.

### Objective 5: System Integration, End-to-End Testing & Deployment Readiness (Day 05)
- **Specific:** Conduct end-to-end integration testing, input validation, role-based authorization verification, performance checks, and author comprehensive user/admin documentation.
- **Measurable:** 100% passing rate on core integration workflows; zero unhandled promise rejections or server crashes; complete deployment guide.
- **Achievable:** Systematic testing of user flows across all three roles (Admin, PM, Member).
- **Relevant:** Ensures software stability, production readiness, and maintainability.
- **Time-bound:** Completed within Day 05.
