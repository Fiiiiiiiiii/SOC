import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.containerx}>

      <div className={styles.mainResponsibilita}>

          <div className={styles.responsibilita1}>

              <div className={styles.section1}>
                  <div className={styles.section1Box}>
                      <h1>Logo</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eveniet accusamus iusto! Laudantium odio quasi at repudiandae hic quod harum aliquid nostrum.</p>
                  </div>
              </div>

              <div className={styles.section2}>
                  <div className={styles.section2Box}> 
                      <h1>Další stránky</h1>
                      <Link href="/pro-firmy">Pro firmy</Link>
                      <Link href="/o-nas">O nás</Link>
                      <Link href="/dashboard/prihlaseni">Přihlášení</Link>
                  </div>
              </div>

          </div>

          <div className={styles.responsibilita2}>

              <div className={styles.section3}>
                  <div className={styles.section3Box}>
                      <h1>Naše služby</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
              </div>

              <div className={styles.section4}>
                  <div className={styles.section4Box}>
                      <h1>Contact</h1>
                      <p>+420 069 420 123</p>
                      <p>tvojeMama@uTebeDoma.cz</p>
                  </div>
              </div>

          </div>

      </div>

    </div>
  )
}

export default Footer