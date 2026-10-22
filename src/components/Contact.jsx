
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { EMAIL } from '../data.jsx'
import Reveal from './Reveal.jsx'

function Contact() {
  const [ok, setOk] = useState('')
  const [loading, setLoading] = useState(false)
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')

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
    setNameError('')
    setEmailError('')

    const form = e.target
    const name = form.from_name.value.trim()
    const email = form.from_email.value.trim()

    // Name validation
    const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/

    if (!namePattern.test(name)) {
      setNameError(
        'Enter a valid name using letters only.'
      )
      return
    }

    // Gmail validation
    const gmailPattern =
      /^[a-zA-Z0-9](?:[a-zA-Z0-9.]*)[a-zA-Z0-9]@gmail\.com$|^[a-zA-Z0-9]@gmail\.com$/

    if (!gmailPattern.test(email) || email.includes('..')) {
      setEmailError(
        'Please enter a valid Gmail address.'
      )
      return
    }

    setLoading(true)

    try {
      await emailjs.sendForm(
        'service_at6bv2v',
        'template_o4nuhyi',
        form,
        'hPamDtVZHjdnlE7aQ'
      )

      setOk('Message sent successfully! Thank you ♥')
      form.reset()
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

        <form onSubmit={submit} noValidate>
          <input
            name="from_name"
            placeholder="Name"
            aria-label="Name"
            autoComplete="name"
            onChange={() => setNameError('')}
            required
          />

          {nameError && (
            <p className="validation-error" role="alert">
              {nameError}
            </p>
          )}

          <input
            name="from_email"
            type="email"
            placeholder="Gmail address"
            aria-label="Gmail address"
            autoComplete="email"
            onChange={() => setEmailError('')}
            required
          />

          {emailError && (
            <p className="validation-error" role="alert">
              {emailError}
            </p>
          )}

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
