import React from 'react'
import styles from "./Button2.module.css"
import Link from "next/link"

const Button = ({text, url}) => {
  return (
    <Link href={url} className={styles.link}>
        <span className={styles.span}>{text}</span>
        <i></i>
    </Link>
  )
}

export default Button