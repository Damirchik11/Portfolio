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
        thumbnail: '/images/LAUSD.png',

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
        id: 'california-wildfire-prediction',
        title: 'California Wildfire Prediction',
        subtitle: 'ML Pipeline for Daily Fire Probability Forecasting',
        shortDescription: 'Built an XGBoost-based ML pipeline to predict daily fire probability at 4km×4km resolution across California, enabling 24-hour operational forecasting for ~40,000 active land cells.',
        thumbnail: '/images/California_Department_of_Forestry_and_Fire_Protection-Logo.wine.svg',

        overview: `This project aimed to build a Machine Learning pipeline to predict Daily Fire Probability 
at 4km × 4km resolution and analyze trends in what features have the strongest predictive 
power in wildfire ignition.

Key Objectives:
• 24-hour look-ahead (Operational Forecasting)
• Coverage: Entire State of California (~40,000 active land cells)
• Identify key predictive features for wildfire ignition`,

        problem: `Current Methods & Their Limitations:

Existing approaches like the Folsom Index and the National Fire Danger Rating System (NFDRS) 
have significant shortcomings:

Limitation 1: Low Spatial Resolution
• Often county-level or 10km+ resolution
• Not granular enough for localized predictions

Limitation 2: Linear Models Miss Complex Interactions
• Cannot capture how wind interacts with specific canyon topography
• Miss non-linear relationships between environmental factors

Our goal was to create a higher-resolution, non-linear model that could capture these 
complex interactions and provide actionable predictions at a much finer scale.`,

        approach: `Data Collection:

We gathered diverse datasets from multiple sources:
• GridMET Climate/Weather dataset
• SRTM DEM Topographic Raster dataset
• Fire Perimeters dataset (Vector/Image data)
• MTBS Burn Severity Raster dataset

Data Challenges:

Our data had extreme class imbalance between Fire and No-Fire classifications. This 
reflects real-world conditions—at any given moment, the vast majority of California 
is not on fire. Gathering and manipulating this multi-source data proved challenging.

Model Selection:

We evaluated multiple approaches, but XGBoost gave us the best performance. We 
implemented dynamic subsampling to address the class imbalance problem, as standard 
training produced models that predicted "No Fire" everywhere.`,

        results: `Key Outcomes:

• Built an interactive dashboard visualizing our findings
• Successfully addressed extreme class imbalance (fires occur in <0.2% of cell-day samples)
• Identified key predictive features for wildfire ignition

Critical Lessons Learned:

1. Class Imbalance Was Extreme
   Standard training predicted "No Fire" everywhere. Solution: Dynamic subsampling.

2. Static Feature Gaps Caused Hidden Bias
   Elevation, slope, ruggedness, and cell area had striped NaN gaps that propagated 
   into the model. Lesson: Inspect static layers visually before training; apply 
   imputation before dropping rows.

Future Improvements:
• Integrate live weather API (NOAA) into the dashboard
• Replace XGBoost with ConvLSTM to capture spatial spread (neighbors igniting neighbors)`,

        conclusion: `This project demonstrated the feasibility of high-resolution wildfire prediction 
using machine learning. While existing methods like NFDRS operate at coarse resolutions 
with linear assumptions, our XGBoost pipeline achieved 4km×4km granularity and captured 
complex feature interactions.

The extreme class imbalance (~0.2% fire occurrence) presented the biggest challenge, 
requiring dynamic subsampling techniques. Static feature gaps in topographic data 
highlighted the importance of thorough data inspection before model training.

With access to real-time weather APIs and spatiotemporal models like ConvLSTM, this 
system could evolve into a production-ready operational forecasting tool for California 
fire agencies.`,

        tags: ['Machine Learning', 'XGBoost', 'GIS'],
        technologies: ['Python', 'XGBoost', 'Pandas', 'GeoPandas', 'Rasterio', 'Dashboard', 'Scikit-learn'],
        github: 'https://github.com/Stepkar2004/FLARE',
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