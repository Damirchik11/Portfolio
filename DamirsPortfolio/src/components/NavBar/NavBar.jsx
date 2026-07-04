import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './NavBar.css'

/**
 * NavBar Component
 * - Mono, numbered nav items on a hairline rule
 * - Thin scroll-progress line along the top edge
 */
const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    // Check if we're on the home page (for section links vs page links)
    const isHomePage = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            const scrollable = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { index: '01', label: 'About', href: '#about' },
        { index: '02', label: 'Work', href: '#projects' },
        { index: '03', label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            {/* Scroll progress line */}
            <div
                className="nav-progress"
                style={{ transform: `scaleX(${scrollProgress})` }}
            />

            <div className="navbar-container">
                {/* Logo - always links to home */}
                <Link to="/" className="logo">
                    <span className="logo-mark">DK</span>
                    <span className="logo-text">Damir Kozhamkulov</span>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    {/* Close button inside mobile menu */}
                    <button
                        className="mobile-close"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close navigation menu"
                    >
                        <HiX size={32} />
                    </button>

                    {navItems.map((item) => (
                        <li key={item.label}>
                            {isHomePage ? (
                                <a
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="nav-index">{item.index}</span>
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    to={`/${item.href}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="nav-index">{item.index}</span>
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle Button */}
                <button
                    className={`mobile-toggle ${isMobileMenuOpen ? 'hidden' : ''}`}
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open navigation menu"
                >
                    <HiMenuAlt3 size={24} />
                </button>
            </div>
        </nav>
    )
}

export default NavBar
