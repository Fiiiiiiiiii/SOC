"use client"

import React from 'react'
import styles from "./page.module.css"
import nagr from "../../../public/nagr.jpg"
import Image from 'next/image'


const oNas = () => {
  return (
    <div>

            <Image src={nagr} alt="" className={styles.nagr}/>

    </div>
  )
}

export default oNas