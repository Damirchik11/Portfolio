import { useParams, Link } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { projects } from '../data/projects'
import './ProjectPage.css'

/**
 * ProjectPage Component
 * 
 * WHAT IT DOES:
 * - Displays detailed information about a single project
 * - Uses URL parameter to determine which project to show
 * - Renders all project sections: overview, problem, approach, results, conclusion
 * 
 * REACT CONCEPTS:
 * - useParams(): Extracts the :projectId from the URL
 * - Conditional rendering: Shows image only if resultsImage exists
 * - Array.find(): Locates the matching project from data
 */
const ProjectPage = () => {
    // Get projectId from URL (e.g., /project/lausd-edulytix -> "lausd-edulytix")
    const { projectId } = useParams()

    // Find the matching project in our data
    const project = projects.find(p => p.id === projectId)

    // Handle case where project doesn't exist
    if (!project) {
        return (
            <>
                <NavBar />
                <main className="project-page">
                    <div className="not-found">
                        <h1>Project Not Found</h1>
                        <p>The project you're looking for doesn't exist.</p>
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                </main>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <main className="project-page">
                <Link to="/" className="back-link">← Back to Home</Link>

                {/* Project Header */}
                <header className="project-header">
                    <h1>{project.title}</h1>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <div className="project-tags">
                        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                </header>

                {/* Overview Section */}
                <section className="project-section">
                    <h2>Overview</h2>
                    <div className="section-content">
                        <p>{project.overview}</p>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="project-section">
                    <h2>Problem Statement</h2>
                    <div className="section-content">
                        <p>{project.problem}</p>
                    </div>
                </section>

                {/* Approach & Methodology */}
                <section className="project-section">
                    <h2>Approach & Methodology</h2>
                    <div className="section-content">
                        <p>{project.approach}</p>
                    </div>
                </section>

                {/* Results & Findings */}
                <section className="project-section">
                    <h2>Results & Findings</h2>
                    <div className="section-content">
                        <p>{project.results}</p>

                        {/* Display results images if available (supports array or single image) */}
                        {project.resultsImages && project.resultsImages.map((image, index) => (
                            <figure key={index} className="result-image">
                                <img
                                    src={image.src}
                                    alt={image.caption || `Results visualization ${index + 1}`}
                                />
                                {image.caption && (
                                    <figcaption>{image.caption}</figcaption>
                                )}
                            </figure>
                        ))}

                        {/* Legacy support for single image format */}
                        {!project.resultsImages && project.resultsImage && (
                            <figure className="result-image">
                                <img
                                    src={project.resultsImage}
                                    alt={project.resultsImageCaption || 'Results visualization'}
                                />
                                {project.resultsImageCaption && (
                                    <figcaption>{project.resultsImageCaption}</figcaption>
                                )}
                            </figure>
                        )}
                    </div>
                </section>

                {/* Conclusion (if available) */}
                {project.conclusion && (
                    <section className="project-section conclusion">
                        <h2>Conclusion</h2>
                        <div className="section-content">
                            <p>{project.conclusion}</p>
                        </div>
                    </section>
                )}

                {/* Technologies Used */}
                <section className="project-section">
                    <h2>Technologies Used</h2>
                    <div className="tech-grid">
                        {project.technologies.map(tech => (
                            <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                    </div>
                </section>

                {/* Project Links */}
                <section className="project-links">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        View on GitHub
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Live Demo
                        </a>
                    )}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ProjectPage