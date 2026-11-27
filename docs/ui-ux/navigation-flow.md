# Navigation Flow Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Information Architecture & Site Map

```
[Unauthenticated Visitor]
         │
         ├──► /login (Login Page)
         │       ▲
         │       │ (Redirect upon registration)
         └──► /register (Registration Page)
                 │
                 ▼ (Authentication Success -> Store JWT)
[Authenticated Application Shell]
         │
         ├──► /dashboard (Executive Dashboard)
         │
         ├──► /projects (Projects Directory)
         │       ├──► /projects/create (Create Project)
         │       └──► /projects/:id (Project Details)
         │               ├── Tab: Overview
         │               ├── Tab: Tasks
         │               ├── Tab: Risks
         │               └── Tab: Team Roster
         │
         ├──► /tasks (Task Board / Kanban & List)
         │
         ├──► /risks (Global Risk Matrix & Registry)
         │
         ├──► /reports (Analytics & Reports)
         │
         └──► /profile (User Settings & Security)
```

---

## 2. Navigation Components

### 2.1 Persistent Left Sidebar
- **Brand Logo:** ProjectPulse icon + title (links to `/dashboard`).
- **Primary Menu Items:**
  1. `Dashboard` (`/dashboard`, Icon: `LayoutDashboard`)
  2. `Projects` (`/projects`, Icon: `FolderKanban`)
  3. `Tasks` (`/tasks`, Icon: `CheckSquare`)
  4. `Risk Register` (`/risks`, Icon: `AlertTriangle`)
  5. `Reports` (`/reports`, Icon: `BarChart3`)
- **Footer Section:**
  - `Profile` (`/profile`, Icon: `User`)
  - `Logout` (Action button, Icon: `LogOut`)

### 2.2 Sticky Top Navigation Bar
- **Left:** Mobile drawer toggle button (visible on $< 1024\text{px}$) + dynamic Breadcrumb navigation (e.g., `Projects > Project Alpha > Tasks`).
- **Right:**
  - Quick "+ New" dropdown (New Project, New Task, Log Risk).
  - Notification icon (Alert badge for overdue tasks).
  - User avatar pill with role badge and dropdown menu.

---

## 3. Role-Based Navigation Filtering

| Route | Admin Access | Project Manager Access | Team Member Access |
| :--- | :--- | :--- | :--- |
| `/dashboard` | Full portfolio metrics | Managed projects metrics | Assigned projects metrics |
| `/projects` | Full CRUD | Full CRUD on managed projects | View assigned projects |
| `/projects/create`| Yes | Yes | Hidden / Disabled |
| `/tasks` | Full CRUD | Full CRUD | Update status on assigned tasks |
| `/risks` | Full CRUD | Full CRUD | Log risks, view project risks |
| `/reports` | Full portfolio reports | Managed project reports | View-only summary |
| `/profile` | Yes | Yes | Yes |
