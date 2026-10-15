# Anubis Client Website

A responsive, multi-file landing page with a dark and gold gaming aesthetic.

## Preview it locally
1. Extract the ZIP.
2. Open `index.html` in your browser. For best results, use a local server or VS Code's Live Server extension.
3. Edit the files below to make it your own.

## Change the pictures
Open `assets/images/` and replace the sample images with your own. Keep the same filenames, or change the matching `src` path in `index.html`.

- `hero-showcase.png` — your latest uploaded Anubis module interface screenshot used as the large homepage image
- `hero.svg` — original sample artwork (optional)
- `screenshot-1.svg` — first showcase card
- `screenshot-2.svg` — second showcase card
- `logo.svg` — brand mark in the header and download panel

**Tip:** Minecraft screenshots are easiest to use as `.png` or `.jpg`. For example, put `my-screenshot.png` in `assets/images/`, then change the relevant HTML from `src="assets/images/screenshot-1.svg"` to `src="assets/images/my-screenshot.png"`.

## Change the download and Discord links
Open `script.js` and edit the `SITE_SETTINGS` section at the top:

- `downloadUrl` — your official client download or release page
- `discordUrl` — your Discord invite

The buttons intentionally show an alert until you replace the `#` placeholders.

## Change the text and colors
- Edit headings, feature descriptions, FAQ answers, and page title in `index.html`.
- Edit colors and layout in `styles.css`. Main colors are at the top in `:root` (`--bg`, `--gold`, `--gold2`, etc.).

## Publish it
Upload the entire folder (not just `index.html`) to a static host such as GitHub Pages, Netlify, or Cloudflare Pages. Keep the `assets/` folder beside `index.html`.

This is a front-end website template. The download and Discord URLs are placeholders; replace them with your real links before going live.
