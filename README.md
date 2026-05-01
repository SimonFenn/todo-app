# Todo App — BMAD + Cursor Prototype

A React + Vite + Tailwind CSS todo UI used to explore an AI-assisted **BMAD** (multi-persona) specification flow and implementation in **Cursor**.

## Setup

Prerequisites: **Node.js** (LTS recommended) and **npm**.

1. Clone or copy this repository and open a terminal in the project root.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL Vite prints (usually `http://localhost:5173`).

Other useful commands:

- `npm run build` — production build  
- `npm run preview` — serve the production build locally  
- `npm run lint` — run ESLint  

## How I Used BMAD

BMAD structures work across complementary **personas** so specs stay aligned before coding. For this prototype, four roles were used:

| Persona | Focus | What they produced |
| -------- | ------ | ------------------- |
| **PM (Product Manager)** | Outcomes, scope, acceptance | User stories, priorities, and “done” criteria (e.g. add/toggle/delete/clear, loading/error/empty states, responsive basics). |
| **Architect** | Structure and technical fit | Stack choice (React + Vite + Tailwind), component boundaries (`AppShell`, `TodoList`, `TodoItem`, etc.), and how state flows from `App` into presentational pieces. |
| **Designer / Dev** | UX and implementation detail | Layout patterns (centered shell, list chrome), interaction rules (Enter to submit, disabled empty add, hover vs mobile delete), and Tailwind-level visual language. |
| **Strategist** | Narrative and learning goals | Why this exercise exists (prototype, not production), how artifacts feed Cursor, and what “success” means for the BMAD → Cursor handoff. |

Together, these outputs became the **single source of truth** for what to build and in what order.

## How I Used Cursor

Cursor’s AI chat was used as an **implementation partner** against the BMAD artifacts:

1. **Scaffold** — Create the `src/components` layout and placeholder exports so the tree matched the Architect’s map.
2. **Vertical slices** — One chat turn (or a short thread) per feature area: `Header`, `TodoInput`, `TodoItem`, list states, then `App` state and wiring.
3. **BMAD as prompts** — Paste or summarize BMAD sections directly into the chat (acceptance criteria, component list, responsive rules). Tight prompts (“implement X with props Y, behavior Z”) reduced rework.
4. **Refinement** — Follow-up messages for Tailwind polish, accessibility tweaks, and responsive behavior (`sm:` / `md:`) without rewriting the whole app.
5. **Review passes** — Ask for a pass over “responsive + tap targets + overflow” so global concerns were handled after local features.

Feeding BMAD specs **as prompts** (not only as background reading) kept the model aligned with **persona decisions** instead of generic todo-app assumptions.

## What I Learned

- **Front-loaded specs pay off** — When PM + Architect + Designer outputs agree, Cursor spends fewer tokens on wrong shapes and more on details you care about.
- **Component contracts beat monolith prompts** — Defining props and state in `App` first, then children, mirrors how teams work and matches how the model reasons file-by-file.
- **State vs UI separation** — Keeping loading/error/empty in `TodoList` and domain state in `App` made prompts and reviews easier than mixing fetch logic into every leaf.
- **Responsive rules belong in the spec** — Calling out breakpoints, min tap sizes, and “no horizontal scroll at 320px” in BMAD made Cursor’s Tailwind changes testable instead of vague.
- **Iteration is conversational** — Small follow-ups (“stack input on mobile”, “delete always visible below `sm`”) behave like code review comments and compound quickly.

## Known Limitations

- **No persistence** — Refreshing the page resets todos (in-memory / initial mock only).  
- **No backend** — No API, auth, or multi-device sync.  
- **Delete has no confirmation dialog** — Removing a todo is immediate; there is no “Are you sure?” step.
