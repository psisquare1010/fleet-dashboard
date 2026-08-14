# Fleet Dashboard (POC)

A tiny proof-of-concept dashboard: React + Vite, no backend, no database.
Truck data is a plain array in `src/data/trucks.js`.

## Run locally

```
npm install
npm run dev
```

## Project shape

```
src/
  data/trucks.js        sample data — the only "database" this app has
  components/
    NavBar.jsx           top nav (Fleet / About)
    TruckCard.jsx         one truck in the fleet grid
    StatTile.jsx           a single labeled number
    StatusBadge.jsx        active / maintenance / idle pill (icon + label)
    InfoRow.jsx            one label/value line on the detail page
  pages/
    FleetOverview.jsx    "/"           grid of all trucks + fleet-wide stats
    TruckDetail.jsx      "/truck/:id"  one truck's stats + info rows
    About.jsx            "/about"      what this project is
  index.css              color tokens (light + dark) and base styles
  App.css                 layout and component styles
```

## Common tweaks

- **Add an info line to the truck detail page:** add a field to the truck
  objects in `src/data/trucks.js`, then add one `<InfoRow label="..." value={truck.yourField} />`
  in `src/pages/TruckDetail.jsx`.
- **Add a truck:** append an object to the array in `src/data/trucks.js`.
- **Change a color:** edit the CSS custom properties at the top of `src/index.css`
  (e.g. `--accent`, `--status-good`).
- **Add a screen:** create a component in `src/pages/`, then add a `<Route>` for
  it in `src/App.jsx` and a link in `src/components/NavBar.jsx`.

## Deploying

Push to GitHub, then connect the repo in Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`

Cloudflare Pages will then redeploy automatically on every push to `main`.
`public/_redirects` is already set up so client-side routes (like `/truck/T-1042`)
work on direct load/refresh, not just in-app navigation.
