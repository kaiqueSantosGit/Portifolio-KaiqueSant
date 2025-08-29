// src/components/Projects.jsx

import styles from "./Projects.module.css";

// 1. DADOS DOS PROJETOS (Aqui que você adicionará seus projetos no futuro)
const projectsData = [
  {
    id: 1,
    title: "Projeto 1: Site Institucional",
    description:
      "Um site responsivo para uma empresa fictícia, construído com React e CSS Modules.",
    image: "https://via.placeholder.com/400x250", // Placeholder, trocaremos depois
    technologies: ["React", "CSS Modules", "JavaScript"],
    repoLink: "https://github.com/seu-usuario/projeto-1",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Projeto 2: Lista de Tarefas",
    description:
      "Uma aplicação interativa de lista de tarefas com funcionalidades de adicionar, remover e marcar como concluída.",
    image: "https://via.placeholder.com/400x250",
    technologies: ["React", "useState", "CSS"],
    repoLink: "https://github.com/seu-usuario/projeto-2",
    liveLink: "#",
  },
  // Adicione mais projetos aqui...
];

function Projects() {
  return (
    <section id="projetos" className={styles.projects}>
      <h2 data-aos="fade-down">Meus Projetos</h2>
      <div className={styles.projectsGrid}>
        {/* 2. USANDO O .MAP() PARA RENDERIZAR OS PROJETOS */}
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            data-aos="fade-up"
          >
            <img
              src={project.image}
              alt={`Thumbnail do projeto ${project.title}`}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositório
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Online
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
