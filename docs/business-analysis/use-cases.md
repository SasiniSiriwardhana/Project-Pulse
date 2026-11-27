# Use Cases Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Overview
This document specifies the primary operational use cases for **ProjectPulse**, detailing actors, preconditions, normal flows, alternative exception flows, and postconditions.

---

## 2. Use Case Directory

| Use Case ID | Use Case Name | Primary Actor | Scope |
| :--- | :--- | :--- | :--- |
| **UC-01** | User Authentication & Session Establishment | All Users (Admin, PM, Member) | Security / Identity |
| **UC-02** | Create and Configure New Project | Project Manager, Admin | Project Management |
| **UC-03** | Assign Team Member to Project | Project Manager | Resource Management |
| **UC-04** | Create and Assign Project Task | Project Manager | Task Coordination |
| **UC-05** | Update Task Status & Record Progress | Team Member, PM | Task Lifecycle |
| **UC-06** | Log Risk & Calculate Severity Score | Project Manager, Member | Risk Management |
| **UC-07** | Monitor Project Health & Executive Dashboard | All Users | Analytics & Governance |

---

## 3. Detailed Use Case Specifications

### UC-01: User Authentication & Session Establishment
- **Use Case ID:** UC-01
- **Primary Actor:** Any Registered User (Admin, Project Manager, Team Member)
- **Preconditions:** User possesses an active registered account in PostgreSQL.
- **Main Flow:**
  1. User navigates to the login page (`/login`).
  2. User inputs registered email address and password.
  3. User submits the login form.
  4. System validates non-empty inputs and sends `POST /api/auth/login`.
  5. Backend locates user by email and compares hashed password using `bcrypt.compare`.
  6. Backend generates a signed JWT payload containing `id`, `email`, and `role`.
  7. Backend responds with HTTP 200 containing token and user profile.
  8. Frontend saves JWT to `localStorage` and sets Authorization header for subsequent Axios requests.
  9. System redirects user to the main `/dashboard`.
- **Alternative Flows:**
  - *4a. Validation Failure:* Form displays inline errors for missing or malformed inputs; submission halted.
  - *5a. Invalid Credentials:* Backend returns HTTP 401; frontend renders an alert banner: "Invalid email or password".
- **Postconditions:** User is authenticated and navigated to the dashboard with role-tailored navigation items.

---

### UC-02: Create and Configure New Project
- **Use Case ID:** UC-02
- **Primary Actor:** Project Manager, Admin
- **Preconditions:** Actor is logged in with `PROJECT_MANAGER` or `ADMIN` role.
- **Main Flow:**
  1. Actor clicks "+ New Project" button on Projects page.
  2. System displays the Project Creation modal/form.
  3. Actor provides Title, Description, Department/Client, Start Date, Target Due Date, and Priority.
  4. Actor clicks "Save Project".
  5. System validates required fields and dispatches `POST /api/projects`.
  6. Backend creates project record with default status `PLANNING` and progress `0%`.
  7. Backend automatically creates a `ProjectMember` record linking the creator as project lead.
  8. System returns HTTP 201 with project details.
  9. Frontend adds the project to the active list and navigates to the Project Details view.
- **Alternative Flows:**
  - *5a. Due Date before Start Date:* Validation catches invalid timeline; displays error: "Due date must be after start date".
- **Postconditions:** Project is created, associated with its manager, and available for task/risk allocation.

---

### UC-03: Assign Team Member to Project
- **Use Case ID:** UC-03
- **Primary Actor:** Project Manager
- **Preconditions:** Project exists; target user account is active in the system.
- **Main Flow:**
  1. PM opens Project Details and clicks the "Team" tab.
  2. PM clicks "Add Member".
  3. System displays searchable dropdown of registered users not yet assigned.
  4. PM selects a user, designates a project role (`LEAD`, `DEVELOPER`, `DESIGNER`, `QA`), and submits.
  5. Backend creates a new `ProjectMember` record in database.
  6. System returns HTTP 201; frontend refreshes the roster table.
- **Alternative Flows:**
  - *4a. User already assigned:* Backend returns HTTP 409 "User already assigned to this project".
- **Postconditions:** Assigned user gains read access to the project and can be assigned project tasks.

---

### UC-04: Create and Assign Project Task
- **Use Case ID:** UC-04
- **Primary Actor:** Project Manager
- **Preconditions:** Project exists and has at least one assigned team member.
- **Main Flow:**
  1. PM navigates to Project Tasks tab and clicks "Create Task".
  2. PM inputs Title, Description, Assignee (from project roster), Priority (`LOW`, `MEDIUM`, `HIGH`, `URGENT`), and Due Date.
  3. PM submits form.
  4. Backend verifies PM owns/manages the project and creates the task with status `TODO`.
  5. System returns HTTP 201; task appears in task board and list.
- **Postconditions:** New task is created, assigned to team member, and tracked against deadlines.

---

### UC-05: Update Task Status & Record Progress
- **Use Case ID:** UC-05
- **Primary Actor:** Team Member (Assignee), Project Manager
- **Preconditions:** Task is assigned to actor or actor is PM of the project.
- **Main Flow:**
  1. Actor opens Task list or Kanban board.
  2. Actor changes status (e.g., from `IN_PROGRESS` to `COMPLETED`).
  3. Frontend sends `PATCH /api/tasks/:id/status` with new status value.
  4. Backend updates task status and timestamp.
  5. Backend triggers recalculation of project progress percentage ($Completed / Total$).
  6. Backend updates project health score.
  7. System returns HTTP 200 with updated task and parent project progress.
  8. Frontend updates progress bar and task card in real time.
- **Postconditions:** Task status updated, project completion % recalculated, dashboard metrics refreshed.

---

### UC-06: Log Risk & Calculate Severity Score
- **Use Case ID:** UC-06
- **Primary Actor:** Project Manager, Team Member
- **Preconditions:** Project exists.
- **Main Flow:**
  1. Actor clicks "Log New Risk" within Project Risks tab.
  2. Actor provides Risk Title, Description, Category, Likelihood rating (1–5), Impact rating (1–5), and Mitigation Strategy.
  3. System calculates preview Risk Score ($P \times I$) and severity badge in real time.
  4. Actor clicks "Record Risk".
  5. Backend validates ratings ($1 \le P, I \le 5$), computes final score, classifies severity (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`), and persists risk.
  6. Backend recalculates composite Project Health Status.
  7. System returns HTTP 201; risk table updates.
- **Postconditions:** Risk logged in project register; automated risk score and health impact updated.

---

### UC-07: Monitor Project Health & Executive Dashboard
- **Use Case ID:** UC-07
- **Primary Actor:** Admin, Project Manager, Team Member
- **Preconditions:** User is logged in.
- **Main Flow:**
  1. User accesses `/dashboard`.
  2. Frontend dispatches parallel requests: `GET /api/dashboard/stats`, `GET /api/dashboard/projects`, `GET /api/dashboard/activities`.
  3. Backend aggregates metrics: total projects, active projects, overdue tasks, critical risks, and completion rates.
  4. Frontend renders summary KPI cards and Recharts visualizations (Task status breakdown donut, velocity bar chart, health distribution).
  5. User can click any metric card to filter down to specific project or task details.
- **Postconditions:** User gains full visibility into portfolio health, overdue items, and operational risks.
