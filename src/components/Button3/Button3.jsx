import React from 'react'
import styles from "./Button3.module.css"
import Link from "next/link"

const Button3 = ({text, url}) => {
  return (
    <Link href={url} className={styles.link}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
    </Link>
  )
}

export default Button3