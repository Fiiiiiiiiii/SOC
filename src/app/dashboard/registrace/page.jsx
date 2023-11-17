"use client"

import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Registrace = () => {
  const [err, setErr] = useState(false);

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      
      const res = await fetch("/api/auth/registrace", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
          name,
          email,
          password
        }),
      })

      //úspěšně registrováno
      res.status === 201 && router.push("/dashboard/prihlaseni?success=Úspěšně registrováno")

    } catch (err) {
      setErr(true)
    }
    
  }

  return (
    <div className={styles.container}>

    <h1 className={styles.nadpis}>Vytvořte si účet!</h1>
      
    <form className={styles.form} onSubmit={handleSubmit}>
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

    {err && "Chyba při registraci"}

</div>
  )
}

export default Registrace