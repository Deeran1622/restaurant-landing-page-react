import { dishes } from '../data/dishes.js'

function DishCard({ dish }) {
  return (
    <article className="dish-card">
      <p className="dish-category">{dish.category}</p>
      <div className="dish-price-row">
        <h3 className="dish-name">{dish.name}</h3>
        <span className="leader" aria-hidden="true"></span>
        <span className="price">{dish.price}</span>
      </div>
      <p className="dish-desc">{dish.desc}</p>
    </article>
  )
}

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">Tonight's Menu</p>
          <h2>From the Hearth</h2>
          <p className="section-lead">
            Rewritten weekly around what the market and the fire have to offer. This is
            last night's board &mdash; expect it to have shifted a little by the time you sit down.
          </p>
        </div>

        <div className="menu-grid">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  )
}