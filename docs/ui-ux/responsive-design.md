# Responsive Design Specification

## Project Name: ProjectPulse
### Document Version: 1.0.0

---

## 1. Breakpoint Grid Strategy
ProjectPulse utilizes Tailwind CSS standard breakpoints to deliver responsive behavior:

| Breakpoint | Minimum Width | Target Devices | Layout Behavior |
| :--- | :--- | :--- | :--- |
| `sm` | $640\text{px}$ | Large Mobile / Phablet | Single-column stack, condensed padding |
| `md` | $768\text{px}$ | Tablet Portrait | 2-column KPI grid, collapsible mobile sidebar drawer |
| `lg` | $1024\text{px}$ | Tablet Landscape / Laptop | Fixed 64px icon sidebar, 3-column KPI grid |
| `xl` | $1280\text{px}$ | Desktop Workstation | Full 240px expanded sidebar, 4-column KPI grid |
| `2xl`| $1536\text{px}$ | Large Monitor / Ultrawide | Max container width constraint (`max-w-7xl mx-auto`) |

---

## 2. Component Adaptation Rules

### 2.1 Navigation Sidebar
- **Desktop ($\ge 1024\text{px}$):** Persistent left sidebar fixed to the viewport with full logo, nav links, and user section.
- **Tablet / Mobile ($< 1024\text{px}$):** Sidebar is hidden off-canvas. A hamburger button in the top bar slides in a floating overlay drawer with backdrop blur.

### 2.2 Executive Dashboard Metrics
- **Desktop:** 6-card grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4`).
- **Tablet:** 2-row $\times$ 3-column grid.
- **Mobile:** Vertically stacked cards with compact padding.

### 2.3 Visual Charts (Recharts)
- Wrap all chart components inside `ResponsiveContainer` with `width="100%"` and appropriate aspect ratios (`aspect-[16/9]` on mobile, `aspect-[21/9]` on desktop).

### 2.4 Tables and Lists
- On viewports $< 768\text{px}$, wide tabular data structures (Projects, Risks) switch to a stacked card list format or enable horizontal scrolling with a visible scroll hint.
