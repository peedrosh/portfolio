import React from 'react'
import styles from '../styles/components/Navbar.module.scss'

const Navbar: React.FC = () => {
  return (
    <nav className="container">
      <div className={styles.navbar}>
        <h1>Portfolio</h1>
      </div>
    </nav>
  )
}

export default Navbar
