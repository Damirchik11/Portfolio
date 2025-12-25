import { useState } from 'react'
import { FaPython, FaReact, FaDatabase, FaGitAlt, FaChevronDown } from 'react-icons/fa'
import { SiTensorflow, SiPandas, SiScikitlearn, SiJavascript } from 'react-icons/si'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import './About.css'

/**
 * About Component
 * REACT CONCEPTS USED:
 * - useState: Tracks which experience dropdown is expanded
 * - Array.map(): Transforms data arrays into React elements
 * - Conditional className: Toggles 'expanded' class based on state
 */
const About = () => {
    // Track which experience card's dropdown is open (by index, -1 = none)
    const [expandedExp, setExpandedExp] = useState(-1)

    // Skills data
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

    // Experience data with detailed bullet points
    const experience = [
        {
            title: 'Developer Intern',
            company: 'XYPRO Technology Corporation',
            period: 'March 2024 - January 2025',
            description: 'Contributed to infrastructure automation, CI/CD pipelines, and cross-platform development.',
            details: [
                'Gained experience working with platforms such as Docker, in order to containerize and work within different environments such as RHEL9 and Rockyxcc.',
                'Improved the JFrog Pipelines of the company by implementing Slack notifications to provide real-time updates on pipeline outputs, improving communication and monitoring efficiency.',
                'Worked cross-functionally on a team, developing a hardening tool with Python and Bash scripts for other products within the company.',
                'Fixed bugs within the RHEL9 and Rocky environments, ensuring stability and compatibility for development workflows.',
                'Resolved pipeline issues, resulting in a 15% reduction in construction failures and improved deployment reliability.'
            ]
        },
        {
            title: 'Quality Assurance Intern',
            company: 'XYPRO Technology Corporation',
            period: 'January 2024 - March 2024',
            description: 'Supported QA processes and test automation initiatives.',
            details: [
                'Conducted regression, sanity, and smoke testing to ensure software updates and bug fixes did not affect existing functionality.',
                'Developed test cases and scripts based on company product requirements.',
                'Learned to work with QMetry for writing test cases and their requirements.',
                'Documented bugs and tracked issues using JIRA, improving team visibility on defects.',
                'Collaborated with developers to reproduce and resolve reported issues.'
            ]
        }
    ]

    // Education data
    const education = [
        {
            degree: "Master's in Data Science",
            school: 'California State University, Northridge',
            period: '2025 - Present',
            focus: 'Machine Learning & Data Science'
        },
        {
            degree: "Bachelor's in Computer Science",
            school: 'California State University, Northridge',
            period: '2019 - 2024',
            focus: 'Software Engineering'
        }
    ]

    // Toggle dropdown for experience card
    const toggleExpDropdown = (index) => {
        setExpandedExp(expandedExp === index ? -1 : index)
    }

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

                {/* Experience Section */}
                <div className="experience-section">
                    <h3>
                        <FaBriefcase className="section-icon" />
                        Experience
                    </h3>
                    <div className="timeline">
                        {experience.map((job, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>{job.title}</h4>
                                    <p className="timeline-company">{job.company}</p>
                                    <span className="timeline-period">{job.period}</span>
                                    <p className="timeline-description">{job.description}</p>

                                    {/* Details Dropdown */}
                                    {job.details && job.details.length > 0 && (
                                        <div className="details-dropdown">
                                            <button
                                                className={`dropdown-toggle ${expandedExp === index ? 'expanded' : ''}`}
                                                onClick={() => toggleExpDropdown(index)}
                                            >
                                                <span>View Details</span>
                                                <FaChevronDown className="dropdown-icon" />
                                            </button>
                                            <div className={`dropdown-content ${expandedExp === index ? 'expanded' : ''}`}>
                                                <ul className="details-list">
                                                    {job.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="education-section">
                    <h3>
                        <FaGraduationCap className="section-icon" />
                        Education
                    </h3>
                    <div className="timeline">
                        {education.map((edu, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>{edu.degree}</h4>
                                    <p className="timeline-company">{edu.school}</p>
                                    <span className="timeline-period">{edu.period}</span>
                                    {edu.focus && <p className="timeline-focus">Focus: {edu.focus}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
