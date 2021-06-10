import React, { FormEvent, useState } from 'react'
import styles from '../styles/components/Contact.module.scss'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <section className={styles.contact}>
      <h2>Entre em contato</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.input__row}>
          <div className={styles.input__group}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={event => setName(event.target.value)}
              autoComplete="off"
            />
          </div>

          <div className={styles.input__group}>
            <label htmlFor="lastname">Sobrenome</label>
            <input
              type="text"
              id="lastname"
              placeholder="Sobrenome"
              value={lastname}
              onChange={event => setLastname(event.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <div className={styles.input__group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className={styles.input__group}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem..."
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </div>

        <div className={styles.form__actions}>
          <button type="submit">Enviar</button>

          <div className={styles.form__actions_links}>
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
  )
}

export default Contact
