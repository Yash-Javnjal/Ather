# AETHER Travel Website

AETHER is a modern travel landing page and authentication demo for a boutique travel brand. The project includes a premium homepage, curated destination cards, a trip-matching experience, and a simple local registration/login flow using browser `localStorage`.

## Features

- Elegant hero section and travel-focused landing page
- Destination journal with curated travel cards
- Smart trip finder based on budget and travel mood
- Responsive design for desktop and mobile screens
- User registration and login pages
- Client-side authentication using browser storage

## Project Structure

- `Practice/index.html` — main travel homepage
- `Practice/login.html` — login page
- `Practice/register.html` — registration page
- `Practice/script.js` — home page logic, trip data, and filtering
- `Practice/auth.js` — registration/login logic and user validation
- `Practice/styles.css` — styling and layout
- `Practice/images/` — image assets used by the project

## Getting Started

This is a static website, so no installation is required.

### Option 1: Open directly in a browser

Open `Practice/index.html` in your browser.

### Option 2: Run a local web server

From the project root, run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/Practice/
```

## Notes

- User accounts are stored in the browser using `localStorage`.
- The project is front-end only and does not connect to a backend or database.
- It is designed as a prototype/demo for a travel brand experience.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Unsplash image sources
