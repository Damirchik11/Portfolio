import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

/**
 * Projects Component — pinned horizontal rail
 * - The section pins and vertical scroll pushes full-height project
 *   panels sideways (one viewport of scroll per panel).
 * - Falls back to a vertical stack on mobile / reduced motion.
 */
const Projects = () => {
    const sectionRef = useRef(null)
    const prefersReducedMotion = useReducedMotion()
    const [isNarrow, setIsNarrow] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 900px)')
        const update = () => setIsNarrow(mq.matches)
        update()
        mq.addEventListener('change', update)
        return () => mq.removeEventListener('change', update)
    }, [])

    const isStatic = prefersReducedMotion || isNarrow
    const count = projects.length

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    })

    // Push the track left by one viewport per panel
    const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(count - 1) * 100}vw`])

    const eyebrow = (
        <div className="eyebrow">
            <span className="eyebrow-index">02</span>
            <span className="eyebrow-label">Selected Work</span>
            <span className="eyebrow-note">{String(count).padStart(2, '0')} projects</span>
        </div>
    )

    // Static fallback: plain vertical stack
    if (isStatic) {
        return (
            <section id="projects" className="projects-stack section">
                <div className="container">
                    {eyebrow}
                    <div className="projects-stack-list">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            id="projects"
            className="projects"
            ref={sectionRef}
            style={{ height: `${count * 100}vh` }}
        >
            <div className="projects-sticky">
                <div className="container projects-header">{eyebrow}</div>

                <Motion.div className="projects-track" style={{ x }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </Motion.div>

                {/* Rail progress along the bottom */}
                <div className="projects-progress">
                    <Motion.div
                        className="projects-progress-bar"
                        style={{ scaleX: scrollYProgress }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
