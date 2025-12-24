import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

/**
 * Hero Component
 * 
 * WHAT IT DOES:
 * - First thing visitors see - makes a strong first impression
 * - Shows your name, title, and a brief tagline
 * - Includes call-to-action buttons and social links
 * 
 * REACT CONCEPTS USED:
 * - JSX: HTML-like syntax for defining UI
 * - className: React's version of HTML class attribute
 * - Fragment (<>): Groups elements without adding extra DOM node
 */
const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background gradient overlay */}
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="hero-content">
                {/* Greeting and Name */}
                <p className="hero-greeting">Hello, I'm</p>
                <h1 className="hero-name">
                    <span className="gradient-text">Damir</span>
                </h1>

                {/* Title/Role */}
                <h2 className="hero-title">
                    Machine Learning Engineer & Data Scientist
                </h2>

                {/* Brief description */}
                <p className="hero-description">
                    I build distributed systems and create data-driven solutions.
                    Passionate about transforming complex data into actionable insights.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Get In Touch
                    </a>
                </div>

                {/* Social Links */}
                <div className="hero-socials">
                    <a
                        href="https://github.com/Damirchik11"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/damir-kozhamkulov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="mailto:damir.kozhamkulov2@gmail.com"
                        aria-label="Email"
                    >
                        <FaEnvelope size={32} />
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default Hero
