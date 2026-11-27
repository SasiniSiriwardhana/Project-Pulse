# Functional Requirements Specification (FRS)

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Overview
This document specifies the complete functional requirements for the **ProjectPulse** platform. Each requirement is assigned a unique identifier (`FR-xxx`) and mapped to relevant user roles and business logic rules.

---

## 2. Requirements Matrix

### 2.1 User Authentication
- **FR-001 (User Registration):** The system shall allow new users to register by providing their full name, valid email address, password (minimum 8 characters with at least one number and special character), and optional profile role.
- **FR-002 (User Login):** The system shall authenticate users using their email and password, issuing a signed JSON Web Token (JWT) valid for a configurable duration (default: 24 hours).
- **FR-003 (Password Hashing):** The system shall hash user passwords using `bcrypt` with a minimum salt work factor of 10 prior to database persistence.
- **FR-004 (Session Persistence & Logout):** The system shall support persistent authenticated state across browser refreshes via client-side token storage and provide an explicit logout action that invalidates the local session.

### 2.2 Role-Based Access Control (RBAC)
- **FR-005 (Role Definition):** The system shall support three hierarchical roles:
  1. `ADMIN`: Full administrative control over users, projects, and system health.
  2. `PROJECT_MANAGER`: Full CRUD operations on projects they manage, tasks, risks, and member allocations.
  3. `TEAM_MEMBER`: View access to assigned projects, status modification on assigned tasks, and risk logging.
- **FR-006 (Endpoint Authorization):** The system shall enforce role checks on all protected API routes, returning HTTP 403 Forbidden when an authenticated user lacks requisite privileges.

### 2.3 Project Management
- **FR-007 (Project Creation):** The system shall allow Project Managers and Admins to create new projects with Title, Description, Client/Department, Start Date, End Date, Priority (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`), and Status (`PLANNING`, `ACTIVE`, `ON_HOLD`, `COMPLETED`, `CANCELLED`).
- **FR-008 (Project Retrieval & Filtering):** The system shall allow users to retrieve projects filtered by Status, Priority, Date Range, or search query matching the project title.
- **FR-009 (Project Modification & Archival):** The system shall allow authorized managers to edit project metadata or soft-delete/archive completed or cancelled projects.

### 2.4 Team Member Assignment
- **FR-010 (Member Assignment):** The system shall allow Project Managers to assign registered users to a project with a defined project role (e.g., `LEAD`, `DEVELOPER`, `DESIGNER`, `QA`).
- **FR-011 (Member Removal & Reassignment):** The system shall allow Project Managers to remove members from a project while preserving historical task ownership.
- **FR-012 (Roster Retrieval):** The system shall display the list of active team members assigned to any selected project.

### 2.5 Task Management
- **FR-013 (Task Creation):** The system shall allow creation of tasks under a specific project, specifying Title, Description, Assignee (from assigned project members), Priority, Status, and Due Date.
- **FR-014 (Task Status Lifecycle):** The system shall enforce the task status progression:
  $$\text{TODO} \longrightarrow \text{IN\_PROGRESS} \longrightarrow \text{IN\_REVIEW} \longrightarrow \text{COMPLETED}$$
- **FR-015 (Task Assignment & Reassignment):** The system shall allow task assignees to be updated by Project Managers, and allow Team Members to claim unassigned tasks within their project.

### 2.6 Task Priorities
- **FR-016 (Priority Levels):** The system shall support four distinct task priority levels: `LOW`, `MEDIUM`, `HIGH`, and `URGENT`.
- **FR-017 (Priority Sorting & Filtering):** The system shall allow task lists and boards to be sorted and filtered by priority to surface urgent items.

### 2.7 Deadlines & Overdue Detection
- **FR-018 (Due Date Tracking):** Every task and project must record an explicit target due date (`YYYY-MM-DD`).
- **FR-019 (Overdue Identification):** The system shall automatically identify tasks where $\text{Due Date} < \text{Current Date}$ and $\text{Status} \neq \text{COMPLETED}$, flagging them with an `OVERDUE` badge.

### 2.8 Risk Management
- **FR-020 (Risk Logging):** The system shall allow Project Managers and Team Members to log project risks with Title, Description, Category (`TECHNICAL`, `SCHEDULE`, `RESOURCE`, `EXTERNAL`), Likelihood (1–5), Impact (1–5), Mitigation Plan, and Status (`IDENTIFIED`, `MITIGATING`, `CLOSED`).
- **FR-021 (Risk Status Updating):** The system shall allow Project Managers to update risk status and record mitigation outcomes.

### 2.9 Risk Score Calculation Engine
- **FR-022 (Automated Risk Score):** The system shall compute the risk score dynamically using:
  $$\text{Risk Score} = \text{Probability (1–5)} \times \text{Impact (1–5)}$$
- **FR-023 (Risk Severity Categorization):** The system shall categorize risk severity based on the calculated score:
  - **Low:** $1 \le \text{Score} \le 6$ (Green)
  - **Medium:** $7 \le \text{Score} \le 14$ (Yellow)
  - **High:** $15 \le \text{Score} \le 19$ (Orange)
  - **Critical:** $20 \le \text{Score} \le 25$ (Red)

### 2.10 Project Progress Monitoring
- **FR-024 (Progress Percentage Calculation):** The system shall calculate overall project progress dynamically using:
  $$\text{Project Progress} = \left( \frac{\text{Count of Completed Tasks}}{\text{Total Count of Project Tasks}} \right) \times 100\%$$
  *(If total tasks = 0, progress defaults to 0%).*
- **FR-025 (Project Health Evaluation):** The system shall automatically determine project health status:
  - **Healthy:** $\text{Progress} \ge 70\%$, overdue tasks $\le 1$, and 0 open Critical risks.
  - **At Risk:** $40\% \le \text{Progress} < 70\%$, or 2–3 overdue tasks, or 1 open Critical risk.
  - **Critical:** $\text{Progress} < 40\%$, or $> 3$ overdue tasks, or $\ge 2$ open Critical risks.

### 2.11 Dashboard Analytics
- **FR-026 (KPI Metric Cards):** The main dashboard shall display summary metrics: Total Projects, Active Projects, Completed Projects, Total Tasks, Overdue Tasks, and Critical Risks.
- **FR-027 (Visual Analytics Charts):** The dashboard shall render interactive charts:
  - Task Status Distribution (Donut Chart).
  - Project Progress & Velocity (Bar Chart).
  - Project Health Breakdown (Pie Chart).
- **FR-028 (Activity Feed):** The dashboard shall display a chronological feed of recent activities (task transitions, new risks logged, project updates).

### 2.12 Reporting & Export
- **FR-029 (Project Summary Report):** The system shall generate a structured summary view for any selected project showing completion %, milestone timeline, active risks, and member allocations.
- **FR-030 (Risk Registry Report):** The system shall generate an exportable/printable tabular risk report ordered by Risk Score descending.
