# Demo Scenario Catalog — PR Audit (PR #4–#8)

This document curates existing pull requests into a visual regression demo suite. It reuses the existing PRs wherever possible and marks one PR for replacement with a safe refactor to preserve coverage.

| PR | Category | Demo Priority | Why it matters | Keep | Needs changes |
|----|----------|---------------|----------------|------|---------------|
| #4 | EXPECTED_VISUAL_CHANGE | High | Product image size increase — clear visual change to validate intended design updates. | Yes | None |
| #5 | RENDERING_BLOCKED | High | CSS specificity override (.checkout-button) hides Tailwind utility changes — excellent for diagnosing rendering blockers. | Yes | None (use as canonical example) |
| #6 | EXPECTED_STYLE_CHANGE | High | Background + accent border change — primary marketing/style demo. | Yes | None |
| #7 | TEXT/SMALL_CHANGE → REPLACE w/ SAFE_REFACTOR | Low | Title text change alone is low-value for visuals; replace with a safe refactor demonstrating no visual effect. | Replace (SAFE_REFACTOR) | Create code-only refactor branch, ensure PixelDiff ≈ 0 |
| #8 | UNEXPECTED_REGRESSION | High | Minor layout adjustment produces broken layout — shows bug detection and triage. | Yes | Possibly tune regression to isolate root cause |

---

Retained PRs (detailed analysis)

## PR #4 — EXPECTED_VISUAL_CHANGE
- Developer Intent: Increase product image prominence by increasing image height (h-56 → h-72).
- Expected Visual Result: Larger product images, more prominent cards, slight layout reflow.
- Actual Visual Result: Product images are larger; cards occupy more vertical space; grid slightly shifts on desktop.
- Rendering Diagnosis: Pure style change — DOM unchanged; class value changed causing image container height increase.
- Assessment: Valid expected visual change. Pixel diffs localized to product image area and adjacent card spacing.
- Why Visual Diff Matters: Confirms design intent and catches unintended layout impacts (overflow, overlap).
- QA Focus: Verify grid responsiveness, image cropping (object-fit), text truncation/line-clamp behavior.
- Automation Opportunity: Snapshot baseline vs branch for product-grid region; assert image height and no overlap.

## PR #5 — RENDERING_BLOCKED (Canonical)
- Developer Intent: Change button colors via Tailwind utilities (e.g., bg-orange-600 / bg-green-600).
- Expected Visual Result: Buttons reflect new Tailwind color utilities.
- Actual Visual Result: No change in rendered button color due to `.checkout-button` CSS rule in `index.css` (specificity/ordering override).
- Rendering Diagnosis: Rendering blocked by global CSS specificity — Tailwind utility wins only when not overridden; here the custom class takes precedence.
- Assessment: Keep as canonical Rendering Blocked example. Demonstrates why visual diffs may be absent despite semantic changes.
- Why Visual Diff Matters: Highlights a class-specific failure mode where dev intent isn't visible — valuable for triage.
- QA Focus: Check CSS cascade and ordering; verify CSS bundle contains an overriding rule; test both dev and production builds.
- Automation Opportunity: Add assertion that utility class computed styles differ from expected; detect override via computedStyle checks in headless browser.

## PR #6 — EXPECTED_STYLE_CHANGE (Primary marketing/demo)
- Developer Intent: Tweak background and add accent left border to the products container (bg-gray-100 + border-l-4 border-blue-500).
- Expected Visual Result: Section background becomes light gray and receives a blue accent border on the left.
- Actual Visual Result: Background and border render as expected; small area-level pixel diffs centered on the section.
- Rendering Diagnosis: Style-only change with predictable rendering and DOM unchanged.
- Assessment: Excellent marketing/demo example — obvious to non-technical viewers and simple to validate.
- Why Visual Diff Matters: Shows brand/marketing-driven style changes and verifies visual consistency across releases.
- QA Focus: Confirm border color/width, background coverage, and accessibility contrast with adjacent text.
- Automation Opportunity: Region snapshot and color-check (pixel sampling) for the products section.

## PR #8 — UNEXPECTED_REGRESSION
- Developer Intent: Minor layout/spacing adjustment (e.g., spacing/padding tweaks) intended to be harmless.
- Expected Visual Result: Slight spacing differences, no functional breakage.
- Actual Visual Result: Visible broken layout (sidebar not sticky, single-column grid, checkout button shifted) — multiple regressions observed in `CheckoutPageRegression` and `ProductCardRegression` variants.
- Rendering Diagnosis: Change affected layout classes and component structure leading to flow/regression; DOM largely same but class/value changes produced cascading layout failures.
- Assessment: Keep — strong demo for detecting regressions that look like minor edits but have big user impact.
- Why Visual Diff Matters: Catches regressions that break UX; high QA value for blocking releases.
- QA Focus: Reproduce layout at multiple breakpoints, check sticky behavior and grid column counts, validate checkout CTA visibility.
- Automation Opportunity: Add viewport-based snapshots and DOM assertions for grid columns and sticky sidebar behavior.

---

Replacement recommendation for PR #7

## PR #7 — Replace with SAFE_REFACTOR (NO_VISUAL_EFFECT)
- Reason: Current PR (title text change) is low-value visually and duplicates trivial coverage. Replace branch with a safe refactor that changes code structure but preserves rendered output.
- Requirements for replacement PR:
  - Code-only refactor (rename helper, extract small component, reorganize imports) with no class or style changes.
  - Run visual snapshot; PixelDiff should be ≈ 0.
  - Include test coverage or linting to show functional parity.

---

Demo suite verdict

- Reuse rate: 4 of 5 PRs retained (80%) — meets reuse requirement.
- Unique capabilities covered: Expected Visual Change, Expected Style Change, Rendering Blocked, Unexpected Regression, No Visual Effect (via replacement).
- Final verdict: DEMO_SUITE_READY
