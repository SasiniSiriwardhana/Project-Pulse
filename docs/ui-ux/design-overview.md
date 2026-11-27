# UI/UX Design Overview

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Design Philosophy
**ProjectPulse** is designed as a modern, high-density, professional SaaS platform. The user interface prioritizes clarity, rapid information absorption, and minimal cognitive friction. Project managers and team contributors need to assess status, identify overdue items, and evaluate critical risks at a glance.

### Core Design Principles:
1. **Content-First Hierarchy:** Essential project health metrics and high-priority action items are surfaced at the top of every view.
2. **Predictable Mental Model:** Consistent navigation patterns—persistent left navigation sidebar, sticky top bar with breadcrumbs and user profile, and structured content canvas.
3. **Intentional Color Coding:** Color is used strictly to convey semantic meaning (e.g., Red for Critical risks/Overdue tasks, Green for Healthy/Completed, Blue for interactive actions).
4. **Data Density with Breathing Room:** Balanced layout with generous whitespace, consistent 8px grid spacing, and distinct card containers.

---

## 2. Visual Theme & Color Palette

| Semantic Role | Hex Value | Tailwind Class | Application |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `#0f172a` / `#1e293b` | `slate-900` / `slate-800` | Sidebar, headers, primary brand accents |
| **Primary Action Blue** | `#2563eb` / `#1d4ed8` | `blue-600` / `blue-700` | Primary buttons, active tabs, progress bars |
| **Neutral Background** | `#f8fafc` | `slate-50` | Global page background |
| **Card / Surface** | `#ffffff` | `white` | Metric cards, data tables, modals |
| **Border / Divider** | `#e2e8f0` | `slate-200` | Card borders, table dividers |
| **Success / Healthy** | `#10b981` / `#059669` | `emerald-500` / `emerald-600` | Completed status, Healthy health badges |
| **Warning / At Risk** | `#f59e0b` / `#d97706` | `amber-500` / `amber-600` | In Review status, Medium risks, At Risk badges |
| **Danger / Critical** | `#ef4444` / `#dc2626` | `red-500` / `red-600` | Overdue badges, Critical risks, delete actions |

---

## 3. Typography Hierarchy
- **Primary Font Family:** Inter / System Sans-serif (`font-sans` in Tailwind).
- **Display Headings (`text-2xl font-bold text-slate-900`):** Page titles, primary KPI numbers.
- **Section Titles (`text-lg font-semibold text-slate-800`):** Widget headers, table group titles.
- **Card Titles & Labels (`text-xs font-medium text-slate-500 uppercase tracking-wider`):** Metric descriptions, table headers.
- **Body Text (`text-sm text-slate-600`):** Task descriptions, activity feeds, form help text.
- **Badges / Tags (`text-xs font-semibold px-2.5 py-0.5 rounded-full`):** Priority indicators, status pills.
