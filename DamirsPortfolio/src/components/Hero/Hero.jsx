import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'motion/react'
import './Hero.css'

/**
 * Hero Component — pinned scroll choreography
 * - The section is a 200vh scroll region with a sticky 100vh viewport.
 * - Scrolling pushes the giant name off to the left while the statement
 *   slides in from the right (mistral.ai-style "content pushed aside").
 * - Falls back to a static stacked layout on mobile / reduced motion.
 */
const Hero = () => {
    const sectionRef = useRef(null)
    const prefersReducedMotion = useReducedMotion()
    const [isNarrow, setIsNarrow] = useState(false)

    // Choreography is desktop-only; small screens get the static stack
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)')
        const update = () => setIsNarrow(mq.matches)
        update()
        mq.addEventListener('change', update)
        return () => mq.removeEventListener('change', update)
    }, [])

    const isStatic = prefersReducedMotion || isNarrow

    // Scroll progress (0 → 1) across the 200vh section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    // Act 1: name slides left and out; Act 2: statement slides in from the right
    const nameX = useTransform(scrollYProgress, [0.05, 0.55], ['0%', '-120%'])
    const statementX = useTransform(scrollYProgress, [0.35, 0.8], ['120%', '0%'])

    // Hint fades via CSS class — scroll-linked opacity is unreliable through
    // the WAAPI path Motion uses for non-transform properties
    const [hintHidden, setHintHidden] = useState(false)
    useMotionValueEvent(scrollYProgress, 'change', (v) => setHintHidden(v > 0.1))

    const nameBlock = (
        <>
            <p className="hero-kicker mono">
                <span className="hero-kicker-index">00</span> Portfolio — 2026
            </p>
            <h1 className="hero-name">
                Damir<br />Kozhamkulov
            </h1>
            <p className="hero-role mono">
                Machine Learning Engineer & Data Scientist
            </p>
        </>
    )

    const statementBlock = (
        <>
            <h2 className="hero-statement-title">
                Machine learning,{' '}
                <span className="serif-accent">in practice.</span>
            </h2>
            <p className="hero-statement-text">
                I build models and data systems that turn messy, real-world
                data into decisions — from wildfire risk prediction to
                education analytics.
            </p>
            <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                    View work ↓
                </a>
                <a
                    href="/images/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-resume mono"
                >
                    Resume ↗
                </a>
            </div>
        </>
    )

    // Static fallback: everything stacked, no pin, no transforms
    if (isStatic) {
        return (
            <section id="home" className="hero hero-static">
                <div className="hero-static-inner container">
                    <div className="hero-name-block">{nameBlock}</div>
                    <div className="hero-statement hero-statement-static">
                        {statementBlock}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="home" className="hero" ref={sectionRef}>
            <div className="hero-sticky">
                <div className="hero-meta mono">
                    ML Engineer — Los Angeles — Open to work
                </div>

                {/* y:'-50%' re-applies the vertical centering that Motion's
                    transform would otherwise override from the stylesheet */}
                <Motion.div className="hero-name-block" style={{ x: nameX, y: '-50%' }}>
                    {nameBlock}
                </Motion.div>

                <Motion.div className="hero-statement" style={{ x: statementX, y: '-50%' }}>
                    {statementBlock}
                </Motion.div>

                <div className={`hero-scroll-hint mono ${hintHidden ? 'is-hidden' : ''}`}>
                    Scroll ↓
                </div>
            </div>
        </section>
    )
}

export default Hero
