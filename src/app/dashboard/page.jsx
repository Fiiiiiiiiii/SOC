"use client"

import { signOut, useSession } from "next-auth/react"
import styles from "./page.module.css"
import useSWR from "swr"
import { useRouter } from "next/navigation"

const Dashboard = () => {

    const session = useSession()

    const router = useRouter()

    //fechování
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(
        `/api/posts?username=${session?.data?.user.name}`, 
        fetcher 
    );

    //console.log(data)
    //console.log(error)


    if(session.status === "loading"){
        return <p>Loading</p>
    }

    if(session.status === "unauthenticated"){
        router?.push("/dashboard/prihlaseni")
    }

    if(session.status === "authenticated"){
        return <div className={styles.container}>
            
            <h1>Úspěšně přihlášeno</h1>


            <button onClick={signOut}>Odhlásit se</button>

        </div>
    }

    //console.log(session)

}

export default Dashboard