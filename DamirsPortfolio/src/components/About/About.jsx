import { useState } from 'react'
import './About.css'

/**
 * About Component
 * - Sticky bio on the left; skills ledger, experience and education flow on the right
 * - Skills are grouped mono lists (no percentage bars)
 * - Experience/education render as hairline-ruled ledger rows with inline expand
 */
const About = () => {
    // Track which experience row's details are open (by index, -1 = none)
    const [expandedExp, setExpandedExp] = useState(-1)

    // Skills grouped by domain — plain lists, no made-up percentages
    const skillGroups = [
        {
            label: 'Languages',
            items: ['Python', 'C++', 'SQL', 'Rust', 'JavaScript', 'Bash'],
        },
        {
            label: 'ML / Data',
            items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas'],
        },
        {
            label: 'Tools & Platforms',
            items: ['Git', 'Docker', 'AWS', 'Unity', 'React'],
        },
    ]

    // Experience data with detailed bullet points
    const experience = [
        {
            title: 'Developer Intern',
            company: 'XYPRO Technology Corporation',
            period: 'Mar 2024 — Jan 2025',
            description: 'Contributed to infrastructure automation, CI/CD pipelines, and cross-platform development.',
            details: [
                'Gained experience working with platforms such as Docker, in order to containerize and work within different environments such as RHEL9 and Rocky.',
                'Improved the JFrog Pipelines of the company by implementing Slack notifications to provide real-time updates on pipeline outputs, improving communication and monitoring efficiency.',
                'Worked cross-functionally on a team, developing a hardening tool with Python and Bash scripts for other products within the company.',
                'Fixed bugs within the RHEL9 and Rocky environments, ensuring stability and compatibility for development workflows.',
                'Resolved pipeline issues, resulting in a 15% reduction in construction failures and improved deployment reliability.'
            ]
        },
        {
            title: 'Quality Assurance Intern',
            company: 'XYPRO Technology Corporation',
            period: 'Jan 2024 — Mar 2024',
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
            period: '2025 — Present',
            focus: 'Machine Learning & Data Science'
        },
        {
            degree: "Bachelor's in Computer Science",
            school: 'California State University, Northridge',
            period: '2019 — 2024',
            focus: 'Software Engineering'
        }
    ]

    const toggleExpDropdown = (index) => {
        setExpandedExp(expandedExp === index ? -1 : index)
    }

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="eyebrow">
                    <span className="eyebrow-index">01</span>
                    <span className="eyebrow-label">About</span>
                </div>

                <div className="about-layout">
                    {/* Sticky bio column */}
                    <div className="about-bio">
                        <h2 className="about-heading">
                            Data into <span className="serif-accent">decisions.</span>
                        </h2>
                        <p className="about-intro">
                            I'm a <strong>Machine Learning Engineer</strong> and developer
                            with a focus on creating intelligent, data-driven solutions.
                        </p>
                        <p>
                            My journey started with a curiosity about how data can be
                            transformed into meaningful insights. I specialize in developing
                            machine learning models, analyzing complex datasets, and creating
                            applications that solve real-world problems. I believe new
                            technologies should be used to improve people's lives — strong
                            ethics in AI matter as much as strong models.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new ML research papers,
                            contributing to open-source projects, or diving into challenging
                            datasets.
                        </p>
                    </div>

                    {/* Flowing detail column */}
                    <div className="about-detail">
                        {/* Skills ledger */}
                        <h3 className="ledger-heading mono">Technical Skills</h3>
                        <div className="skills-ledger">
                            {skillGroups.map((group) => (
                                <div key={group.label} className="skills-row">
                                    <span className="skills-label mono">{group.label}</span>
                                    <span className="skills-items">
                                        {group.items.join(' · ')}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Experience ledger */}
                        <h3 className="ledger-heading mono">Experience</h3>
                        <div className="ledger">
                            {experience.map((job, index) => (
                                <div key={index} className="ledger-row">
                                    <span className="ledger-date mono">{job.period}</span>
                                    <div className="ledger-body">
                                        <h4>{job.title}</h4>
                                        <p className="ledger-org mono">{job.company}</p>
                                        <p className="ledger-desc">{job.description}</p>

                                        {job.details && job.details.length > 0 && (
                                            <>
                                                <button
                                                    className="ledger-toggle mono"
                                                    onClick={() => toggleExpDropdown(index)}
                                                    aria-expanded={expandedExp === index}
                                                >
                                                    {expandedExp === index ? '− Hide details' : '+ View details'}
                                                </button>
                                                <div
                                                    className={`ledger-details ${expandedExp === index ? 'expanded' : ''}`}
                                                >
                                                    <ul>
                                                        {job.details.map((detail, i) => (
                                                            <li key={i}>{detail}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education ledger */}
                        <h3 className="ledger-heading mono">Education</h3>
                        <div className="ledger">
                            {education.map((edu, index) => (
                                <div key={index} className="ledger-row">
                                    <span className="ledger-date mono">{edu.period}</span>
                                    <div className="ledger-body">
                                        <h4>{edu.degree}</h4>
                                        <p className="ledger-org mono">{edu.school}</p>
                                        {edu.focus && (
                                            <p className="ledger-desc">Focus: {edu.focus}</p>
                                        )}
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
