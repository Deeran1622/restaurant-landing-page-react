export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-inner">
        <p className="eyebrow">Wood Fire &middot; Seasonal Table</p>
        <h1 className="hero-title">Ember &amp; Olive</h1>
        <p className="hero-lead">
          A single oak-fired hearth, a menu that turns with the season, and a room built for
          long dinners. No shortcuts between the fire and the plate.
        </p>
        <div className="hero-actions">
          <a className="btn btn-ember" href="#reservations">Reserve a Table</a>
          <a className="btn-text" href="#menu">View tonight's menu &darr;</a>
        </div>
        <p className="hero-hours">Open Tuesday&ndash;Sunday, 5:30&ndash;11pm &middot; Closed Monday</p>
      </div>
    </section>
  )
}