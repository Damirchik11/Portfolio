import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './NavBar.css'

/**
 * NavBar Component
 * 
 * WHAT IT DOES:
 * - Displays navigation links that scroll to sections on the home page
 * - Changes appearance when user scrolls (adds background blur)
 * - Shows a hamburger menu on mobile devices
 * 
 * REACT CONCEPTS USED:
 * - useState: Stores whether menu is open and if page has scrolled
 * - useEffect: Adds scroll event listener when component mounts
 * - useLocation: React Router hook to check current page
 */
const NavBar = () => {
    // State for tracking scroll position and mobile menu
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    // Check if we're on the home page (for section links vs page links)
    const isHomePage = location.pathname === '/'

    // Add scroll listener on component mount
    useEffect(() => {
        const handleScroll = () => {
            // If scrolled more than 50px, add background to navbar
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        // Cleanup: Remove listener when component unmounts
        // This prevents memory leaks
        return () => window.removeEventListener('scroll', handleScroll)
    }, []) // Empty array = only run once on mount

    // Navigation items - using # for same-page sections
    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo - always links to home */}
                <Link to="/" className="logo">
                    <span className="logo-text">Damir</span>
                    <span className="logo-dot">.</span>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            {isHomePage ? (
                                // On home page: use anchor links for smooth scroll
                                <a
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                // On other pages: link back to home with hash
                                <Link
                                    to={`/${item.href}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
            </div>
        </nav>
    )
}

export default NavBar
