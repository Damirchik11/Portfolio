import { Link } from 'react-router-dom'

/**
 * ProjectCard Component — one full-height rail panel
 * - Big index number, display title, mono tags, framed "figure" thumbnail
 * - The whole panel links to the project's case study page
 */
const ProjectCard = ({ project, index }) => {
    const num = String(index + 1).padStart(2, '0')

    return (
        <Link to={`/project/${project.id}`} className="project-panel">
            {/* Text column */}
            <div className="panel-text">
                <span className="panel-index mono">{num}</span>
                <h3 className="panel-title">{project.title}</h3>
                <p className="panel-desc">{project.shortDescription}</p>

                <div className="panel-tags mono">
                    {project.tags && project.tags.map(tag => (
                        <span key={tag} className="panel-tag">{tag}</span>
                    ))}
                </div>

                <span className="panel-cta mono">Read case study →</span>
            </div>

            {/* Figure column */}
            <figure className="panel-figure">
                {project.thumbnail && (
                    <div className="panel-figure-frame">
                        <img src={project.thumbnail} alt={project.title} />
                    </div>
                )}
                <figcaption className="mono">
                    fig. {num} — {project.subtitle || project.title}
                </figcaption>
            </figure>
        </Link>
    )
}

export default ProjectCard
