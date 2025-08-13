
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Summarist",
      description: "Summarist is a modern web app with HTML, CSS, JavaScript, and Node.js. Using Redux and Firebase for dynamic user experiences.",
      image: "/images/summarist.png",
      technologies: ["HTML, CSS, JavaScript, Next.JS, Redux, Firebase"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://summarist-taupe.vercel.app/"
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "Transformed a completely static HTML, CSS, Javascript, and React single page application into an interactive user interface using animations, transitions, and carousels.",
      image: "/images/nft.png",
      technologies: ["React", "Web3", "Ethereum", "CSS"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://shabnam-internship-7gkfpxpsb-s-j-k123.vercel.app/"
    },
    {
      id: 3,
      title: "X Clone",
      description: "A feature-rich social media platform built using Node.js, HTML, TypeScript, and npm. With React Icons, Redux, firebase, and Tailwind CSS, our platform offers a visually appealing and intuitive user experience.",
      image: "/images/twitter.png", 
      technologies: ["HTML, CSS, JavaScript, Next.JS, Redux, Firebase"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://twitter-clone-s-j-k123.vercel.app/"
    },
    {
      id: 4,
      title: "HTML Email Developing",
      description: "I have created emails from scratch that are fully responsive using HTML and CSS, including projects done for clients.",
      image: "/images/email.png",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://shabnamjabeen1998.wixsite.com/my-site"
    },
    {
      id: 5,
      title: "Podclip",
      description: "Podcast summariser, users can generate episode summaries, key takeaways and talk with their Podcast library",
      image: "/images/podclip.png",
      technologies: ["React Router v7", "Convex", "Clerk", "Polar.sh", "Resend", "OpenAI", "Vercel"],
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




