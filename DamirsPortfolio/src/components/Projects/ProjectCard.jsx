import { Link } from 'react-router-dom'

/**
 * ProjectCard Component
 * 
 * WHAT IT DOES:
 * - Displays a preview of a project
 * - Links to the full project detail page
 * 
 * REACT CONCEPTS USED:
 * - Props: Receives `project` object from parent
 * - Destructuring: { project } extracts project from props
 * - Dynamic routing: Link to="/project/${id}"
 * - Conditional rendering: Only shows image if thumbnail exists
 */
const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`} className="project-card">
            {/* Project Thumbnail */}
            <div className="project-image">
                {project.thumbnail && (
                    <img src={project.thumbnail} alt={project.title} />
                )}
            </div>

            {/* Project Info */}
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>

                {/* Technology Tags */}
                <div className="project-tags">
                    {project.tags && project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard