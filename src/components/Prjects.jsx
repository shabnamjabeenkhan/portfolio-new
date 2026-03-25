
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Summarist",
      description: "A book summary application that helps users gain more knowledge in less time. Features include book summaries, personalized recommendations, and briefcasts for busy individuals who want to learn efficiently.",
      image: "/images/summarist.png",
      technologies: ["HTML, CSS, JavaScript, Next.JS, Redux, Firebase"],
      github: "https://github.com/shabnamjabeenkhan/summarist",
      demo: "https://summarist-taupe.vercel.app/"
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "A modern NFT marketplace app      lication where users can browse, buy, and sell digital collectibles. Features include user authentication, wallet integration, and seamless transaction processing.",
      image: "/images/nft.png",
      technologies: ["React", "Web3", "Ethereum", "CSS"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://shabnam-internship-7gkfpxpsb-s-j-k123.vercel.app/"
    },
    {
      id: 3,
      title: "Qaalib",
      description: "Designed and implemented a scalable tutor assessment system, enabling tracking and visualization of 100+ student evaluations with actionable performance insights. ",
      image: "/images/qaalib.png", 
      technologies: ["React Router, TypeScript, Convex, Polar"],
      github: "https://github.com/shabnamjabeenkhan/Qaalib",
      demo: "https://www.qaalibtutors.com/"
    },
    {
      id: 4,
      title: "HTML Email Developing",
      description: "A professional portfolio website showcasing web development skills and projects. Built with modern design principles and responsive layouts for optimal user experience.",
      image: "/images/email.png",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://shabnamjabeen1998.wixsite.com/my-site"
    },
    {
      id: 5,
      title: "Podclip",
      description: "Turn Podcasts into Actionable Insights.",
      image: "/images/podclip.png",
      technologies: ["ReactJS", "Convex", "API", "Polar", "OpenAI"],
      github: "https://github.com/shabnamjabeenkhan/podclip.tech",
      demo: "https://podclip.tech"
    },
    {
      id: 6,
      title: "TradeBoost AI",
      description: "TradeBoost AI is an all-in-one platform that creates, optimises, and pushes Google Ads campaigns for tradespeople — helping them get more local leads with less effort.",
      image: "/images/tradeboost.png",
      technologies: ["ReactJS", "Convex", "API", "Polar", "OpenAI", "Google API"],
      github: "https://github.com/shabnamjabeenkhan/saas-project",
      demo: "https://www.tradeboostai.tech/"
    },
  ]

  return (
    <div className="projects-container">
      <h1 className='projects-title'>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}




