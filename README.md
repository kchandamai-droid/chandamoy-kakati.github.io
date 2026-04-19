# chandamoy-kakati.github.io

Lightweight starter web app scaffold designed for **GitHub Pages** and easy visual customization (great for Figma-to-code iteration).

## Project structure

```text
/
├── index.html        # App shell and UI layout
├── styles.css        # Design tokens + component styling
└── app.js            # Small interaction layer
```

## Quick start

No build step is required.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Local static server (recommended)

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Usage

- Enter text in **“What are you building?”**
- Click **Update preview** (or press Enter)
- The live preview card updates immediately

## Customize design quickly

Most visual settings are CSS variables in `styles.css` under `:root`:

- `--bg`, `--surface`, `--text`, `--muted`
- `--accent`, `--accent-strong`
- `--radius`, `--shadow`

You can also edit:

- Typography and spacing in `styles.css`
- Layout blocks in `index.html`
- Interaction behavior in `app.js`

## Deploy on GitHub Pages

1. Push to `main`
2. In repo settings, enable **Pages** for the branch (if not already enabled)
3. GitHub Pages serves `index.html` from the repository root
