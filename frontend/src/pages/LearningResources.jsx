import { useLocation } from 'react-router-dom'
import './LearningResources.css'

function LearningResources() {
  const location = useLocation()

  const career = location.state?.career || 'Software Engineer'

  const resourcesData = {
    'Software Engineer': [
      {
        title: 'Programming Fundamentals',
        description:
          'Build strong programming fundamentals and improve your logic-building skills.',
        type: 'Course',
        icon: '💻',
        link: 'https://www.youtube.com/results?search_query=programming+fundamentals+tutorial'
      },
      {
        title: 'Data Structures & Algorithms',
        description:
          'Learn DSA and practice coding problems for technical interviews.',
        type: 'Practice',
        icon: '🧠',
        link: 'https://leetcode.com/'
      },
      {
        title: 'Web Development',
        description:
          'Learn HTML, CSS, JavaScript, React and modern full-stack development.',
        type: 'Course',
        icon: '🌐',
        link: 'https://developer.mozilla.org/en-US/docs/Learn'
      },
      {
        title: 'React',
        description:
          'Learn how to build modern interactive user interfaces with React.',
        type: 'Documentation',
        icon: '⚛️',
        link: 'https://react.dev/learn'
      },
      {
        title: 'Git & GitHub',
        description:
          'Learn version control and manage your software projects professionally.',
        type: 'Tool',
        icon: '🔧',
        link: 'https://docs.github.com/en/get-started'
      },
      {
        title: 'Node.js',
        description:
          'Learn backend development and build APIs using Node.js.',
        type: 'Backend',
        icon: '🟢',
        link: 'https://nodejs.org/en/learn'
      }
    ],

    'UI/UX Designer': [
      {
        title: 'UI/UX Fundamentals',
        description:
          'Learn the principles behind creating useful and attractive digital products.',
        type: 'Course',
        icon: '🎨',
        link: 'https://www.youtube.com/results?search_query=ui+ux+design+course+for+beginners'
      },
      {
        title: 'Figma',
        description:
          'Learn wireframing, prototyping, components and modern interface design.',
        type: 'Tool',
        icon: '🖌️',
        link: 'https://help.figma.com/'
      },
      {
        title: 'UX Research',
        description:
          'Learn how to understand users through research, personas and user journeys.',
        type: 'UX',
        icon: '🔎',
        link: 'https://www.nngroup.com/articles/'
      },
      {
        title: 'Design Systems',
        description:
          'Understand reusable components, typography, colors and design consistency.',
        type: 'Design',
        icon: '🧩',
        link: 'https://m3.material.io/'
      },
      {
        title: 'Portfolio Building',
        description:
          'Learn how to present your projects and create strong UX case studies.',
        type: 'Portfolio',
        icon: '📁',
        link: 'https://www.youtube.com/results?search_query=ux+design+portfolio+case+study'
      },
      {
        title: 'UI/UX Interview Preparation',
        description:
          'Prepare for common design interview questions and portfolio discussions.',
        type: 'Career',
        icon: '🎯',
        link: 'https://www.youtube.com/results?search_query=ui+ux+design+interview+questions'
      }
    ],

    'Business Professional': [
      {
        title: 'Business Fundamentals',
        description:
          'Understand business models, strategy, finance and how companies operate.',
        type: 'Course',
        icon: '💼',
        link: 'https://www.youtube.com/results?search_query=business+fundamentals+course'
      },
      {
        title: 'Digital Marketing',
        description:
          'Learn SEO, social media marketing, content strategy and online advertising.',
        type: 'Marketing',
        icon: '📢',
        link: 'https://skillshop.withgoogle.com/'
      },
      {
        title: 'Excel & Analytics',
        description:
          'Develop spreadsheet and data-analysis skills useful in business roles.',
        type: 'Analytics',
        icon: '📊',
        link: 'https://www.youtube.com/results?search_query=excel+data+analysis+course'
      },
      {
        title: 'Communication Skills',
        description:
          'Improve presentations, public speaking, professional writing and communication.',
        type: 'Skill',
        icon: '🗣️',
        link: 'https://www.youtube.com/results?search_query=professional+communication+skills'
      },
      {
        title: 'Project Management',
        description:
          'Learn how to plan, manage and deliver projects effectively.',
        type: 'Management',
        icon: '📋',
        link: 'https://www.youtube.com/results?search_query=project+management+for+beginners'
      },
      {
        title: 'Business Interview Preparation',
        description:
          'Prepare for case studies, HR interviews and business role interviews.',
        type: 'Career',
        icon: '🎯',
        link: 'https://www.youtube.com/results?search_query=business+interview+questions'
      }
    ],

    'Data / AI Professional': [
      {
        title: 'Python for Data Science',
        description:
          'Learn Python fundamentals and the programming skills needed for AI.',
        type: 'Course',
        icon: '🐍',
        link: 'https://www.python.org/about/gettingstarted/'
      },
      {
        title: 'NumPy & Pandas',
        description:
          'Learn data manipulation, analysis and numerical computing.',
        type: 'Data Science',
        icon: '📊',
        link: 'https://pandas.pydata.org/docs/getting_started/'
      },
      {
        title: 'Machine Learning',
        description:
          'Learn regression, classification, clustering and model evaluation.',
        type: 'Machine Learning',
        icon: '🤖',
        link: 'https://scikit-learn.org/stable/getting_started.html'
      },
      {
        title: 'Deep Learning',
        description:
          'Understand neural networks and build modern deep-learning applications.',
        type: 'AI',
        icon: '🧠',
        link: 'https://www.youtube.com/results?search_query=deep+learning+course+for+beginners'
      },
      {
        title: 'Generative AI',
        description:
          'Learn LLMs, prompt engineering, RAG and modern AI application development.',
        type: 'GenAI',
        icon: '✨',
        link: 'https://www.youtube.com/results?search_query=generative+AI+course+beginners'
      },
      {
        title: 'AI Projects',
        description:
          'Build practical AI projects to strengthen your portfolio.',
        type: 'Projects',
        icon: '🚀',
        link: 'https://www.kaggle.com/'
      }
    ]
  }

  const resources =
    resourcesData[career] ||
    resourcesData['Software Engineer']

  return (
    <section className="resources-page">

      <div className="resources-header">

        <span>PERSONALIZED LEARNING RESOURCES</span>

        <h1>
          Learn. Build.
          <span> Grow.</span>
        </h1>

        <p>
          Recommended resources for your career path:
        </p>

        <h2 className="career-name">
          {career}
        </h2>

      </div>

      <div className="resources-grid">

        {resources.map((resource, index) => (

          <div
            className="resource-card"
            key={index}
          >

            <div className="resource-icon">
              {resource.icon}
            </div>

            <span className="resource-type">
              {resource.type}
            </span>

            <h2>
              {resource.title}
            </h2>

            <p>
              {resource.description}
            </p>

            <button
              onClick={() =>
                window.open(
                  resource.link,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              Explore →
            </button>

          </div>

        ))}

      </div>

    </section>
  )
}

export default LearningResources