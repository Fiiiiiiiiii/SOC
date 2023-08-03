import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const Prihlaseni = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.nadpis}>Přihlásit se</h1>
      
        <form className={styles.form}>
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

          <div className={styles.registrace}>
              <h1>Nemáte účet?</h1>
              <Link href="/dashboard/registrace" className={styles.registraceLink}>Vytvořte si ho!</Link>
          </div>

        </form>

    </div>
  )
}

export default Prihlaseni