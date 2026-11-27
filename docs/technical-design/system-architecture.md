# System Architecture Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. High-Level Architectural Pattern
**ProjectPulse** follows a modern, decoupled client-server multi-tier architecture composed of:
1. **Presentation Layer:** React Single Page Application (SPA) bundled with Vite and styled with Tailwind CSS.
2. **API & Business Logic Layer:** Stateless Node.js / Express RESTful API with modular middleware and domain controllers.
3. **Data Access Layer:** Prisma ORM providing type-safe relational mappings and query generation.
4. **Persistence Layer:** PostgreSQL Relational Database storing normalized relational records.

---

## 2. Multi-Tier Architecture Diagram

```
+-------------------------------------------------------------------------------+
|                             CLIENT / BROWSER TIER                             |
|                                                                               |
|   +-----------------------------------------------------------------------+   |
|   |                       React Single Page App (Vite)                   |   |
|   |  - React Router DOM (Declarative Client Routing)                       |   |
|   |  - Tailwind CSS (Utility-first Design System)                         |   |
|   |  - Recharts (Analytics Data Visualizations)                           |   |
|   |  - Lucide React (Standardized Iconography)                            |   |
|   |  - Axios HTTP Client (Interceptors for Bearer JWT Tokens)             |   |
|   +-----------------------------------------------------------------------+   |
+---------------------------------------|---------------------------------------+
                                        | HTTPS / JSON REST API
                                        v
+-------------------------------------------------------------------------------+
|                             APPLICATION SERVER TIER                           |
|                                                                               |
|   +-----------------------------------------------------------------------+   |
|   |                         Node.js & Express API Engine                  |   |
|   |                                                                       |   |
|   |  [Middlewares]                                                        |   |
|   |   - CORS Configuration & Express JSON Parser                          |   |
|   |   - Authentication Middleware (verifyToken with jsonwebtoken)        |   |
|   |   - Authorization Middleware (requireRole: Admin, PM, Member)         |   |
|   |   - Centralized Global Error & Exception Handler                      |   |
|   |                                                                       |   |
|   |  [Controllers & Domain Services]                                      |   |
|   |   - AuthController (Register, Login, Token verification)              |   |
|   |   - ProjectController (CRUD, Health Score computation)               |   |
|   |   - MemberController (Project roster allocations)                     |   |
|   |   - TaskController (Task lifecycle, Overdue detector)                |   |
|   |   - RiskController (Risk logging, P x I Severity Engine)             |   |
|   |   - DashboardController (KPI aggregates, Chart data)                  |   |
|   +-----------------------------------|-----------------------------------+   |
+---------------------------------------|---------------------------------------+
                                        | Query Engine / Connection Pool
                                        v
+-------------------------------------------------------------------------------+
|                            DATA ACCESS & ORM TIER                             |
|                                                                               |
|   +-----------------------------------------------------------------------+   |
|   |                            Prisma Client ORM                          |   |
|   |  - Declarative schema (prisma/schema.prisma)                          |   |
|   |  - Automated migrations (prisma migrate)                             |   |
|   |  - Type-safe relational querying, transactions, and cascades          |   |
|   +-----------------------------------|-----------------------------------+   |
+---------------------------------------|---------------------------------------+
                                        | TCP Port 5432 / PostgreSQL Protocol
                                        v
+-------------------------------------------------------------------------------+
|                               DATABASE TIER                                   |
|                                                                               |
|   +-----------------------------------------------------------------------+   |
|   |                        PostgreSQL Relational DB                       |   |
|   |  - Tables: users, projects, project_members, tasks, risks             |   |
|   |  - Primary Keys (UUID/CUID), Foreign Keys, Unique & Composite Indexes |   |
|   +-----------------------------------------------------------------------+   |
+-------------------------------------------------------------------------------+
```

---

## 3. Component Interactions & Communication Flow

### 3.1 Authentication Workflow
1. Client dispatches credentials via `POST /api/auth/login`.
2. `AuthController` validates request body and queries User via `prisma.user.findUnique`.
3. Password verified using `bcrypt.compare`.
4. Server generates signed JWT with `id`, `email`, `role`, and expiration timestamp.
5. Client intercepts response, caches token in `localStorage`, and injects `Authorization: Bearer <token>` on all future requests.

### 3.2 Dynamic Risk & Health Computation Flow
1. User creates or modifies a Task or Risk.
2. `RiskController` or `TaskController` processes the mutation within a Prisma transaction.
3. Automated mathematical engines compute:
   $$\text{Risk Score} = \text{Probability} \times \text{Impact}$$
   $$\text{Project Progress} = \frac{\text{Completed Tasks}}{\text{Total Tasks}} \times 100$$
4. Overall Project Health status (`HEALTHY`, `AT_RISK`, `CRITICAL`) is updated accordingly.
5. Real-time updated payload returns to client; React state triggers smooth UI re-render.
