import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/components/Header.module.scss'

const Header: React.FC = () => (
  <header className={styles.header}>
    <div>
      <h1>Pedro Cardoso</h1>
      <h2>Desenvolvedor Front-end</h2>

      <p>
        In eu, in facilisi justo, lobortis pharetra, etiam congue ipsum turpis
        orci augue elit adipiscing enim velit et id non vitae congue libero quis
        nec a tristique purus aenean semper
      </p>

      <div>
        <a href="https://github.com/peedrosh" target="_blank" rel="noreferrer">
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
)

export default Header
