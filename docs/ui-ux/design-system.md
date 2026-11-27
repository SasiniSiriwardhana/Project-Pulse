# UI/UX Design System Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Design Tokens

### 1.1 Spacing Scale (8pt Grid)
- `xs`: 4px (`p-1`, `gap-1`)
- `sm`: 8px (`p-2`, `gap-2`)
- `md`: 16px (`p-4`, `gap-4`)
- `lg`: 24px (`p-6`, `gap-6`)
- `xl`: 32px (`p-8`, `gap-8`)

### 1.2 Elevation & Shadows
- **Card Default:** `shadow-sm border border-slate-200 rounded-xl bg-white`
- **Dropdown / Flyout:** `shadow-lg border border-slate-200 rounded-lg bg-white`
- **Modal Dialog:** `shadow-2xl border border-slate-200 rounded-2xl bg-white`

---

## 2. Reusable UI Component Specifications

### 2.1 Buttons
- **Primary Button:** Navy/Blue fill with white text.
  - Classes: `inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50`
- **Secondary Button:** White background with subtle border.
  - Classes: `inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg shadow-sm transition-colors duration-150`
- **Danger Button:** Red fill with white text for destructive actions.
  - Classes: `inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors`

### 2.2 Status & Priority Badges
- **Task Status:**
  - `TODO`: `bg-slate-100 text-slate-700 border border-slate-200`
  - `IN_PROGRESS`: `bg-blue-50 text-blue-700 border border-blue-200`
  - `IN_REVIEW`: `bg-amber-50 text-amber-700 border border-amber-200`
  - `COMPLETED`: `bg-emerald-50 text-emerald-700 border border-emerald-200`
- **Priority:**
  - `LOW`: `bg-slate-100 text-slate-600`
  - `MEDIUM`: `bg-blue-100 text-blue-700`
  - `HIGH`: `bg-amber-100 text-amber-800 font-medium`
  - `URGENT`: `bg-red-100 text-red-800 font-semibold animate-pulse`
- **Project Health Indicators:**
  - `HEALTHY`: Green badge with green pulsing dot (`bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20`)
  - `AT_RISK`: Yellow/Amber badge with amber warning icon (`bg-amber-50 text-amber-700 ring-1 ring-amber-600/20`)
  - `CRITICAL`: Red badge with red alert icon (`bg-red-50 text-red-700 ring-1 ring-red-600/20`)

### 2.3 Metric KPI Card
- Structure:
  - Top: Label (uppercase, small) + Icon container (accent color background).
  - Center: Large bold metric value ($28\text{px}$).
  - Bottom: Trend or contextual detail (e.g., "$+12\%$ from last sprint" or "$3$ due this week").

### 2.4 Form Controls
- **Input Fields:**
  - `w-full px-3 py-2 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`
- **Select Dropdowns:**
  - Consistent padding with custom chevron SVG indicator.
