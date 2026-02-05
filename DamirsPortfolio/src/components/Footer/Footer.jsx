import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

/**
 * Footer Component
 */
const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Logo and tagline */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            Damir Kozhamkulov<span>.</span>
                        </Link>
                        <p>Using data science to change the world for the better.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="https://github.com/damir-kozhamkulov" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/damir-kozhamkulov/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:damir.kozhamkulov2@gmail.com">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>
                        © {currentYear} Damir Kozhamkulov. Made with React.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
