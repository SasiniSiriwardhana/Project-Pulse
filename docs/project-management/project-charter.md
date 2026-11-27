# Project Charter

## 1. Project Title
**ProjectPulse – Intelligent Project Health & Risk Monitoring Platform**

## 2. Project Background
In modern software development and engineering workflows, delivery teams often suffer from tool fragmentation. Key project data—such as task velocity, blockers, risk assessments, and milestone progress—is scattered across ad-hoc spreadsheets, chat applications, and disjointed ticketing systems. This lack of a unified source of truth creates operational silos, reduces cross-functional visibility, and leads to reactive rather than proactive project management.

ProjectPulse is designed as an intelligent, unified project health and risk monitoring web application that equips organizations with centralized project orchestration, task lifecycle tracking, algorithmic risk scoring, and real-time executive health analytics.

## 3. Business Problem
Organizations face significant delivery inefficiencies:
- **Blind Spots in Project Health:** Executive sponsors and project leads lack automated, real-time indicators of project health, discovering delays only after deadlines are missed.
- **Unquantified and Untracked Risks:** Risks are commonly identified in kickoff meetings but forgotten until they turn into active impediments. There is no standard formula for risk severity calculation or mitigation tracking.
- **Coordination Breakdown:** Team members lack transparent task priorities and dependencies, resulting in misallocated effort and missed milestone deadlines.
- **Manual Overhead:** Project managers spend up to 25% of their working hours manually aggregating status reports across disparate channels.

## 4. Proposed Solution
ProjectPulse provides a centralized, multi-tenant capable SaaS architecture that combines:
- A responsive modern React frontend dashboard with clear visual indicators of project velocity, health status, and active bottlenecks.
- An Express.js REST API with role-based access control (Admin, Project Manager, Team Member).
- A normalized PostgreSQL relational database managed through Prisma ORM for robust data integrity.
- Algorithmic risk management featuring automated risk scoring (Probability $\times$ Impact) and threshold-based health status calculation (Healthy, At Risk, Critical).

## 5. Project Purpose
To provide modern software development teams and project leaders with an end-to-end operational platform that converts everyday task updates into actionable project health intelligence, ensuring on-time delivery and proactive risk mitigation.

## 6. Main Objectives
1. Deliver a production-grade full-stack web application within a 5-day structured engineering cycle.
2. Implement secure authentication and Role-Based Access Control (RBAC) supporting Admin, Project Manager, and Team Member personas.
3. Provide end-to-end Project, Task, and Risk CRUD lifecycles with automated status propagation.
4. Compute composite Project Health Scores dynamically using task completion ratios, overdue deadlines, and open critical risks.
5. Provide a responsive, high-fidelity UI featuring interactive charts, metric cards, and data tables.

## 7. Project Scope Summary
- **In-Scope (MVP):**
  - Secure JWT authentication and password hashing with bcrypt.
  - Three distinct user roles with strict authorization boundaries.
  - Project creation, updating, member assignments, and milestone tracking.
  - Task board with status tracking (To Do, In Progress, Review, Completed) and priority levels (Low, Medium, High, Urgent).
  - Risk register with likelihood/impact matrix, calculated risk score, and mitigation tracking.
  - Centralized dashboard featuring KPIs, Recharts data visualizations, and project health indicators.
  - Tabular report generation for projects, task velocity, and risk registries.
- **Out-of-Scope (for 5-Day MVP):**
  - Third-party Jira/GitHub bidirectional webhook synchronizations.
  - Automated AI natural-language task generation.
  - Video conferencing or direct messaging capabilities.
  - Financial payroll and invoicing modules.

## 8. Target Users
1. **System Administrator:** Oversees user provisioning, global organization settings, role assignments, and system audit logs.
2. **Project Manager:** Creates projects, assembles teams, manages task boards, logs risks, monitors health scores, and exports executive reports.
3. **Team Member:** Views assigned tasks, updates task progress/status, logs time spent, and flags emerging operational blockers/risks.

## 9. Technology Stack
- **Frontend:** React.js (v18+), Vite, Tailwind CSS, React Router (v6+), Axios, Recharts, Lucide React icons.
- **Backend:** Node.js (v22 LTS), Express.js, REST API architecture.
- **Database & ORM:** PostgreSQL, Prisma ORM.
- **Security & Auth:** JSON Web Tokens (JWT), bcryptjs password hashing.
- **Tooling:** Git, GitHub, Postman, Antigravity IDE.

## 10. Main Deliverables
1. **Engineering & Analysis Documentation:** Complete Project Charter, BRD, SRS (Functional & Non-Functional), User Stories, Use Cases, UI/UX Wireframes, and System Architecture.
2. **Relational Database Model:** Normalized Prisma schema and migrations for Users, Projects, ProjectMembers, Tasks, and Risks.
3. **RESTful API Backend:** Modular Node/Express service layer with route handlers, controllers, JWT middleware, and validation.
4. **React Client Dashboard:** Responsive Single Page Application (SPA) with dashboard analytics, task management, risk register, and authentication flows.
5. **Deployment & Operational Guide:** Clear setup manuals, environment configuration guides, and automated seed datasets.

## 11. Assumptions
- *Assumption 1:* The target development and test environment supports Node.js 18+ and a local or containerized PostgreSQL instance.
- *Assumption 2:* Modern desktop and tablet browsers (Chrome, Edge, Firefox, Safari) with ES6+ support will be used by end-users.
- *Assumption 3:* A standard 5-day implementation cadence with sequential phases (Foundation, Auth/Data, Core APIs, UI Integration, Final QA) is followed.

## 12. Constraints
- **Time Constraint:** 5-day timeline requiring strict prioritization of essential MVP features.
- **Stack Constraints:** Pure JavaScript/TypeScript ecosystem utilizing React, Express, PostgreSQL, and Prisma without swapping core libraries.
- **Resource Constraints:** Designed to operate efficiently within single-node containerized or standard developer workstation environments without requiring distributed cloud infrastructure.

## 13. Initial Project Risks
| Risk ID | Description | Impact | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **RSK-01** | Scope creep expanding into complex Gantt charts or chat modules. | High | High | Enforce strict MVP boundaries; push non-essential features to Phase 2. |
| **RSK-02** | Database schema mismatch during rapid iterative feature additions. | Medium | Medium | Use Prisma schema as the single source of truth; generate declarative migrations. |
| **RSK-03** | Frontend-backend API contract divergence. | High | Medium | Author comprehensive API specifications before controller implementation. |

## 14. Success Criteria
- 100% of planned Day 01 through Day 05 engineering milestones delivered.
- Zero high-severity security vulnerabilities in authentication and authorization flows.
- Sub-500ms median response time across REST endpoints for standard dataset queries.
- Clean responsive layout across desktop (1920x1080, 1440x900) and tablet (768x1024) viewports.
