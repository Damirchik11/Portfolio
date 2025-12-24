import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

/**
 * Projects Component
 * 
 * WHAT IT DOES:
 * - Displays a grid of project cards
 * - Each card links to a detailed project page
 * 
 * REACT CONCEPTS USED:
 * - Importing data from external file
 * - Array.map(): Iterates over projects array to create cards
 * - Passing props: Each ProjectCard receives a project object
 */
const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">
                        Click on any project to see detailed results and findings
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
