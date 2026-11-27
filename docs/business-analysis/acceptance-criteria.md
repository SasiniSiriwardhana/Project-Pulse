# Acceptance Criteria Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Overview
This document specifies formal Acceptance Criteria for the key user stories across ProjectPulse using the standard **Given-When-Then** (Gherkin) behavior-driven development format.

---

## 2. Authentication & Authorization Criteria

### AC-01: User Registration
- **Scenario:** Successful new user registration
  - **Given** an unauthenticated visitor navigates to `/register`
  - **When** they submit valid name, unused email, and a password meeting complexity rules ($\ge 8$ chars, 1 number, 1 symbol)
  - **Then** a new user account is created with default role `TEAM_MEMBER`
  - **And** the user is redirected to `/login` with a success notification.
- **Scenario:** Registration with existing email
  - **Given** a user attempts to register with an email already in the database
  - **When** they submit the form
  - **Then** the system returns HTTP 409 Conflict with message `"Email is already registered"`
  - **And** no duplicate record is created.

### AC-02: User Login & JWT Issuance
- **Scenario:** Successful login with valid credentials
  - **Given** a registered user on `/login`
  - **When** they submit their correct email and password
  - **Then** the backend returns HTTP 200 with a valid JWT token and user profile object
  - **And** the token is securely saved in browser storage
  - **And** the user is redirected to `/dashboard`.
- **Scenario:** Login failure with invalid password
  - **Given** an existing user on `/login`
  - **When** they submit an incorrect password
  - **Then** the backend returns HTTP 401 Unauthorized with message `"Invalid credentials"`
  - **And** no authentication token is issued.

---

## 3. Project Management Criteria

### AC-03: Project Creation
- **Scenario:** Project Manager creates a valid project
  - **Given** an authenticated user with role `PROJECT_MANAGER` or `ADMIN`
  - **When** they submit the Create Project form with title, description, start date, target due date, and priority
  - **Then** the project is persisted in PostgreSQL with status `PLANNING`
  - **And** the creator is automatically linked as the project manager in `ProjectMember`
  - **And** the UI navigates to the Project Details view.

### AC-04: Team Member Assignment
- **Scenario:** Adding a team member to a project
  - **Given** a Project Manager viewing their project's Team tab
  - **When** they select an active user and assign a role (e.g., `DEVELOPER`)
  - **Then** a new `ProjectMember` record is created linking the user to the project
  - **And** the member appears in the assigned team roster table.

---

## 4. Task Management Criteria

### AC-05: Task Lifecycle State Transition
- **Scenario:** Team Member moves task from In Progress to Completed
  - **Given** a team member assigned to task "Implement JWT Middleware"
  - **When** they change the status dropdown from `IN_PROGRESS` to `COMPLETED`
  - **Then** the task record is updated in the database
  - **And** the parent project's completion progress percentage increases automatically.

### AC-06: Overdue Task Detection
- **Scenario:** System detects past-due task
  - **Given** an active task with due date of `2026-11-20` and status `TODO`
  - **When** the dashboard or task list is loaded on `2026-11-27`
  - **Then** the task renders with a prominent red `OVERDUE` badge
  - **And** the task is counted under the "Overdue Tasks" KPI metric card.

---

## 5. Risk Calculation Engine Criteria

### AC-07: Automated Risk Score Calculation
- **Scenario:** Risk score computation upon creation
  - **Given** a Project Manager logging a new project risk
  - **When** they set Probability to $4$ (High) and Impact to $5$ (Critical)
  - **Then** the system automatically calculates `Risk Score` as $4 \times 5 = 20$
  - **And** the risk is tagged with severity tier `CRITICAL` (Red color-code)
  - **And** the critical risk counter on the project card increments by 1.

### AC-08: Project Health Status Derivation
- **Scenario:** Project health degradation due to critical risks
  - **Given** a project with $80\%$ task completion but 2 open `CRITICAL` risks
  - **When** the project health algorithm executes
  - **Then** the project health status is computed as `CRITICAL`
  - **And** the dashboard renders an alert badge notifying the team lead.

---

## 6. Dashboard & Analytics Criteria

### AC-09: Executive Dashboard Metric Accuracy
- **Scenario:** Dashboard KPI cards reflect true aggregate counts
  - **Given** an authenticated user accessing `/dashboard`
  - **When** the page renders
  - **Then** Total Projects equals the count of user-accessible projects
  - **And** Active Projects equals projects with status `ACTIVE`
  - **And** Overdue Tasks equals incomplete tasks where due date is earlier than today
  - **And** Critical Risks equals open risks with score $\ge 20$.
