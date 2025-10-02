
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Summarist",
      description: "A book summary application that helps users gain more knowledge in less time. Features include book summaries, personalized recommendations, and briefcasts for busy individuals who want to learn efficiently.",
      image: "/images/summarist.png",
      technologies: ["HTML, CSS, JavaScript, Next.JS, Redux, Firebase"],
      github: "https://github.com/shabnamjabeenkhan",
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
      title: "X Clone",
      description: "A full-featured social media application that replicates X's core functionality. Users can post tweets, follow others, like posts, and engage with a real-time feed.",
      image: "/images/twitter.png", 
      technologies: ["HTML, CSS, JavaScript, Next.JS, Redux, Firebase"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://twitter-clone-s-j-k123.vercel.app/"
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
      description: "Description for your fifth project. Explain how this project demonstrates your skills and growth.",
      image: "/images/podclip.png",
      technologies: ["React Native", "Redux", "API"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://podclip.tech"
    }
  ]

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
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




