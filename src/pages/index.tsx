import React from 'react'
import { SiReact, SiRedux, SiNodeDotJs } from 'react-icons/si'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Navbar />

      <Header />

      <section className={styles.technologies}>
        <SiReact />
        <SiRedux />
        <SiNodeDotJs />
      </section>

      <About />

      <Projects />

      <Contact />
    </div>
  )
}
