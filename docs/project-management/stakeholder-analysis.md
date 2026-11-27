# Stakeholder Analysis

## 1. Overview
Stakeholder analysis identifies the primary actors who interact with, influence, or are impacted by the **ProjectPulse** platform. This analysis ensures that functional requirements and user interfaces cater directly to the strategic, managerial, and operational needs of each user class.

---

## 2. Stakeholder Profiles

### 2.1 System Administrator (Admin)
- **Role Summary:** The technical and administrative custodian of the platform responsible for governance, user provisioning, and platform security.
- **Key Responsibilities:**
  - Create, deactivate, and manage user accounts.
  - Assign system-level roles (`ADMIN`, `PROJECT_MANAGER`, `TEAM_MEMBER`).
  - Monitor system health, error logs, and database integrity.
  - Enforce password policies and security standards.
- **Expectations:**
  - High system availability and reliable role-based authorization.
  - Straightforward user onboarding and administrative workflows.
  - Transparent error reporting and auditability.
- **Power / Influence:** High.
- **Interest Level:** Medium-High.

### 2.2 Project Manager (PM)
- **Role Summary:** The primary operational user driving project delivery, resource coordination, task delegation, and risk mitigation.
- **Key Responsibilities:**
  - Create and configure projects with timelines and milestones.
  - Assign project team members and allocate workloads.
  - Create, prioritize, and assign tasks with due dates.
  - Identify, log, and quantify project risks.
  - Monitor real-time Project Health Scores and task completion metrics.
  - Generate status reports for executive briefings.
- **Expectations:**
  - Fast, intuitive dashboard that highlights overdue tasks and high risks immediately.
  - Flexible task views (list, status boards).
  - Automated calculation of project progress and health without manual calculations.
- **Power / Influence:** High.
- **Interest Level:** Very High.

### 2.3 Team Member (Contributor / Engineer / Designer)
- **Role Summary:** The execution engine of the project responsible for completing tasks, logging blockers, and maintaining accurate task statuses.
- **Key Responsibilities:**
  - Review personal task assignments and associated deadlines.
  - Update task progress (`TODO` $\rightarrow$ `IN_PROGRESS` $\rightarrow$ `IN_REVIEW` $\rightarrow$ `COMPLETED`).
  - Flag emerging operational blockers and log potential project risks.
  - Collaborate with project managers to refine task estimates.
- **Expectations:**
  - Clean, distraction-free interface focused on "My Tasks".
  - Quick, low-friction task status updates.
  - Clear visibility into task priorities and upcoming deadlines.
- **Power / Influence:** Low-Medium.
- **Interest Level:** High.

---

## 3. Stakeholder Power vs. Interest Grid

```
                  HIGH INTEREST
                       ▲
                       │
       [Team Member]   │   [Project Manager]
       Keep Informed   │   Manage Closely
       & Empower       │   & Prioritize Needs
  ─────────────────────┼─────────────────────► HIGH POWER
                       │
       [Auditor /      │   [System Admin]
        Observer]      │   Keep Satisfied &
       Monitor         │   Provide Control
                       │
                  LOW INTEREST
```

---

## 4. Engagement & Communication Matrix

| Stakeholder | Communication Channel | Frequency | Key Artifacts / Views |
| :--- | :--- | :--- | :--- |
| **Admin** | Admin Console, System Health API, Logs | As needed / Weekly | User Management, System Configuration, Health Check |
| **Project Manager** | Main Dashboard, Project Details, Risk Matrix, Reports | Daily / Continuous | KPI Cards, Gantt/Progress Charts, Risk Register |
| **Team Member** | Task Board, Assigned Tasks View, Risk Form | Daily | My Tasks, Task Status Modals, Blocker Logging |
