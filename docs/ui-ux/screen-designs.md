# Screen Designs Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Overview
This document details the functional components, visual layout, data bindings, and interactions for each of the **10 core application screens** of ProjectPulse.

---

## 2. Screen Specifications

### Screen 1: Login Page (`/login`)
- **Purpose:** Secure entry point for registered users.
- **Components:**
  - ProjectPulse brand logo with tagline ("Intelligent Project Health & Risk Monitoring").
  - Form card centered on light gray canvas.
  - Email input field with email format validation.
  - Password input field with toggle show/hide visibility.
  - "Remember me" checkbox and "Forgot Password" link.
  - Primary "Sign In" button with loading spinner.
  - Link to `/register` ("Don't have an account? Sign up").

### Screen 2: Registration Page (`/register`)
- **Purpose:** Onboarding new platform users.
- **Components:**
  - Matching brand header.
  - Full Name text input.
  - Work Email address input.
  - Password input with real-time complexity strength indicator.
  - Confirm Password input.
  - Role selection radio/dropdown (`Project Manager`, `Team Member`).
  - Terms of Service & Privacy Policy agreement checkbox.
  - "Create Account" primary button.
  - Redirect link to `/login`.

### Screen 3: Main Executive Dashboard (`/dashboard`)
- **Purpose:** Centralized operational overview of portfolio health, velocity, and risks.
- **Components:**
  - **Greeting Header:** "Welcome back, {User Name}" + current date + Quick Action buttons ("+ New Project", "+ Log Risk").
  - **KPI Metrics Grid (6 Cards):**
    1. *Total Projects* (Count + active status summary)
    2. *Active Projects* (In-progress count)
    3. *Completed Projects* (Delivered milestone count)
    4. *Total Tasks* (Aggregated task volume)
    5. *Overdue Tasks* (Red alert badge + count)
    6. *Critical Risks* (Red badge + count of risks with score $\ge 20$)
  - **Visual Analytics Section:**
    - *Project Progress Bar Chart (Recharts):* Top 5 projects with percentage completion.
    - *Task Status Donut Chart (Recharts):* Breakdown of TODO, IN_PROGRESS, IN_REVIEW, COMPLETED.
    - *Health Status Distribution:* Visual percentage pills for Healthy, At Risk, Critical.
  - **Recent Activities Feed:** Chronological list of recent actions with timestamps and avatars.

### Screen 4: Projects List Page (`/projects`)
- **Purpose:** Directory of all projects with search and filtration.
- **Components:**
  - Page header with "+ Create Project" button.
  - Filter bar: Search by name, status filter tabs (All, Active, Planning, Completed), priority dropdown.
  - Project cards grid or data table:
    - Project Title, Description snippet.
    - Health Badge (`HEALTHY`, `AT_RISK`, `CRITICAL`).
    - Progress Bar with percentage text.
    - Due Date with overdue highlighting.
    - Member avatar stack.
    - Action menu (View Details, Edit, Archive).

### Screen 5: Create Project Page / Modal (`/projects/create`)
- **Purpose:** Initializing new project parameters.
- **Components:**
  - Project Title (Required).
  - Description textarea.
  - Client / Department name.
  - Priority selector (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`).
  - Start Date and Target Completion Date pickers.
  - Initial Team Member multi-select assignment.
  - Save Project and Cancel buttons.

### Screen 6: Project Details Page (`/projects/:id`)
- **Purpose:** Deep dive into an individual project's execution and health.
- **Components:**
  - Project Header with Title, Status badge, Health badge, and edit actions.
  - Tabbed sub-navigation:
    - *Overview:* Description, dates, manager, KPI mini-cards, progress meter.
    - *Tasks:* Kanban board / tabular task manager.
    - *Risks:* Embedded risk register and severity matrix.
    - *Team:* Assigned members, roles, and "+ Add Member" modal.

### Screen 7: Task Management Page (`/tasks`)
- **Purpose:** Operational task execution and tracking across projects.
- **Components:**
  - View switcher: Kanban Board View vs. Tabular List View.
  - Filters: Project dropdown, Priority filter, Assignee filter, Overdue toggle.
  - Kanban columns:
    - `TODO`
    - `IN PROGRESS`
    - `IN REVIEW`
    - `COMPLETED`
  - Task Card: Title, Priority pill, Due Date badge (red if overdue), Assignee avatar, Quick status transition dropdown.

### Screen 8: Risk Management Page (`/risks`)
- **Purpose:** Centralized risk register and risk mitigation tracker.
- **Components:**
  - Header with "+ Log New Risk" button.
  - 5x5 Probability vs. Impact visual Heatmap matrix.
  - Filter by Severity: All, Low, Medium, High, Critical.
  - Tabular Risk Register:
    - Risk Title & Description.
    - Category tag (`TECHNICAL`, `SCHEDULE`, `RESOURCE`, `EXTERNAL`).
    - Probability (1–5) and Impact (1–5).
    - Calculated Risk Score ($P \times I$) with color-coded severity pill.
    - Mitigation Strategy summary.
    - Status (`IDENTIFIED`, `MITIGATING`, `CLOSED`).

### Screen 9: Reports & Analytics Page (`/reports`)
- **Purpose:** High-level executive briefings and data export.
- **Components:**
  - Date range selector and project selector.
  - Portfolio Delivery Velocity Chart (Monthly completion trends).
  - Risk Distribution by Category Chart.
  - Overdue Task Analysis breakdown.
  - Export controls: Print / Export to CSV summary.

### Screen 10: User Profile Page (`/profile`)
- **Purpose:** Account management and personal configuration.
- **Components:**
  - User avatar with initial generator.
  - Full Name and Email fields.
  - Role indicator badge (`ADMIN`, `PROJECT_MANAGER`, `TEAM_MEMBER`).
  - Password change form (Current password, New password, Confirm).
  - Activity log summary of user's recent updates.
