# Demo Presentation Order

Recommended sequence to present the curated scenarios (concise, progressive learning arc):

1. PR #6 — Expected Style Change
   - Simple, high-impact marketing/style tweak (background + accent border). Easy to understand.

2. PR #4 — Expected Visual Change
   - Larger product images — clear layout impact and slightly more complex to reason about.

3. PR #5 — Rendering Blocked
   - Demonstrates a key diagnostic: dev intent present in code but not visible due to CSS override. Use as canonical triage example.

4. PR #8 — Unexpected Regression
   - Shows how small edits can produce significant UX breakage (sidebar/grid/CTA issues). Good for root-cause debugging demos.

5. PR #7 (REPLACED) — Safe Refactor / No Visual Effect
   - Demonstrate zero-diff confidence: refactor code without changing visuals. Validates that the tooling avoids false positives.

Optional (only add if missing from repo branches):
- VIEWPORT_BREAKPOINT — show breakpoint-driven layout change.
- COMPONENT_NOT_RENDERED — show a component that fails to render (null render).
- ACCESSIBILITY_CONTRAST — highlight contrast/regression with an automated contrast check.

Notes:
- Keep PR #5 as the canonical Rendering Diagnosis example.
- Aim to reuse branches; only create new branches if an optional category is truly missing.
