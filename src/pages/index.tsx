import React, { FormEvent } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiReact, SiRedux, SiNodeDotJs } from 'react-icons/si'
import Navbar from '../components/Navbar'

const projects = [1, 2, 3]

export default function Home() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <div>
      <Navbar />

      <header className="header">
        <div>
          <h1>Pedro Cardoso</h1>
          <h2>Desenvolvedor Front-end</h2>

          <p>
            In eu, in facilisi justo, lobortis pharetra, etiam congue ipsum
            turpis orci augue elit adipiscing enim velit et id non vitae congue
            libero quis nec a tristique purus aenean semper
          </p>

          <div>
            <a
              href="https://github.com/peedrosh"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/peedrosh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <a href="#">Projetos</a>
        </div>
        <div>
          <img src="/header.jpg" />
        </div>
      </header>

      <section className="technologies">
        <SiReact size={80} />
        <SiRedux size={80} />
        <SiNodeDotJs size={80} />
      </section>

      <section className="about">
        <div>
          <strong>maecenas</strong>
          <strong>maecenas</strong>
          <strong>maecenas</strong>
        </div>
        <div>
          <h2>Sobre mim</h2>

          <p>
            Adipisicing dolor temporibus neque est pariatur? Saepe neque nam
            laudantium porro temporibus? A pariatur ab autem quas ab quod
            fugiat. Nesciunt possimus veritatis nam laudantium ab eaque. Atque
            natus doloremque tempora accusamus ut, similique, ratione ipsum Eum
            maxime dolorem voluptatibus quidem iste? Animi id aliquid voluptatem
            dolorem nobis ad Asperiores.
          </p>
          <p>
            Adipisicing dolor temporibus neque est pariatur? Saepe neque nam
            laudantium porro temporibus? A pariatur ab autem quas ab quod
            fugiat. Nesciunt possimus veritatis nam laudantium ab eaque. Atque
            natus doloremque tempora accusamus ut, similique, ratione ipsum Eum
            maxime dolorem voluptatibus quidem iste? Animi id aliquid voluptatem
            dolorem nobis ad Asperiores.
          </p>
          <p>
            Adipisicing dolor temporibus neque est pariatur? Saepe neque nam
            laudantium porro temporibus? A pariatur ab autem quas ab quod
            fugiat. Nesciunt possimus veritatis nam laudantium ab eaque. Atque
            natus doloremque tempora accusamus ut, similique, ratione ipsum Eum
            maxime dolorem voluptatibus quidem iste? Animi id aliquid voluptatem
            dolorem nobis ad Asperiores.
          </p>
        </div>
      </section>

      <section className="projects">
        <h2>Projetos recentes</h2>

        <div className="container">
          {projects.map(project => (
            <div key={project} className="project">
              <div
                className="project__head"
                style={{
                  backgroundImage: 'url(https://picsum.photos/300/200)'
                }}
              />
              <div className="project__body">
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

      <section className="contact">
        <h2>Entre em contato</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Nome" />
            </div>
            <div className="input-group">
              <label htmlFor="lastname">Sobrenome</label>
              <input type="text" id="lastname" placeholder="Sobrenome" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem..."
            ></textarea>
          </div>

          <div className="form__actions">
            <button type="submit">Enviar</button>

            <div className="form__actions_links">
              <a
                href="https://www.linkedin.com/in/peedrosh/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
