"use client"

import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import menuLogo from "public/Menu_logo.jpg"
import user from "public/User.png"
import Image from 'next/image'
import { useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>

    
        <div className={styles.container}>
          
            <Link href="/"  className={styles.logo}>Název/Logo</Link>

            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/pro-firmy">Pro firmy</Link>
              <Link href="/o-nas">O nás</Link>
            </div>

            <div className={styles.mainPrihlaseni}>
                <Link href="/dashboard/prihlaseni" className={styles.prihlaseni}>Příhlášení</Link>
                <Link href="/dashboard/prihlaseni" className={styles.user}>
                  <Image src={user} alt="" className={styles.userImg}/>
                </Link>
            </div>

        </div>

        <div className={styles.container2}>

            <div className={styles.menu}>
                <Link href="/"  className={styles.logo2}>Logo/Název</Link>
                <Image src={menuLogo} alt="" className={styles.img} 
                onClick={() => setShowMenu(!showMenu)}/>

            </div>

            <div className={`${showMenu ? styles.show : styles.hide}`}>
                <div className={styles.links2}>
                    <Link href="/prihlaseni" className={styles.prihlaseni2}>Příhlášení</Link>
                    <Link href="/">Home</Link>
                    <Link href="/pro-firmy">Pro firmy</Link>
                    <Link href="/o-nas">O nás</Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Navbar