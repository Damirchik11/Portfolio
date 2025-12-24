import { FaPython, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiTensorflow, SiPandas, SiScikitlearn, SiJavascript } from 'react-icons/si'
import './About.css'

/**
 * About Component
 * 
 * WHAT IT DOES:
 * - Introduces you to visitors
 * - Displays your skills in a visual grid
 * - Shows what you're passionate about
 * 
 * REACT CONCEPTS USED:
 * - Array.map(): Transforms skill data into React elements
 * - Objects in arrays: Each skill has icon, name, and level
 */
const About = () => {
    // Skills data - easy to update and maintain
    const skills = [
        { icon: <FaPython />, name: 'Python', level: 90 },
        { icon: <SiTensorflow />, name: 'TensorFlow', level: 80 },
        { icon: <SiPandas />, name: 'Pandas', level: 85 },
        { icon: <SiScikitlearn />, name: 'Scikit-learn', level: 80 },
        { icon: <FaReact />, name: 'React', level: 75 },
        { icon: <SiJavascript />, name: 'JavaScript', level: 70 },
        { icon: <FaDatabase />, name: 'SQL', level: 75 },
        { icon: <FaGitAlt />, name: 'Git', level: 85 },
    ]

    return (
        <section id="about" className="about section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="section-line"></div>
                </div>

                <div className="about-content">
                    {/* Bio/Text Content */}
                    <div className="about-text">
                        <p className="about-intro">
                            I'm a passionate <strong>Machine Learning Engineer</strong> and developer
                            with a focus on building intelligent, data-driven solutions.
                        </p>
                        <p>
                            My journey in tech started with a curiosity about how data can be
                            transformed into meaningful insights. I specialize in developing
                            machine learning models, analyzing complex datasets, and creating
                            applications that solve real-world problems.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new ML research papers,
                            contributing to open-source projects, or diving into challenging datasets.
                        </p>

                        {/* Quick Stats */}
                        <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Technologies</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">∞</span>
                                <span className="stat-label">Curiosity</span>
                            </div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="about-skills">
                        <h3>Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <div key={skill.name} className="skill-card">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <span className="skill-name">{skill.name}</span>
                                    {/* Progress bar showing skill level */}
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
