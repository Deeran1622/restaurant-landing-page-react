import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  notes: '',
}

export default function Reservations() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Demo only — wire this up to your reservation system or an
    // email/form service (e.g. Formspree, your own API route) before going live.
    console.log('Reservation request:', form)
    setSubmitted(true)
  }

  return (
    <section className="reservations" id="reservations">
      <div className="container reservations-grid">

        <div className="reservations-info">
          <p className="eyebrow">Reservations</p>
          <h2>Book the Hearth</h2>
          <p className="reservations-lead">
            Tables are held for fifteen minutes past booking time. Parties of eight or more,
            please call the line directly &mdash; we'll set the long table by the fire.
          </p>
          <dl className="info-list">
            <div>
              <dt>Address</dt>
              <dd>14 Kiln Row, Riverside Quarter</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href="tel:+15550162204">(555) 016-2204</a></dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Tue&ndash;Thu 5:30&ndash;10pm &middot; Fri&ndash;Sat 5:30&ndash;11pm &middot; Sun 5&ndash;9pm</dd>
            </div>
          </dl>
        </div>

        {submitted ? (
          <div className="reservation-form">
            <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.75rem' }}>
              Request sent
            </h3>
            <p>
              Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we've noted a table for{' '}
              {form.guests || 'your party'} on {form.date || 'your chosen date'} at{' '}
              {form.time || 'your chosen time'}. We'll confirm by email shortly.
            </p>
            <button
              type="button"
              className="btn btn-ember"
              style={{ marginTop: '1rem' }}
              onClick={() => {
                setForm(initialForm)
                setSubmitted(false)
              }}
            >
              Book another table
            </button>
          </div>
        ) : (
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Full name</label>
              <input
                type="text" id="name" name="name" autoComplete="name" required
                value={form.name} onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                type="email" id="email" name="email" autoComplete="email" required
                value={form.email} onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel" id="phone" name="phone" autoComplete="tel" required
                value={form.phone} onChange={handleChange}
              />
            </div>

            <div className="form-row form-row-split">
              <div>
                <label htmlFor="date">Date</label>
                <input
                  type="date" id="date" name="date" required
                  value={form.date} onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="time">Time</label>
                <input
                  type="time" id="time" name="time" required
                  value={form.time} onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="guests">Guests</label>
              <select
                id="guests" name="guests" required
                value={form.guests} onChange={handleChange}
              >
                <option value="">Select party size</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8+ (please call)</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="notes">Notes or allergies</label>
              <textarea
                id="notes" name="notes" rows="3"
                value={form.notes} onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-ember btn-full">Request a Table</button>
            <p className="form-note">
              This form is a front-end demo &mdash; connect it to your reservation system or an
              email/form service before going live.
            </p>
          </form>
        )}

      </div>
    </section>
  )
}