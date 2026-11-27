# Entity-Relationship (ER) Diagram

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Mermaid Entity-Relationship Diagram

```mermaid
erDiagram
    User ||--o{ Project : "manages/creates"
    User ||--o{ ProjectMember : "participates_as"
    User ||--o{ Task : "is_assigned_to"
    User ||--o{ Risk : "reports"

    Project ||--|{ ProjectMember : "allocates"
    Project ||--o{ Task : "contains"
    Project ||--o{ Risk : "encounters"

    User {
        string id PK "cuid()"
        string email UK "unique email address"
        string password "bcrypt hashed string"
        string name "full user name"
        string role "ADMIN | PROJECT_MANAGER | TEAM_MEMBER"
        string avatar "optional image url"
        datetime createdAt "default now"
        datetime updatedAt "auto-updated"
    }

    Project {
        string id PK "cuid()"
        string title "project title"
        string description "scope summary"
        string department "client or business unit"
        string status "PLANNING | ACTIVE | ON_HOLD | COMPLETED | CANCELLED"
        string priority "LOW | MEDIUM | HIGH | CRITICAL"
        string health "HEALTHY | AT_RISK | CRITICAL"
        float progress "0.0 - 100.0 completion percentage"
        datetime startDate "project kickoff date"
        datetime endDate "target delivery deadline"
        string ownerId FK "references User(id)"
        datetime createdAt "default now"
        datetime updatedAt "auto-updated"
    }

    ProjectMember {
        string id PK "cuid()"
        string projectId FK "references Project(id)"
        string userId FK "references User(id)"
        string role "LEAD | DEVELOPER | DESIGNER | QA | MEMBER"
        datetime joinedAt "default now"
    }

    Task {
        string id PK "cuid()"
        string title "task summary"
        string description "task instructions"
        string status "TODO | IN_PROGRESS | IN_REVIEW | COMPLETED"
        string priority "LOW | MEDIUM | HIGH | URGENT"
        datetime dueDate "target completion date"
        string projectId FK "references Project(id)"
        string assigneeId FK "references User(id) [optional]"
        datetime createdAt "default now"
        datetime updatedAt "auto-updated"
    }

    Risk {
        string id PK "cuid()"
        string title "risk description"
        string description "potential impact narrative"
        string category "TECHNICAL | SCHEDULE | RESOURCE | EXTERNAL"
        int probability "rating 1 to 5"
        int impact "rating 1 to 5"
        int riskScore "computed: probability * impact (1-25)"
        string severity "LOW | MEDIUM | HIGH | CRITICAL"
        string mitigationPlan "countermeasures and actions"
        string status "IDENTIFIED | MITIGATING | CLOSED"
        string projectId FK "references Project(id)"
        string reporterId FK "references User(id)"
        datetime createdAt "default now"
        datetime updatedAt "auto-updated"
    }
```

---

## 2. Cardinality & Relational Constraints

1. **User $\rightarrow$ Project (1 to Many):**
   - A User (`PROJECT_MANAGER` or `ADMIN`) can create/manage zero or more Projects.
   - Each Project has exactly one creating owner (`ownerId`).
2. **Project $\rightarrow$ ProjectMember (1 to Many):**
   - A Project contains one or more assigned members.
   - Cascade delete: Removing a project removes all associated membership records.
3. **User $\rightarrow$ ProjectMember (1 to Many):**
   - A User can belong to multiple projects.
   - Unique constraint `(projectId, userId)` prevents duplicate assignments of the same user.
4. **Project $\rightarrow$ Task (1 to Many):**
   - A Project contains zero or more Tasks.
   - Cascade delete: Deleting a project automatically cascades to delete its associated tasks.
5. **Project $\rightarrow$ Risk (1 to Many):**
   - A Project encounters zero or more Risks.
   - Cascade delete: Deleting a project removes its risk register.
6. **Task $\rightarrow$ User (Many to 1, Optional):**
   - A Task can be assigned to at most one User (`assigneeId` is nullable for unassigned backlog tasks).
   - If a User is removed, task references are preserved (`SetNull`).
