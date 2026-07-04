import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

/**
 * Contact Component
 * - Oversized closing headline + giant email link
 * - Underline-style form submitted via EmailJS (logic unchanged)
 */

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_jgde4nk'
const EMAILJS_TEMPLATE_ID = 'template_kpsvqrc'
const EMAILJS_PUBLIC_KEY = 'aByMoLE_j7nVelW9f'

const Contact = () => {
    // Form state - object containing all form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (submitStatus) setSubmitStatus(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Damir',
                },
                EMAILJS_PUBLIC_KEY
            )

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('EmailJS Error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="eyebrow">
                    <span className="eyebrow-index">03</span>
                    <span className="eyebrow-label">Contact</span>
                    <span className="eyebrow-note">Open to work</span>
                </div>

                {/* Oversized closing line */}
                <h2 className="contact-headline">
                    Let's build <span className="serif-accent">something.</span>
                </h2>

                <a
                    href="mailto:damir.kozhamkulov2@gmail.com"
                    className="contact-email"
                >
                    damir.kozhamkulov2@gmail.com
                </a>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="mono">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="mono">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="mono">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary contact-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending…' : 'Send message →'}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="form-status form-status-success mono">
                                Message sent — I'll get back to you soon.
                            </p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="form-status form-status-error mono">
                                Failed to send. Please email me directly.
                            </p>
                        )}
                    </form>

                    {/* Direct channels */}
                    <div className="contact-channels">
                        <div className="channel-row">
                            <span className="channel-label mono">LinkedIn</span>
                            <a
                                href="https://www.linkedin.com/in/damir-kozhamkulov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="channel-value"
                            >
                                damir-kozhamkulov ↗
                            </a>
                        </div>
                        <div className="channel-row">
                            <span className="channel-label mono">GitHub</span>
                            <a
                                href="https://github.com/damir-kozhamkulov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="channel-value"
                            >
                                damir-kozhamkulov ↗
                            </a>
                        </div>
                        <div className="channel-row">
                            <span className="channel-label mono">Location</span>
                            <span className="channel-value">Los Angeles, CA</span>
                        </div>
                        <div className="channel-row">
                            <span className="channel-label mono">Resume</span>
                            <a
                                href="/images/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="channel-value"
                            >
                                PDF ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
