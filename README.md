# GLAAM - Greater Los Angeles Area Mensa

This is the source code for the official website of the Greater Los Angeles Area Mensa (GLAAM). It is built with [Eleventy (11ty)](https://www.11ty.dev/) and styled using [Tailwind CSS](https://tailwindcss.com/).

## Tech Stack

- **Static Site Generator:** Eleventy (v3)
- **Styling:** Tailwind CSS (v4)
- **Templating:** Nunjucks (`.njk`)
- **Deployment:** Cloudflare Pages

## Getting Started

To run the project locally, ensure you have Node.js installed. Then, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   *This command runs Eleventy in serve mode and concurrently runs the Tailwind compiler in watch mode. The local server is typically available at `http://localhost:8080/`.*

3. **Build for production:**
   ```bash
   npm run build
   ```
   *This command cleans up the output directory, compiles the CSS, and generates the final static site in the `_site` directory.*

## Project Structure

- `src/` — Contains all the page templates, includes (`_includes`), and data files.
- `src/assets/` — Stores images and other static assets.
- `public/` — Contains top-level static files (like the favicon `logo.png`).
- `_site/` — The compiled output directory (generated automatically, ignored by Git).
- `eleventy.config.js` — The Eleventy configuration file.
