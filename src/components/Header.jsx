export default function Header() {
  return (
    <header className="site-header" id="top">
      <div className="header-inner container">
        <a className="wordmark" href="#top">Ember <span aria-hidden="true">&amp;</span> Olive</a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
        </nav>
        <a className="btn btn-small btn-ember" href="#reservations">Reserve</a>
      </div>
    </header>
  )
}