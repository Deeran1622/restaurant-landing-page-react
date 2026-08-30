export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Ember &amp; Olive &middot; Riverside Quarter</p>
        <p>&copy; {new Date().getFullYear()} Ember &amp; Olive. All rights reserved.</p>
      </div>
    </footer>
  )
}