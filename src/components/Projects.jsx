import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: "SkillHance",
      description:
        "A real-time platform that provides overview about engineering branches and coding fundementals.",
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://picsum.photos/seed/nebula/600/400",
      link: "https://skill-hance.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/SkillHancer",
    },
    {
      id: 2,
      title: "USB Physical Security",
      description:
        "A robust security feature for unidentified threats aiming at ports.",
      tags: ["React", "flask", "openCV","SMTP"],
      imageUrl: "https://picsum.photos/seed/cosmos/600/400",
      link: "https://usb-physical.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/USB_Physical",
    },
    {
      id: 3,
      title: "Seekers of Lost Things",
      description:
        "A decentralized social media platform focused on privacy and user ownership.",
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://picsum.photos/seed/orbit/600/400",
      link: "https://seekers-things.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/seekers",
    },
    {
      id: 3,
      title: "Seekers of Lost Things",
      description:
        "A decentralized social media platform focused on privacy and user ownership.",
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://picsum.photos/seed/orbit/600/400",
      link: "https://seekers-things.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/seekers",
    },
    {
      id: 3,
      title: "Seekers of Lost Things",
      description:
        "A decentralized social media platform focused on privacy and user ownership.",
      tags: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://picsum.photos/seed/orbit/600/400",
      link: "https://seekers-things.vercel.app/",
      githubLink: "https://github.com/LUCKYHARSHA001/seekers",
    },
    
  ];

  return (
    <div>
      <div className="projects-page-top" id="Projects">
        <h1>Missionary</h1>
        <p>
          Exploration of digital frontiers through code. Hover over a data-pad
          to analyze mission details.
        </p>
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-image-wrapper">
                <img src={project.imageUrl} alt={project.title} />
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags-row">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-footer">
                  <a
                    href={project.link}
                    className="view-project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>

                  <a
                    href={project.githubLink}
                    className="github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 15.13V19h0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
