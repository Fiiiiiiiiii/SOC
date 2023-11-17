"use client"

import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Prihlaseni = () => {

  const session = useSession()
  const router = useRouter()

  if(session.status === "loading"){
    return <p>Loading</p>
  }

  if(session.status === "authenticated"){
    router?.push("/dashboard")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password})

  }

  return (
    <div className={styles.container}>

      <h1 className={styles.nadpis}>Přihlásit se</h1>
      
        <form className={styles.form} onSubmit={handleSubmit}>
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