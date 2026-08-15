import { useLocation, useNavigate } from 'react-router-dom'
import './CareerRoadmap.css'

function CareerRoadmap() {
  const location = useLocation()
  const navigate = useNavigate()

  const career = location.state?.career || 'Software Engineer'

  const roadmapData = {
    'Software Engineer': [
      {
        month: 'Month 1',
        title: 'Programming Fundamentals',
        description:
          'Build a strong programming foundation and improve your problem-solving ability.',
        skills: [
          'C++ or Python',
          'Variables, loops and functions',
          'Arrays and strings',
          'Basic OOP concepts',
          '20–30 coding problems'
        ],
        project: 'Build a Console-Based Student Management System'
      },
      {
        month: 'Month 2',
        title: 'Data Structures & Algorithms',
        description:
          'Learn the core DSA concepts required for coding interviews.',
        skills: [
          'Arrays and Strings',
          'Linked Lists',
          'Stacks and Queues',
          'Hash Maps',
          'Recursion',
          'Binary Trees'
        ],
        project: 'Build a Mini Search / Contact Management System'
      },
      {
        month: 'Month 3',
        title: 'Web Development',
        description:
          'Learn how modern full-stack web applications are created.',
        skills: [
          'HTML & CSS',
          'JavaScript',
          'React',
          'Node.js',
          'REST APIs',
          'Git and GitHub'
        ],
        project: 'Build a Full-Stack Career Guidance Website'
      },
      {
        month: 'Month 4',
        title: 'Real-World Projects',
        description:
          'Move from tutorials to practical projects that demonstrate your skills.',
        skills: [
          'Build 2–3 portfolio projects',
          'Use GitHub properly',
          'Connect frontend with backend',
          'Work with databases',
          'Deploy applications'
        ],
        project: 'Build and Deploy a Full-Stack AI Career Assistant'
      },
      {
        month: 'Month 5',
        title: 'Advanced Skills & System Thinking',
        description:
          'Improve your understanding of production-level software development.',
        skills: [
          'Authentication',
          'Database design',
          'API integration',
          'Error handling',
          'Basic system design',
          'Testing and debugging'
        ],
        project: 'Build a Production-Ready Web Application'
      },
      {
        month: 'Month 6',
        title: 'Interview & Job Preparation',
        description:
          'Prepare your profile and practice for software engineering interviews.',
        skills: [
          'Daily DSA practice',
          'Technical interview questions',
          'Resume preparation',
          'LinkedIn optimization',
          'Mock interviews',
          'Apply for internships and jobs'
        ],
        project: 'Create a polished GitHub + Portfolio profile'
      }
    ],

    'UI/UX Designer': [
      {
        month: 'Month 1',
        title: 'Design Fundamentals',
        description:
          'Build a strong foundation in visual and user-centered design.',
        skills: [
          'Color theory',
          'Typography',
          'Layout',
          'Composition',
          'Design principles'
        ],
        project: 'Redesign a popular website homepage'
      },
      {
        month: 'Month 2',
        title: 'Figma & UI Design',
        description:
          'Learn to create professional digital interfaces.',
        skills: [
          'Figma',
          'Wireframes',
          'Components',
          'Design systems',
          'Responsive design'
        ],
        project: 'Design a complete mobile application'
      },
      {
        month: 'Month 3',
        title: 'UX Research',
        description:
          'Understand users and design experiences around their needs.',
        skills: [
          'User research',
          'Personas',
          'User journeys',
          'User flows',
          'Usability testing'
        ],
        project: 'Conduct UX research for a real-world problem'
      },
      {
        month: 'Month 4',
        title: 'Advanced Product Design',
        description:
          'Learn how to design complete digital products.',
        skills: [
          'Information architecture',
          'Interaction design',
          'Prototyping',
          'Design systems',
          'Accessibility'
        ],
        project: 'Design a complete SaaS/product experience'
      },
      {
        month: 'Month 5',
        title: 'Portfolio Development',
        description:
          'Turn your work into strong case studies.',
        skills: [
          'Case studies',
          'Portfolio storytelling',
          'Problem → Solution presentation',
          'Personal branding',
          'Portfolio website'
        ],
        project: 'Create a professional UX/UI portfolio'
      },
      {
        month: 'Month 6',
        title: 'Career Preparation',
        description:
          'Prepare for internships and UI/UX roles.',
        skills: [
          'Portfolio presentation',
          'Design interviews',
          'Resume',
          'LinkedIn',
          'Networking',
          'Mock interviews'
        ],
        project: 'Apply for UI/UX internships and freelance projects'
      }
    ],

    'Business Professional': [
      {
        month: 'Month 1',
        title: 'Business Fundamentals',
        description:
          'Understand how companies and business models work.',
        skills: [
          'Business models',
          'Marketing basics',
          'Finance basics',
          'Market research',
          'Business terminology'
        ],
        project: 'Create a business model for a startup idea'
      },
      {
        month: 'Month 2',
        title: 'Communication & Presentation',
        description:
          'Develop professional communication and presentation skills.',
        skills: [
          'Public speaking',
          'Professional writing',
          'Presentation skills',
          'Negotiation',
          'Communication'
        ],
        project: 'Create and present a startup pitch'
      },
      {
        month: 'Month 3',
        title: 'Marketing & Analytics',
        description:
          'Learn how businesses attract customers and measure growth.',
        skills: [
          'Digital marketing',
          'SEO basics',
          'Social media marketing',
          'Excel',
          'Business analytics'
        ],
        project: 'Create a digital marketing campaign'
      },
      {
        month: 'Month 4',
        title: 'Management & Leadership',
        description:
          'Learn how to manage teams, projects and resources.',
        skills: [
          'Project management',
          'Leadership',
          'Teamwork',
          'Time management',
          'Decision making'
        ],
        project: 'Manage a simulated business project'
      },
      {
        month: 'Month 5',
        title: 'Business Portfolio',
        description:
          'Create practical work that demonstrates business skills.',
        skills: [
          'Market research',
          'Case studies',
          'Business plans',
          'Data analysis',
          'Strategy'
        ],
        project: 'Create a complete business strategy'
      },
      {
        month: 'Month 6',
        title: 'Career Preparation',
        description:
          'Prepare for internships and entry-level business roles.',
        skills: [
          'Resume building',
          'LinkedIn',
          'Networking',
          'Case interviews',
          'Mock interviews',
          'Job applications'
        ],
        project: 'Build a professional business portfolio'
      }
    ],

    'Data / AI Professional': [
      {
        month: 'Month 1',
        title: 'Python & Mathematics',
        description:
          'Build the mathematical and programming foundation required for AI.',
        skills: [
          'Python',
          'NumPy basics',
          'Statistics',
          'Probability',
          'Linear algebra basics'
        ],
        project: 'Build a Python Data Analysis mini project'
      },
      {
        month: 'Month 2',
        title: 'Data Analysis',
        description:
          'Learn how to clean, analyze and visualize real-world data.',
        skills: [
          'Pandas',
          'NumPy',
          'Matplotlib',
          'Seaborn',
          'Data cleaning',
          'Exploratory Data Analysis'
        ],
        project: 'Perform EDA on a real-world dataset'
      },
      {
        month: 'Month 3',
        title: 'Machine Learning',
        description:
          'Learn how machine learning models identify patterns in data.',
        skills: [
          'Supervised learning',
          'Unsupervised learning',
          'Regression',
          'Classification',
          'Clustering',
          'Model evaluation'
        ],
        project: 'Build a Machine Learning prediction system'
      },
      {
        month: 'Month 4',
        title: 'Deep Learning & AI',
        description:
          'Move from traditional ML toward modern AI techniques.',
        skills: [
          'Neural networks',
          'Deep learning basics',
          'Computer vision',
          'NLP basics',
          'PyTorch or TensorFlow'
        ],
        project: 'Build an AI image or NLP application'
      },
      {
        month: 'Month 5',
        title: 'Generative AI & Deployment',
        description:
          'Learn how modern AI applications are built and deployed.',
        skills: [
          'LLMs',
          'Prompt engineering',
          'RAG basics',
          'AI APIs',
          'Model deployment',
          'FastAPI / Flask'
        ],
        project: 'Build a Generative AI Career Assistant'
      },
      {
        month: 'Month 6',
        title: 'AI Career Preparation',
        description:
          'Prepare your AI portfolio and get ready for internships and jobs.',
        skills: [
          'ML interview questions',
          'AI project portfolio',
          'GitHub',
          'Resume',
          'LinkedIn',
          'Mock interviews'
        ],
        project: 'Build and deploy a complete AI portfolio project'
      }
    ]
  }

  const roadmap = roadmapData[career] || roadmapData['Software Engineer']

  return (
    <section className="roadmap-page">

      <div className="roadmap-header">

        <span>PERSONALIZED CAREER ROADMAP</span>

        <h1>
          Your 6-Month Path to
          <strong> {career}</strong>
        </h1>

        <p className="roadmap-note">
          Follow this personalized roadmap to build the skills,
          projects, and experience required for your career goal.
        </p>

      </div>


      <div className="roadmap">

        {roadmap.map((step, index) => (

          <div className="roadmap-step" key={index}>

            <div className="step-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="step-content">

              <span className="month-label">
                {step.month}
              </span>

              <h2>
                {step.title}
              </h2>

              <p>
                {step.description}
              </p>

              <h3>
                What to learn
              </h3>

              <ul>
                {step.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="roadmap-project">
                <strong>🚀 Project:</strong>
                <span>{step.project}</span>
              </div>

            </div>

          </div>

        ))}

      </div>


      <div className="roadmap-actions">

        <button
          className="back-result-btn"
          onClick={() => navigate('/result')}
        >
          ← Back to Career Result
        </button>

        <button
  className="resources-btn"
  onClick={() =>
    navigate('/resources', {
      state: {
        career: career
      }
    })
  }
>
  Explore Learning Resources →
</button>

      </div>

    </section>
  )
}

export default CareerRoadmap