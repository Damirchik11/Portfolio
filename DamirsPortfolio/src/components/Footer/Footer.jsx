import { Link } from 'react-router-dom'
import './Footer.css'

/**
 * Footer Component
 * - Single hairline-ruled band: name, mono links, copyright
 */
const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer-band">
                <Link to="/" className="footer-name">
                    Damir Kozhamkulov
                </Link>

                <ul className="footer-links">
                    <li>
                        <a
                            href="https://github.com/damir-kozhamkulov"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/damir-kozhamkulov/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn ↗
                        </a>
                    </li>
                    <li>
                        <a href="mailto:damir.kozhamkulov2@gmail.com">Email ↗</a>
                    </li>
                </ul>

                <p className="footer-copy">© {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer
