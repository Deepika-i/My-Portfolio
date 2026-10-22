
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { EMAIL } from '../data.jsx'
import Reveal from './Reveal.jsx'

function Contact() {
  const [ok, setOk] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!ok) return

    const timer = setTimeout(() => {
      setOk('')
    }, 30000)

    return () => clearTimeout(timer)
  }, [ok])

  const submit = async (e) => {
    e.preventDefault()

    setOk('')
    setLoading(true)

    try {
      await emailjs.sendForm(
        'service_at6bv2v',
        'template_o4nuhyi',
        e.target,
        'hPamDtVZHjdnlE7aQ'
      )

      setOk('Message sent successfully! Thank you ♥')
      e.target.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setOk('Message could not be sent. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Reveal id="contact">
      <h2>BOOK A PROJECT</h2>

      <div className="contact">
        <ul>
          <li>✉ {EMAIL}</li>
          <li>☎ +91 88254 11799</li>
          <li>⌖ Chennai, India</li>
        </ul>

        <form onSubmit={submit}>
          <input
            name="from_name"
            placeholder="Name"
            aria-label="Name"
            required
          />

          <input
            name="from_email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            required
          />

          <textarea
            name="message"
            rows={3}
            placeholder="Message"
            aria-label="Message"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send message'}
          </button>

          <p className="ok" role="status">
            {ok}
          </p>
        </form>

        <div className="script">
          Dream<br />
          Code<br />
          Create ♥
        </div>
      </div>
    </Reveal>
  )
}

export default Contact
