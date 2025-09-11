# Prompting Techniques — Next.js v2 (Offline-ready)

This project is a small Next.js app containing an offline knowledge pack about prompting techniques for LLMs.
Each file begins with a section comment to simplify targeted edits. Pages use Tailwind CSS with typography plugin.

## Run locally
1. Clone the repo
2. npm install
3. npm run dev
4. open http://localhost:3000

## Notes
- Files include section comments like /* Section 05.06: Self-Refinement */ for quick reference.

## Deployment (GitHub Pages)
Static export is enabled via `output: 'export'`. `basePath` & `assetPrefix` are applied ONLY for GitHub Pages builds (see `build:gh`). Local builds omit them so CSS/JS work when serving `out` directly.

### Manual deploy
1. npm run build:gh (adds basePath + assetPrefix)
2. npm run deploy (pushes `out` folder)

### Automatic deploy (CI)
GitHub Actions workflow `.github/workflows/deploy.yml` builds on every push to `main` and publishes `out` to the `gh-pages` branch.

Site URL: https://tanofallcodes.github.io/prompting-site/

Local preview of exported site:
1. npm run build
2. npx serve out  (open http://localhost:3000 )

GitHub Pages preview (mimic production paths) options:
Option A: npm run build:gh then deploy (production scenario)
Option B: After `npm run build:gh`, manually test by copying contents into a subfolder:
	mkdir -p out/prompting-site && mv out/_next out/index.html out/01-* out/02-* out/03-* out/04-* out/05-* out/06-* out/07-* out/08-* out/09-* out/10-* out/404* out/prompting-site/ (adjust glob if needed)
Then open http://localhost:3000/prompting-site/

If you rename the repository, update:
- `homepage` in `package.json`
- `repoName` in `next.config.js`
- Adjust any hardcoded links if added later.

