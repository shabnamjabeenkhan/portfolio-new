import React from 'react'
import './Projects.css'

function Home() {
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
      description: "A modern NFT marketplace application where users can browse, buy, and sell digital collectibles. Features include user authentication, wallet integration, and seamless transaction processing.",
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
      description: "Turn Podcasts into Actionable Insights.",
      image: "/images/podclip.png",
      technologies: ["ReactJS", "Convex", "API", "Polar", "OpenAI"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://podclip.tech"
    },
    {
      id: 6,
      title: "TradeBoost AI",
      description: "TradeBoost AI is an all-in-one platform that creates, optimises, and pushes Google Ads campaigns for tradespeople — helping them get more local leads with less effort.",
      image: "/images/tradeboost.png",
      technologies: ["ReactJS", "Convex", "API", "Polar", "OpenAI", "Google API"],
      github: "https://github.com/shabnamjabeenkhan",
      demo: "https://www.tradeboostai.tech/"
    }
  ]
  return (
    <main>
      <h1>Shabnam Khan</h1>
      <p>Software Developer</p>
      <div className="about-section">
        <p>I'm a passionate software developer who loves exploring new technologies and building innovative solutions. Recently, I've been diving deep into the world of SaaS applications, creating tools that solve real-world problems and enhance user experiences.</p>
        <p>When I'm not coding, you'll find me experimenting with the latest frameworks and constantly learning new ways to improve my craft.</p>
      </div>
      <div className="social-icons">
        <a href="https://x.com/S_j_K123" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/shabnamjabeenkhan/" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://github.com/shabnamjabeenkhan" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      <section id="projects" className="projects-container">
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
      </section>
    </main>
  )
}

export default Home