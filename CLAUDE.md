# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WFPB Jumpstart Tracker — a client-side web app for tracking a 15-day whole food plant-based diet program. Zero external dependencies; vanilla HTML/CSS/JavaScript with localStorage persistence.

## Development

No build system, package manager, or transpiler. To run locally:

```bash
# Any static file server works:
python3 -m http.server 8000
# Or simply open index.html directly in a browser
```

No tests or linting configured.

## Architecture

Four files make up the entire application:

- **`index.html`** — Shell markup with view containers (day, shopping, recipes, food guide, progress). Fixed header (day navigation pills) and fixed footer (5-button bottom nav).
- **`data.js`** — All program content as exported constants: `MEAL_PLAN` (14 days), `DAILY_ESSENTIALS`, `ZOOM_MEETINGS`, `PREP_TASKS`, `SHOPPING` (4 lists), `FOOD_GUIDE`, and `RECIPES` (21 recipes across 7 categories). Also defines `START_DATE`.
- **`app.js`** — All application logic. Global `state` object persisted to localStorage under key `'jumpstart-tracker'`. Key patterns:
  - View switching via `switchView(viewId)` — toggles `.hidden` class on `.view` elements
  - Day navigation via `navigateToDay(n)` — updates `currentDay`, re-renders day view
  - State keyed as `day-{N}` (essentials, prep, journal, notes, meals) and `shop-{listKey}` (shopping checkboxes)
  - Render functions build DOM imperatively (`renderDayView`, `renderMeals`, `renderJournal`, etc.)
  - All input changes call `saveState()` immediately
- **`style.css`** — CSS custom properties for theming (greens, blues, grays). Mobile-first with safe-area-inset support. Fixed header/footer layout with scrollable content area.

## Key Behaviors

- `START_DATE` in `data.js` is the Day 1 reference; prep days are negative numbers (Day -3, -2, -1)
- `getTodayDay()` calculates which program day it is relative to `START_DATE`
- Progress view shows completion stats and a day-by-day grid
- Data export downloads state as JSON; reset clears localStorage with confirmation
- Recipe IDs in `MEAL_PLAN` link meal names to full recipe details
