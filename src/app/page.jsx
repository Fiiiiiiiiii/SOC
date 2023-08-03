import Image from 'next/image'
import styles from './page.module.css'
import Dum from "public/Dům.jpg"
import Link from 'next/link'
import Button from "@/components/Button/Button"
import Button2 from "@/components/Button2/Button2"

export default function Home() {

  return (
    <div className={styles.container}>

        <div className={styles.uvod}>

            <Image src={Dum} alt="" className={styles.img}/>

            <div className={styles.nadpisHlavni}>

              <div className={styles.nadpis}>
                  <h1 className={styles.nadpisText}>S námi budou platby jednodušší</h1>
              </div>

              <Link href="/dashboard/registrace" className={styles.registrace}>
                <div className={styles.registraceText}>Registrace</div>
              </Link>

            </div>

        </div>

        <div className={styles.section}>

            <div className={styles.section1}>

                <h1>Zapomínáš platit poplatky za odpad, vodu nebo energie?</h1>
                <h1>S námi už nikdy nezapomeneš!</h1>

            </div>

            <div className={styles.section2}>

                <div className={styles.section2Text}>Staň se jeden z nás</div>

                <div className={styles.section2Main}>

                    <div className={styles.section2Registrace}>
                        <h1 className={styles.section2RegistraceText}>Zaregistruj se</h1>
                        <Button url="/dashboard/registrace" text="Registrace"/>
                    </div>

                    <div className={styles.deliciCara}></div>

                    <div className={styles.section2Aplikace}>
                        <h1 className={styles.section2AplikaceText}>Stáhni si naši aplikaci</h1>
                        <Button2 url="https://google.com" text="Stáhnout"/>
                    </div>

                </div>

            </div>

            <div  className={styles.section3}>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis alias tempore eaque quod? Aut natus officia temporibus non velit odit quam, assumenda doloremque vitae, sit consequatur delectus at eligendi asperiores.</h1>
            </div>

            <div className={styles.section4}>

            </div>

        </div>

    </div>
  )
}
