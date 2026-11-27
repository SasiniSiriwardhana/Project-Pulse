# Non-Functional Requirements Specification (NFRS)

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Overview
This document specifies the non-functional requirements (NFRs) for **ProjectPulse**, defining quality attributes, system constraints, performance thresholds, and operational standards.

---

## 2. Requirements Matrix

### 2.1 Security (NFR-SEC)
- **NFR-SEC-001 (Password Encryption):** User passwords must be salted and hashed using `bcrypt` with a minimum cost factor of 10 before storage. Raw passwords must never be logged or persisted.
- **NFR-SEC-002 (Token-Based Authentication):** All authenticated REST API interactions must require a valid signed JWT bearer token in the `Authorization` header (`Bearer <token>`).
- **NFR-SEC-003 (Input Sanitization):** All incoming API payloads must be validated and sanitized to prevent SQL injection, cross-site scripting (XSS), and prototype pollution.
- **NFR-SEC-004 (CORS Configuration):** The backend API must enforce a strict Cross-Origin Resource Sharing (CORS) whitelist restricting requests to authorized client origins.
- **NFR-SEC-005 (Credential Confidentiality):** Zero secrets, keys, or credentials shall be checked into version control. All configuration must be provided via external environment variables (`.env`).

### 2.2 Performance (NFR-PERF)
- **NFR-PERF-001 (API Response Latency):** 95% of standard read/write REST API requests must respond within 250 milliseconds under standard concurrency ($< 50$ concurrent connections).
- **NFR-PERF-002 (Client Initial Load Time):** The client web application bundle must load and render the login view in under 1.5 seconds on modern broadband connections ($> 20\text{ Mbps}$).
- **NFR-PERF-003 (Database Query Efficiency):** Complex multi-relation queries (e.g., Project with Tasks, Members, and Risks) must utilize Prisma indexed relational joins and execute in $< 50\text{ ms}$.

### 2.3 Usability (NFR-USE)
- **NFR-USE-001 (Navigation Simplicity):** Primary operational views (Dashboard, Projects, Tasks, Risks, Reports) must be accessible within a single click from the main sidebar.
- **NFR-USE-002 (Visual Feedback):** Any asynchronous operation (data submission, status toggle, filter application) must present immediate visual feedback via loaders, skeletons, or toast notifications within 100 milliseconds.
- **NFR-USE-003 (Accessibility & Contrast):** UI text and interactive components must adhere to WCAG 2.1 AA standards for color contrast, readability, and keyboard focus indicators.

### 2.4 Reliability & Availability (NFR-REL)
- **NFR-REL-001 (Graceful Error Handling):** The backend must intercept all uncaught runtime exceptions through a centralized error-handling middleware, returning standardized JSON error responses (`{ success: false, message: "..." }`) and avoiding unhandled node crashes.
- **NFR-REL-002 (Data Transaction Integrity):** All relational modifications involving dependent entities (such as cascade task deletions or member reallocations) must execute within database transactions.

### 2.5 Maintainability & Code Quality (NFR-MNT)
- **NFR-MNT-001 (Modular Architecture):** Codebase must maintain strict separation of concerns:
  - Frontend: `components/`, `pages/`, `layouts/`, `services/`, `context/`.
  - Backend: `config/`, `controllers/`, `routes/`, `middleware/`, `services/`, `utils/`.
- **NFR-MNT-002 (ORM Declarative Schema):** All database entities must be managed declaratively through `prisma/schema.prisma` as the single source of truth.

### 2.6 Scalability (NFR-SCL)
- **NFR-SCL-001 (Stateless API Layer):** The Express backend must remain completely stateless, relying on JWT verification without server-side memory sessions, enabling horizontal scaling across multiple instances.
- **NFR-SCL-002 (Database Indexing):** Foreign keys (`projectId`, `userId`, `assigneeId`) and frequently filtered fields (`status`, `priority`) must have relational indexes in PostgreSQL.

### 2.7 Responsiveness & Cross-Browser Compatibility (NFR-RSP)
- **NFR-RSP-001 (Responsive Viewport Adaptation):** The user interface must adapt dynamically across standard screen widths:
  - Desktop: $1440\text{px} - 1920\text{px}$ (Expanded sidebar + multi-column grid).
  - Laptop / Small Screen: $1024\text{px} - 1366\text{px}$ (Condensed metrics).
  - Tablet: $768\text{px} - 1023\text{px}$ (Collapsible drawer + stacked cards).
- **NFR-RSP-002 (Cross-Browser Consistency):** Full rendering and functionality must be verified on current versions of Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari.
