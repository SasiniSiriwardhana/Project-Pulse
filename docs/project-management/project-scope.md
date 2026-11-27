# Project Scope

## 1. Overview
This document defines the functional, technical, and operational boundaries of the **ProjectPulse** platform. It delineates what is included within the MVP (Minimum Viable Product) scope for the 5-day development lifecycle and what features are explicitly deferred to future phases.

---

## 2. In-Scope Features (MVP)

### 2.1 User Management & Security
- **Authentication:** Email and password registration and login using JWT (JSON Web Tokens) with expiration and bcrypt password hashing.
- **Role-Based Access Control (RBAC):** Three distinct roles:
  - `ADMIN`: Global user management, system metrics, and audit oversight.
  - `PROJECT_MANAGER`: Full management of assigned projects, tasks, risks, and team members.
  - `TEAM_MEMBER`: Viewing assigned projects, updating assigned task statuses, and logging new risks.
- **Profile Management:** View and edit personal user profile information.

### 2.2 Project Lifecycle Management
- **Project CRUD:** Create, read, update, and soft-delete/archive projects.
- **Project Metadata:** Title, description, client/department reference, start date, target deadline, project status (`PLANNING`, `ACTIVE`, `ON_HOLD`, `COMPLETED`, `CANCELLED`), and priority (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`).
- **Team Allocation:** Assign and remove team members to/from projects with designated project-level roles (e.g., Lead, Contributor).

### 2.3 Task Coordination & Lifecycle Tracking
- **Task CRUD:** Create, update, assign, and delete tasks within projects.
- **Task Attributes:** Title, description, assignee, due date, priority (`LOW`, `MEDIUM`, `HIGH`, `URGENT`), and status (`TODO`, `IN_PROGRESS`, `IN_REVIEW`, `COMPLETED`).
- **Progress Calculation:** Real-time computation of project completion percentage based on the ratio of completed tasks to total tasks.

### 2.4 Risk Management & Calculation Engine
- **Risk Registry:** Identify, categorize, and track project risks.
- **Risk Metrics:**
  - Likelihood / Probability rating (1 = Very Low to 5 = Very High).
  - Impact rating (1 = Negligible to 5 = Catastrophic).
  - Calculated Risk Score: $Score = Probability \times Impact$ (Scale: 1 – 25).
  - Risk Severity Classification:
    - Low (1 – 6)
    - Medium (7 – 14)
    - High (15 – 19)
    - Critical (20 – 25)
- **Mitigation Strategy:** Document mitigation strategies, contingency plans, and risk owner assignments.

### 2.5 Executive Dashboard & Analytics
- **Summary Metrics (KPI Cards):** Total Projects, Active Projects, Overdue Tasks, Open Critical Risks, Overall Team Velocity.
- **Visual Analytics:**
  - Project Health Distribution (Healthy, At Risk, Critical).
  - Task Status Breakdown (Donut/Pie Chart).
  - Monthly Project Delivery Velocity (Bar Chart).
  - Risk Matrix Heatmap view.
- **Recent Activity Feed:** Real-time audit log of recent updates and task status changes.

### 2.6 Reporting & Export
- Tabular views of project summaries, task completion metrics, and risk registers.
- Printable/exportable summary views for executive briefings.

---

## 3. Out-of-Scope Features (Deferred to Post-MVP)

The following capabilities are explicitly excluded from the 5-day implementation to preserve engineering quality and avoid scope creep:
1. **Third-Party Integrations:** Direct bidirectional syncing with Jira, GitHub Issues, Asana, or Trello.
2. **AI-Driven Predictive Forecasting:** Machine learning models for automated deadline estimation.
3. **Real-time WebSockets / Chat:** Live in-app instant messaging and video conferencing.
4. **Billing, Timesheets & Invoicing:** Client financial invoicing, hourly billing, and payroll processing.
5. **Mobile Native Apps:** Standalone iOS or Android native apps (responsiveness is achieved via mobile-first web design).
6. **Multi-Organization Multi-Tenancy:** Enterprise cross-organization domain isolation.

---

## 4. Technical Boundaries

| Dimension | In-Scope (Implemented) | Out-of-Scope (Deferred) |
| :--- | :--- | :--- |
| **Client Architecture** | React SPA (Single Page Application) with Vite | Server-Side Rendering (SSR) / Next.js |
| **API Architecture** | RESTful JSON over HTTP/HTTPS | GraphQL / gRPC |
| **Database** | Relational PostgreSQL with Prisma ORM | NoSQL / Document DB / Multi-region clustering |
| **Authentication** | Bearer JWT stored securely in browser storage | SAML / SSO / OAuth2 Social Providers |
| **Hosting Model** | Containerized / Local Node.js service | Kubernetes Cluster / Serverless Edge Functions |
