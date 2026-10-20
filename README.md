# VentureVerse 2026 — Event Landing Page

A responsive, single-page event website concept for **VentureVerse 2026: Ideas into Action**, a fictional student entrepreneurship event hosted by the Entrepreneurship Development Cell (EDC), JSS University, Noida.

## Files

- `index.html` — page content and semantic structure
- `styles.css` — theme, components, responsive layouts, and reduced-motion support
- `script.js` — accessible mobile navigation and demo form validation

## Run locally

1. Put all three files in the same folder.
2. Open `index.html` in a modern browser.

For a local development server, you can use VS Code's Live Server extension or run `python -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Features

- Responsive desktop, tablet, and mobile layouts
- Sticky header and section-based navigation
- Mobile menu with keyboard Escape support and ARIA state
- Event overview, benefits, six-item schedule, and two fictional speaker profiles
- Demo registration-interest form with client-side validation
- Semantic landmarks, visible focus states, skip link, and reduced-motion preference support
- No JavaScript libraries or build tools required

## Important demo notes

- The University Auditorium is a fictional venue placeholder.
- Speaker names and roles are fictional profiles.
- The form does **not** submit to a server, send email, or store personal data. Connect it to an approved backend or registration service before using it for a real event.
- `edc@example.com` is a contact placeholder; replace it with an official address before launch.
- Fonts use local system font stacks. No external font services are requested.

## Design decisions

- **Visual direction:** dark navy canvas with lime, violet, and warm orange accents for a contemporary startup-event feel.
- **Hierarchy:** oversized headline and clear event metadata make the event purpose, date, time, and venue immediately visible.
- **Navigation:** anchor links keep the page compact and easy to scan.
- **Mobile:** content collapses into a single column; the desktop navigation becomes a toggleable menu.
- **Maintainability:** colors and common sizing live in CSS custom properties, and JavaScript is separated from markup.
