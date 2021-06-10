import React from 'react'
import styles from '../styles/components/Projects.module.scss'

const projects = [1, 2, 3]

const Projects: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Projetos recentes</h2>

      <div className={styles.projects}>
        {projects.map(project => (
          <div key={project} className="project">
            <div
              className={styles.project__head}
              style={{
                backgroundImage: 'url(https://picsum.photos/300/200)'
              }}
            />
            <div className={styles.project__body}>
              <h3>e-commerce</h3>
              <p>
                Sit lorem cumque maxime quidem laudantium. Quas qui aliquid
                commodi iure non dolore doloremque? Labore explicabo eius
                sapiente minima eos ex? Delectus aspernatur doloribus ratione
                sint ea explicabo possimus, eos.
              </p>

              <a href="#">Mais detalhes</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
