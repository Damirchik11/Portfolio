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

    // Skills grouped by domain — ordered to foreground the ML-systems side
    const skillGroups = [
        {
            label: 'Languages',
            items: ['Python', 'SQL', 'C++', 'Bash'],
        },
        {
            label: 'ML / Data',
            items: ['PyTorch', 'scikit-learn', 'XGBoost', 'TensorFlow', 'Pandas', 'NumPy'],
        },
        {
            label: 'ML Systems / MLOps',
            items: ['Docker', 'CI/CD', 'AWS', 'Git', 'Linux'],
        },
    ]

    // Experience data with detailed bullet points
    const experience = [
        {
            title: 'Developer Intern',
            company: 'XYPRO Technology Corporation',
            period: 'Mar 2024 — Jan 2025',
            description: 'Infrastructure automation, CI/CD, and containerized cross-platform development — the engineering backbone ML systems ship on.',
            details: [
                'Containerized applications with Docker across RHEL9 and Rocky Linux environments — the same packaging and environment-isolation workflow used to deploy ML services reliably.',
                'Built and improved JFrog CI/CD pipelines, adding Slack notifications for real-time build monitoring — the automation layer that model-training and deployment pipelines depend on.',
                'Developed a cross-platform security-hardening tool in Python and Bash, adopted across multiple company products.',
                'Debugged and stabilized automation workflows across Linux environments, reducing pipeline build failures by ~10% and improving deployment reliability.',
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
                            Models into <span className="serif-accent">production.</span>
                        </h2>
                        <p className="about-intro">
                            I'm a <strong>Machine Learning Engineer</strong> who treats ML
                            as an engineering problem — not just training models, but
                            containerizing, deploying, and keeping them reliable.
                        </p>
                        <p>
                            I come from a software and infrastructure background: I've built
                            and hardened CI/CD pipelines, containerized applications across
                            Linux environments, and shipped tooling other teams depend on. I
                            bring that same discipline to machine learning — reproducible
                            pipelines, tested code, and models that run as real services
                            rather than one-off notebooks.
                        </p>
                        <p>
                            My modeling work spans classical ML and deep learning — from
                            wildfire-risk forecasting on highly imbalanced geospatial data to
                            education analytics. I care about the parts most models skip: data
                            quality, evaluation that reflects reality, and the path from
                            prototype to deployment. I also believe technology should improve
                            people's lives — strong ethics in AI matter as much as strong models.
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
