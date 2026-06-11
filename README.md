# The Gallery — Virtual Photography Exhibition

A static, single-page virtual exhibition showcasing photography hosted on Google Drive.

## How it works

- `index.html` — page structure and layout for the exhibition rooms
- `css/style.css` — dark gallery theme, responsive grid, lightbox styling
- `js/gallery-data.js` — list of exhibition "rooms" and the photos in each, referenced by Google Drive file ID
- `js/main.js` — renders the rooms/grids and powers the click-to-enlarge lightbox (with keyboard arrow + escape support)

## Important: Google Drive sharing

Images are loaded directly from Google Drive using each file's ID via:

```
https://lh3.googleusercontent.com/d/<FILE_ID>=w<WIDTH>
```

For this to work, **every photo referenced in `js/gallery-data.js` must be shared as
"Anyone with the link" (Viewer)** in Google Drive. Files that are private will fail to load.

## Adding / changing photos

1. Open the photo in Google Drive, set sharing to "Anyone with the link".
2. Copy the file ID from its share link (`https://drive.google.com/file/d/<FILE_ID>/view...`).
3. Add an entry to the relevant room (or create a new room) in `js/gallery-data.js`:

```js
{ id: "<FILE_ID>", caption: "Your caption" }
```

## Running locally

This is a static site — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server
```

## Deploying

Any static host works (GitHub Pages, Netlify, Vercel, etc.). Push the repo and enable
GitHub Pages on the `main` branch / root folder.
