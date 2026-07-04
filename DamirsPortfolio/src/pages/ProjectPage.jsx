import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { projects } from '../data/projects'
import './ProjectPage.css'

/**
 * ProjectPage Component — editorial case study
 * - Mono breadcrumb, oversized title, hairline meta table
 * - Narrative sections in a readable article column with fig-captioned images
 * - Prev/next project links continue the rail flow
 */
const ProjectPage = () => {
    const { projectId } = useParams()

    // Scroll to top when navigating to this page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [projectId])

    const projectIndex = projects.findIndex(p => p.id === projectId)
    const project = projects[projectIndex]

    // Handle case where project doesn't exist
    if (!project) {
        return (
            <>
                <NavBar />
                <main className="project-page container">
                    <div className="not-found">
                        <p className="mono not-found-code">404 — not found</p>
                        <h1>Project Not Found</h1>
                        <p>The project you're looking for doesn't exist.</p>
                        <Link to="/" className="btn btn-primary">Back to index</Link>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

    const num = String(projectIndex + 1).padStart(2, '0')
    const prev = projects[projectIndex - 1]
    const next = projects[projectIndex + 1]

    // Normalize images (supports resultsImages array or legacy single image)
    const resultsImages = project.resultsImages
        || (project.resultsImage
            ? [{ src: project.resultsImage, caption: project.resultsImageCaption }]
            : [])

    const narrative = [
        { label: 'Overview', body: project.overview },
        { label: 'Problem Statement', body: project.problem },
        { label: 'Approach & Methodology', body: project.approach },
        { label: 'Results & Findings', body: project.results, images: resultsImages },
        { label: 'Conclusion', body: project.conclusion },
    ].filter(section => section.body)

    return (
        <>
            <NavBar />
            <main className="project-page container">
                {/* Breadcrumb */}
                <Link to="/#projects" className="breadcrumb mono">
                    ← Index / {num}
                </Link>

                {/* Case study header */}
                <header className="case-header">
                    <span className="case-index mono">{num}</span>
                    <h1 className="case-title">{project.title}</h1>
                    {project.subtitle && (
                        <p className="case-subtitle">{project.subtitle}</p>
                    )}
                </header>

                {/* Meta table */}
                <div className="case-meta">
                    <div className="case-meta-cell">
                        <span className="case-meta-label mono">Tags</span>
                        <span className="case-meta-value">
                            {project.tags.join(' · ')}
                        </span>
                    </div>
                    <div className="case-meta-cell">
                        <span className="case-meta-label mono">Stack</span>
                        <span className="case-meta-value">
                            {project.technologies.join(' · ')}
                        </span>
                    </div>
                    <div className="case-meta-cell">
                        <span className="case-meta-label mono">Links</span>
                        <span className="case-meta-value">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-meta-link"
                            >
                                GitHub ↗
                            </a>
                            {project.demo && (
                                <>
                                    {' / '}
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="case-meta-link"
                                    >
                                        Live demo ↗
                                    </a>
                                </>
                            )}
                        </span>
                    </div>
                </div>

                {/* Narrative sections */}
                <article className="case-article">
                    {narrative.map((section, sIndex) => (
                        <section key={section.label} className="case-section">
                            <h2 className="case-section-heading">
                                <span className="mono case-section-index">
                                    {num}.{sIndex + 1}
                                </span>
                                {section.label}
                            </h2>
                            <p>{section.body}</p>

                            {section.images && section.images.map((image, i) => (
                                <figure key={i} className="case-figure">
                                    <div className="case-figure-frame">
                                        <img
                                            src={image.src}
                                            alt={image.caption || `Results visualization ${i + 1}`}
                                        />
                                    </div>
                                    <figcaption className="mono">
                                        fig. {num}.{i + 1}
                                        {image.caption ? ` — ${image.caption}` : ''}
                                    </figcaption>
                                </figure>
                            ))}
                        </section>
                    ))}
                </article>

                {/* Prev / next rail navigation */}
                <nav className="case-nav">
                    {prev ? (
                        <Link to={`/project/${prev.id}`} className="case-nav-link">
                            <span className="mono">← Previous</span>
                            <span className="case-nav-title">{prev.title}</span>
                        </Link>
                    ) : <span />}
                    {next ? (
                        <Link to={`/project/${next.id}`} className="case-nav-link case-nav-next">
                            <span className="mono">Next →</span>
                            <span className="case-nav-title">{next.title}</span>
                        </Link>
                    ) : <span />}
                </nav>
            </main>
            <Footer />
        </>
    )
}

export default ProjectPage
