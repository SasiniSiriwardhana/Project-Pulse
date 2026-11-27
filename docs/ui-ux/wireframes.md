# UI Wireframes & Layout Blueprints

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Wireframe 1: Main Application Shell & Executive Dashboard

```
+-----------------------------------------------------------------------------------------+
| [PulseIcon] ProjectPulse  | [Search projects, tasks...]       | [+ New] [Bell] [Avatar] v|
+---------------------------+-----------------------------------+-------------------------+
| [=] Dashboard             | Dashboard Overview                             Nov 27, 2026 |
| [ ] Projects              +-------------------------------------------------------------+
| [ ] Tasks                 | [Total Projects] [Active]    [Completed] [Tasks] [Overdue] [Risks]|
| [ ] Risk Register         |      12           8             4         84      3 (RED)   2 (CRIT)|
| [ ] Reports               +-------------------------------------------------------------+
|                           |                                                             |
|                           | +-----------------------------+ +-------------------------+ |
|                           | | Project Progress & Velocity | | Task Status Breakdown   | |
|                           | | [Bar Chart: Completion %]   | | [Donut Chart: TODO,     | |
|                           | |                             | |  IN_PROG, REVIEW, DONE] | |
|                           | +-----------------------------+ +-------------------------+ |
|                           |                                                             |
|                           | +---------------------------------------------------------+ |
| [ ] Profile               | | Recent Operational Activities & Risk Alerts             | |
| [->] Logout               | | - Task "Auth Middleware" marked COMPLETED by Sarah      | |
|                           | | - Critical Risk "DB Connection Pool Exhaustion" logged  | |
+---------------------------+-------------------------------------------------------------+
```

---

## 2. Wireframe 2: Project Details with Health & Tabbed Modules

```
+-----------------------------------------------------------------------------------------+
| Projects > Alpha Platform Overhaul                                                      |
+-----------------------------------------------------------------------------------------+
| Alpha Platform Overhaul                       [Status: ACTIVE] [Health: AT_RISK (Amber)]|
| Modernization of legacy customer portal       Progress: [========------ 58%]            |
+-----------------------------------------------------------------------------------------+
| [Overview]   | [Tasks (24)]   | [Risks (4)]   | [Team Members (6)]                      |
+-----------------------------------------------------------------------------------------+
| Filter: [All Priorities v] [Status: All v]                   [+ Create Task]            |
|                                                                                         |
| +-------------------+ +--------------------+ +--------------------+ +-----------------+ |
| | TODO (6)          | | IN PROGRESS (8)    | | IN REVIEW (4)      | | COMPLETED (6)   | |
| +-------------------+ +--------------------+ +--------------------+ +-----------------+ |
| | [Setup Tailwind]  | | [JWT Middleware]   | | [PR #14 Code Review| | [Prisma Schema] | |
| | Pri: High | 2d    | | Pri: Urgent| OVERDUE| | Pri: Med | 1d     | | Pri: High| Done | |
| | Assignee: Alex    | | Assignee: John     | | Assignee: Lisa     | | Assignee: Maria | |
| +-------------------+ +--------------------+ +--------------------+ +-----------------+ |
+-----------------------------------------------------------------------------------------+
```

---

## 3. Wireframe 3: Risk Register & Severity Matrix View

```
+-----------------------------------------------------------------------------------------+
| Project Risks Directory                                                 [+ Log New Risk]|
+-----------------------------------------------------------------------------------------+
| 5x5 Risk Severity Matrix Overview:                                                      |
| Likelihood (1-5) x Impact (1-5) -> 1-6 Low (Grn) | 7-14 Med (Yel) | 15-19 High | 20-25 Crit|
+-----------------------------------------------------------------------------------------+
| Filter: [All Categories v] [Severity: All v]                 [Search risks...]          |
|                                                                                         |
| Risk Title            Category   Prob Impact Score Severity Mitigation Plan     Status  |
| --------------------- ---------- ---- ------ ----- -------- ------------------- ------- |
| DB Concurrency Spikes Technical   4     5      20   CRITICAL Implement pgbouncer OPEN   |
| Vendor API Delays     External    3     4      12   MEDIUM   Mock API fallback  MITIGAT |
| Dev Resignation Risk  Resource    2     3       6   LOW      Cross-train team   CLOSED  |
+-----------------------------------------------------------------------------------------+
```

---

## 4. Wireframe 4: Authentication & Onboarding Views

```
+-----------------------------------------------------------------------------------------+
|                                    [ProjectPulse Logo]                                  |
|                              Welcome to ProjectPulse Platform                           |
|                 Intelligent Project Health & Risk Monitoring for Modern Teams           |
|                                                                                         |
|                       +---------------------------------------+                         |
|                       | Sign in to your account               |                         |
|                       |                                       |                         |
|                       | Email Address                         |                         |
|                       | [ admin@projectpulse.dev            ] |                         |
|                       |                                       |                         |
|                       | Password                              |                         |
|                       | [ ******************              (o) ] |                         |
|                       |                                       |                         |
|                       | [x] Remember me     Forgot password?  |                         |
|                       |                                       |                         |
|                       | [      Sign In to Dashboard         ] |                         |
|                       |                                       |                         |
|                       | Don't have an account? Sign up        |                         |
|                       +---------------------------------------+                         |
+-----------------------------------------------------------------------------------------+
```
