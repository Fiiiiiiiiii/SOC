import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const Registrace = () => {
  return (
    <div className={styles.container}>

    <h1 className={styles.nadpis}>Vytvořte si účet!</h1>
      
    <form className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            required
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Email"
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.input}
        />

      <button className={styles.button}>Login</button>

      <div className={styles.prihlaseni}>
          <h1>Už máte účet?</h1>
          <Link href="/dashboard/prihlaseni" className={styles.prihlaseniLink}>Přihlašte se.</Link>
      </div>

    </form>

</div>
  )
}

export default Registrace