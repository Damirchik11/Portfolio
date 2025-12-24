import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

/**
 * Contact Component
 * 
 * WHAT IT DOES:
 * - Provides a contact form for visitors
 * - Shows direct contact information
 * - Links to social profiles
 * 
 * REACT CONCEPTS USED:
 * - useState: Manages form input values
 * - Controlled Components: Input values tied to state
 * - Event Handlers: onChange, onSubmit
 * - Spread operator: ...prev for updating state objects
 */
const Contact = () => {
    // Form state - object containing all form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    /**
     * Handle input changes
     * 
     * This is a "controlled component" pattern:
     * - Input value comes from state
     * - onChange updates state
     * - State change triggers re-render with new value
     */
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,           // Keep all previous values
            [name]: value      // Update only the changed field
        }))
    }

    /**
     * Handle form submission
     * 
     * Note: This is a placeholder. To actually send emails,
     * you'd need a backend service like:
     * - Formspree
     * - EmailJS
     * - Your own API
     */
    const handleSubmit = async (e) => {
        e.preventDefault()  // Prevent page reload
        setIsSubmitting(true)

        // Simulate sending (replace with actual service)
        setTimeout(() => {
            console.log('Form submitted:', formData)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setIsSubmitting(false)
        }, 1000)
    }

    // Contact information items
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'your.email@example.com',
            href: 'mailto:your.email@example.com'
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/damir-kozhamkulov',
            href: 'https://www.linkedin.com/in/damir-kozhamkulov/'
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            value: 'github.com/yourusername',
            href: 'https://github.com/yourusername'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Your City, State',
            href: null
        }
    ]

    return (
        <section id="contact" className="contact section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">
                        Have a project in mind? Let's work together!
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
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
                            <label htmlFor="email">Email</label>
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
                            <label htmlFor="message">Message</label>
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
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="success-message">Message sent successfully!</p>
                        )}
                    </form>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="contact-intro">
                            Feel free to reach out through any of these channels:
                        </p>

                        <div className="info-list">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="info-item">
                                    <span className="info-icon">{item.icon}</span>
                                    <div className="info-content">
                                        <span className="info-label">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span>{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
