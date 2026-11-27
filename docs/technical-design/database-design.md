# Database Design Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Database Architecture & Engine
- **Engine:** PostgreSQL (v14+)
- **ORM:** Prisma ORM
- **Naming Conventions:**
  - Database table names: snake_case plural (`users`, `projects`, `project_members`, `tasks`, `risks`).
  - Prisma model names: PascalCase singular (`User`, `Project`, `ProjectMember`, `Task`, `Risk`).
  - Column / Field names: camelCase in Prisma, mapped to snake_case in SQL.
  - Primary Keys: String (CUID/UUID) for distributed uniqueness and security.

---

## 2. Entity Definitions

### 2.1 User Entity (`users`)
Represents system actors across all roles.
- `id`: String (Primary Key, `@default(cuid())`)
- `email`: String (Unique, Indexed, Required)
- `password`: String (Bcrypt hashed string, Required)
- `name`: String (Required)
- `role`: Enum `Role` (`ADMIN`, `PROJECT_MANAGER`, `TEAM_MEMBER`, default: `TEAM_MEMBER`)
- `avatar`: String (Optional URL)
- `createdAt`: DateTime (`@default(now())`)
- `updatedAt`: DateTime (`@updatedAt`)
- *Relations:*
  - `managedProjects`: `Project[]` (Projects created by this user)
  - `memberships`: `ProjectMember[]` (Projects this user is assigned to)
  - `assignedTasks`: `Task[]` (Tasks assigned to this user)
  - `reportedRisks`: `Risk[]` (Risks logged by this user)

### 2.2 Project Entity (`projects`)
Represents managed initiatives.
- `id`: String (Primary Key, `@default(cuid())`)
- `title`: String (Required)
- `description`: Text (Optional)
- `department`: String (Optional)
- `status`: Enum `ProjectStatus` (`PLANNING`, `ACTIVE`, `ON_HOLD`, `COMPLETED`, `CANCELLED`, default: `PLANNING`)
- `priority`: Enum `Priority` (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`, default: `MEDIUM`)
- `health`: Enum `HealthStatus` (`HEALTHY`, `AT_RISK`, `CRITICAL`, default: `HEALTHY`)
- `progress`: Float (Default: `0.0`, represents $0.0\% - 100.0\%$)
- `startDate`: DateTime (Required)
- `endDate`: DateTime (Required)
- `ownerId`: String (Foreign Key $\rightarrow$ `User.id`, Required)
- `createdAt`: DateTime (`@default(now())`)
- `updatedAt`: DateTime (`@updatedAt`)
- *Relations:*
  - `owner`: `User` (Relation on `ownerId`)
  - `members`: `ProjectMember[]` (Cascade delete on project deletion)
  - `tasks`: `Task[]` (Cascade delete on project deletion)
  - `risks`: `Risk[]` (Cascade delete on project deletion)

### 2.3 ProjectMember Entity (`project_members`)
Associative junction table establishing project team rosters and roles.
- `id`: String (Primary Key, `@default(cuid())`)
- `projectId`: String (Foreign Key $\rightarrow$ `Project.id`, Required)
- `userId`: String (Foreign Key $\rightarrow$ `User.id`, Required)
- `role`: Enum `ProjectRole` (`LEAD`, `DEVELOPER`, `DESIGNER`, `QA`, `MEMBER`, default: `MEMBER`)
- `joinedAt`: DateTime (`@default(now())`)
- *Constraints:*
  - `@@unique([projectId, userId])` (A user can only be assigned once per project)

### 2.4 Task Entity (`tasks`)
Represents operational units of work.
- `id`: String (Primary Key, `@default(cuid())`)
- `title`: String (Required)
- `description`: Text (Optional)
- `status`: Enum `TaskStatus` (`TODO`, `IN_PROGRESS`, `IN_REVIEW`, `COMPLETED`, default: `TODO`)
- `priority`: Enum `Priority` (`LOW`, `MEDIUM`, `HIGH`, `URGENT`, default: `MEDIUM`)
- `dueDate`: DateTime (Required)
- `projectId`: String (Foreign Key $\rightarrow$ `Project.id`, Required)
- `assigneeId`: String (Foreign Key $\rightarrow$ `User.id`, Optional)
- `createdAt`: DateTime (`@default(now())`)
- `updatedAt`: DateTime (`@updatedAt`)
- *Indexes:*
  - `@@index([projectId, status])`
  - `@@index([assigneeId])`
  - `@@index([dueDate])`

### 2.5 Risk Entity (`risks`)
Represents operational and delivery threats.
- `id`: String (Primary Key, `@default(cuid())`)
- `title`: String (Required)
- `description`: Text (Optional)
- `category`: Enum `RiskCategory` (`TECHNICAL`, `SCHEDULE`, `RESOURCE`, `EXTERNAL`, default: `TECHNICAL`)
- `probability`: Int (Range: 1 to 5, Required)
- `impact`: Int (Range: 1 to 5, Required)
- `riskScore`: Int (Computed: $probability \times impact$, Range: 1 to 25, Required)
- `severity`: Enum `RiskSeverity` (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`, Required)
- `mitigationPlan`: Text (Optional)
- `status`: Enum `RiskStatus` (`IDENTIFIED`, `MITIGATING`, `CLOSED`, default: `IDENTIFIED`)
- `projectId`: String (Foreign Key $\rightarrow$ `Project.id`, Required)
- `reporterId`: String (Foreign Key $\rightarrow$ `User.id`, Required)
- `createdAt`: DateTime (`@default(now())`)
- `updatedAt`: DateTime (`@updatedAt`)
- *Indexes:*
  - `@@index([projectId, severity])`
  - `@@index([riskScore])`
