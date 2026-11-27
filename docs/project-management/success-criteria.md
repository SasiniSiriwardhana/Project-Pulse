# Success Criteria

## 1. Overview
This document defines the quantitative and qualitative success criteria used to evaluate the completion and performance of the **ProjectPulse** platform. These metrics form the basis for Day 05 verification and project acceptance.

---

## 2. Technical Success Criteria

| ID | Category | Target Metric | Verification Method |
| :--- | :--- | :--- | :--- |
| **TSC-01** | **Build & Compilation** | 0 build errors across React/Vite frontend and Express backend. | Clean execution of `npm run build` and `node src/server.js`. |
| **TSC-02** | **API Response Time** | Median REST API response time $< 250\text{ ms}$ under standard local load. | Automated Postman test runner or integration script. |
| **TSC-03** | **Relational Integrity** | 100% cascade and foreign key consistency across User, Project, Task, and Risk models. | Prisma schema validation and database constraints tests. |
| **TSC-04** | **Security Verification** | 100% of non-public endpoints protected by JWT verification; passwords salted with bcrypt ($10\text{ rounds}$). | Security audit test on unauthenticated requests returning 401 Unauthorized. |
| **TSC-05** | **RBAC Enforcement** | Zero unauthorized role escalations (e.g., Team Members cannot delete projects). | Integration tests returning 403 Forbidden on restricted endpoints. |
| **TSC-06** | **Zero Secret Leaks** | No hardcoded API keys, JWT secrets, or DB credentials in git tracking. | Git audit and `.env.example` placeholder verification. |

---

## 3. Functional Success Criteria (MVP)

| ID | Feature Area | Success Condition |
| :--- | :--- | :--- |
| **FSC-01** | **Authentication Flow** | Users can register, log in, receive a valid JWT, and retain session across page reloads. |
| **FSC-02** | **Project Lifecycle** | Project Managers can create projects, assign members, modify target deadlines, and view calculated progress. |
| **FSC-03** | **Task Coordination** | Tasks can be created, assigned to team members, prioritized, and moved through status workflows (`TODO` $\rightarrow$ `COMPLETED`). |
| **FSC-04** | **Risk Calculation** | When probability ($P$) and impact ($I$) are updated, the risk score is automatically computed as $P \times I$, categorizing severity into Low, Medium, High, or Critical. |
| **FSC-05** | **Dynamic Health Score** | Project health status updates automatically based on overdue tasks and high-severity risks: Healthy ($> 75\%$ progress, 0 critical risks), At Risk ($50-75\%$ progress or 1-2 critical risks), Critical ($< 50\%$ progress or $> 2$ critical risks/overdue milestones). |
| **FSC-06** | **Analytics Dashboard** | Dashboard dynamically renders KPI summary cards and Recharts visualizations without console warnings or layout breakage. |

---

## 4. UI/UX & Usability Success Criteria

| ID | Criteria | Measurement Benchmark |
| :--- | :--- | :--- |
| **USC-01** | **Responsive Design** | Flawless responsive layout across Viewports: Desktop ($1920\times1080$, $1440\times900$), Laptop ($1280\times800$), Tablet ($768\times1024$). |
| **USC-02** | **Design System Fidelity** | Consistent typography, Navy/Blue primary theme, standard padding/margins, and Lucide icons applied uniformly across all screens. |
| **USC-03** | **Error Handling & Feedback** | User-friendly alert/toast notifications for API failures, validation errors, and successful mutations. |
| **USC-04** | **Navigation Efficiency** | Core actions (e.g., create task, view project health, log risk) accessible within 2 clicks from the main navigation. |
