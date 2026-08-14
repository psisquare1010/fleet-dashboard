export default function About() {
  return (
    <div className="page">
      <h1 className="page__title">About this prototype</h1>
      <p className="page__body">
        This is a small proof-of-concept dashboard: React (Vite) for the UI,
        static sample data in <code>src/data/trucks.js</code> (no database, no
        backend), hosted on Cloudflare Pages and deployed automatically from
        GitHub on every push.
      </p>
      <p className="page__body">
        It's meant to be easy to iterate on &mdash; add a field to the truck
        data, add an <code>&lt;InfoRow /&gt;</code> to the detail page, or
        tweak a color token in <code>src/index.css</code>.
      </p>
    </div>
  )
}
