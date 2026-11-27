# RESTful API Design Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Global API Standards
- **Base URL:** `/api`
- **Content-Type:** `application/json`
- **Authentication:** HTTP Bearer Header (`Authorization: Bearer <jwt-token>`)
- **Standard Success Response Format:**
  ```json
  {
    "success": true,
    "data": { ... },
    "message": "Operation completed successfully"
  }
  ```
- **Standard Error Response Format:**
  ```json
  {
    "success": false,
    "error": "Error description or validation errors",
    "statusCode": 400
  }
  ```

---

## 2. API Endpoints Directory

### 2.1 System Health
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Public | Returns service status, timestamp, and environment |

### 2.2 Authentication (`/api/auth`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Public | Register new user account |
| `POST` | `/api/auth/login` | Public | Authenticate user & issue signed JWT |
| `GET` | `/api/auth/me` | Authenticated | Retrieve authenticated user profile |

### 2.3 Users (`/api/users`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/users` | Admin, PM | List all users (for assignment dropdowns) |
| `GET` | `/api/users/:id` | Authenticated | Get user profile details |
| `PATCH` | `/api/users/:id/role`| Admin | Update system role |
| `PUT` | `/api/users/profile` | Authenticated | Update personal profile information |

### 2.4 Projects (`/api/projects`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/projects` | Authenticated | List accessible projects with progress/health |
| `POST` | `/api/projects` | Admin, PM | Create new project |
| `GET` | `/api/projects/:id` | Authenticated | Retrieve single project with tasks, members, risks |
| `PUT` | `/api/projects/:id` | Admin, PM | Update project details, timeline, or status |
| `DELETE`| `/api/projects/:id` | Admin, PM | Delete/archive project |

### 2.5 Project Members (`/api/projects/:projectId/members`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/projects/:projectId/members` | Authenticated | List all members assigned to project |
| `POST` | `/api/projects/:projectId/members` | Admin, PM | Assign a user to project with role |
| `DELETE`| `/api/projects/:projectId/members/:userId`| Admin, PM | Remove member from project |

### 2.6 Tasks (`/api/tasks`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/tasks` | Authenticated | List tasks (filter by project, assignee, status) |
| `POST` | `/api/tasks` | Admin, PM | Create new task within project |
| `GET` | `/api/tasks/:id` | Authenticated | Retrieve task details |
| `PUT` | `/api/tasks/:id` | Admin, PM | Update task details, assignee, priority |
| `PATCH` | `/api/tasks/:id/status` | Authenticated | Update task status (`TODO` $\rightarrow$ `COMPLETED`) |
| `DELETE`| `/api/tasks/:id` | Admin, PM | Delete task |

### 2.7 Risks (`/api/risks`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/risks` | Authenticated | List risks (filter by project, severity, status) |
| `POST` | `/api/risks` | Authenticated | Log new risk (calculates $P \times I$ automatically) |
| `GET` | `/api/risks/:id` | Authenticated | Retrieve risk details |
| `PUT` | `/api/risks/:id` | Admin, PM | Update risk details, mitigation, or ratings |
| `DELETE`| `/api/risks/:id` | Admin, PM | Close/delete risk |

### 2.8 Executive Dashboard (`/api/dashboard`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/dashboard/stats` | Authenticated | Retrieve 6 aggregate KPI card metrics |
| `GET` | `/api/dashboard/charts` | Authenticated | Retrieve data for Recharts (Progress, Status donut) |
| `GET` | `/api/dashboard/activities`| Authenticated | Retrieve recent chronological activity stream |

### 2.9 Reports (`/api/reports`)
| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/reports/projects-summary` | Admin, PM | Portfolio overview tabular dataset |
| `GET` | `/api/reports/risk-matrix` | Admin, PM | Full risk registry ranked by severity |
