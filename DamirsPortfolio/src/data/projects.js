/**
 * Projects Data File
 * 
 * WHAT THIS IS:
 * - Central location for all project information
 * - Imported by both Projects grid and ProjectPage detail view
 * - Makes it easy to add/edit projects in one place
 * 
 * JAVASCRIPT CONCEPTS:
 * - export const: Makes this array available to import elsewhere
 * - Array of objects: Each project is an object with properties
 * 
 * TO ADD A NEW PROJECT:
 * 1. Copy one of the project objects below
 * 2. Give it a unique 'id' (used in the URL)
 * 3. Fill in all the fields
 * 4. Add images to /public/images/ folder
 */
export const projects = [
    {
        // Unique identifier - used in URL: /project/lausd-edulytix
        id: 'lausd-edulytix',

        // Display information
        title: 'LAUSD Edulytix',
        subtitle: 'Machine Learning for Education Analytics',
        shortDescription: 'Analyzed LAUSD and Census education data to identify factors driving student success. Discovered that ZIP code—a proxy for socioeconomic factors—was a top predictor, revealing systemic inequities.',

        // Image path (place image in /public/images/)
        thumbnail: '/images/lausd-project.png',

        // Detailed content for project page
        overview: `This project analyzes Los Angeles Unified School District (LAUSD) education data 
combined with U.S. Census demographic information to gain insights into the factors that 
contribute to student success or failure. Our goal was to identify which features were 
most detrimental to student outcomes and provide actionable insights for educators 
and policymakers.

We examined Income, Distance to School, Students with Disabilities, School Resources, 
After-School Programs, Per-Department Funding, and ZIP Code (used as a proxy for 
analyzing socioeconomic data across LA County districts).`,

        problem: `Schools face several critical challenges:

• Schools are short on staff and resources
• Student outcome data can be hard to fully understand
• The complex factors impacting student outcomes require deeper research
• Principals and administration lack the tools to make well-informed, timely decisions

Understanding which factors most strongly influence student outcomes can help allocate 
resources more effectively and identify at-risk students early.`,

        approach: `Data Challenges:

The necessary data was surprisingly hard to find and manipulate. We encountered issues 
with Census data by ZIP code and significant data ambiguity that required time to resolve.

To overcome these challenges, we tried:
• Web scraping to gather publicly available data
• Contacting LAUSD through a Freedom of Information Act (FOIA) request
• Merging multiple datasets to resolve ambiguities

Models Tested:

We evaluated multiple machine learning approaches:
• Linear SVM & Non-Linear SVM
• Linear Regression
• k-Nearest Neighbors (kNN)
• Naive Bayes
• Gradient Boosting
• Random Forest (standard)
• Weighted Random Forest with fine-tuned weights
• Random Forest with Softmax Weighted Average Voting

Random Forest performed best with our data.`,

        results: `Model Performance:

Our best model (Random Forest) achieved:
• 80% Precision
• 89% Recall  
• 84% F1-Score

Key Findings:

1. Budget & Expenditures — How much money the school spent that year was a top predictor
2. Participation Rate — Students who show up generally do well
3. ZIP Code — Unexpectedly emerged as one of the model's strongest predictors

Participation Rate Analysis:

Higher participation rates are associated with higher mean scale scores. However, 
participation rate alone is not a strong predictor—scores vary significantly around 
100% participation, indicating that other factors play crucial roles in student success.`,

        // Images for the results section (array for multiple visualizations)
        resultsImages: [
            {
                src: '/images/participation_rate.png',
                caption: 'Participation Rate vs Mean Scale Score — Note the high variance at 100% participation'
            },
            {
                src: '/images/best_predictors.png',
                caption: 'Top Predictors — Budget, Participation Rate, and ZIP Code emerged as the strongest factors'
            }
        ],

        conclusion: `Important Insight:

We did not expect ZIP code to be one of the model's best predicting factors. This 
reveals an underlying socioeconomic issue in the education system.

ZIP codes function only as proxies for underlying factors such as income, race, and 
historical patterns of segregation. This can introduce structural bias into the 
analysis and risks oversimplifying complex social dynamics.

Additionally, suppressed and missing data may disproportionately affect certain 
schools or student groups, potentially skewing results and limiting the accuracy 
and fairness of conclusions.

This finding highlights the need for systemic approaches to addressing educational 
inequality rather than school-level interventions alone.`,

        // Technologies used
        tags: ['Machine Learning', 'Python', 'Data Analysis'],
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Matplotlib', 'Seaborn', 'Jupyter', 'Web Scraping'],

        // Links
        github: 'https://github.com/Damirchik11/Comp641',
        demo: null
    },
    {
        id: 'ml-project-2',
        title: 'ML Project 2',
        subtitle: 'Your Second Machine Learning Project',
        shortDescription: 'A brief description of your second ML project that appears on the project card.',
        thumbnail: '/images/ml-project-2.png',

        overview: 'Detailed overview of what this project does and why it matters...',

        problem: 'The specific problem or challenge this project addresses...',

        approach: `Your methodology:
    
1. Step one of your approach
2. Step two of your approach
3. Step three of your approach`,

        results: `Key results and findings:
    
• First key insight
• Second key insight
• Metrics and performance numbers`,

        tags: ['Machine Learning', 'Python', 'Deep Learning'],
        technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
        github: 'https://github.com/yourusername/project-2',
        demo: null
    },
    {
        id: 'project-3',
        title: 'Project 3',
        subtitle: 'Your Third Project',
        shortDescription: 'A brief description of your third project.',
        thumbnail: '/images/project-3.png',

        overview: 'Detailed overview of this project...',

        problem: 'The problem this project solves...',

        approach: `Your approach and methodology...`,

        results: `Key results and outcomes...`,

        tags: ['React', 'JavaScript', 'Web Development'],
        technologies: ['React', 'JavaScript', 'CSS', 'Node.js'],
        github: 'https://github.com/yourusername/project-3',
        demo: 'https://your-demo-link.com'
    }
]