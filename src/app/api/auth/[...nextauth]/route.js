import User from "@/models/User";
import connect from "@/utils/db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name:"Credentials",

            async authorize(credentials){

                await connect()

                try {

                    //hledá, jestli je uživatel existuje v databázi
                    const user = await User.findOne({ email: credentials.email})

                    if(user){
                        //kontrola hesla
                        const kontrolaHesla = await bcrypt.compare(credentials.password, user.password)

                        if(kontrolaHesla){
                            //hesla se rovnají
                            return user
                        }else{
                            throw new Error("Špatné heslo")
                        }

                    }else{
                        throw new Error("Uživatel nebyl nalezen")
                    }
                    
                } catch (err) {
                    throw new Error(err)
                }

            }
        })
    ],
    //pokud se ukáže error, tak se to ukáže na stránce login
    pages:{
        error:"/dashboard/prihlaseni"
    }
})

export {handler as GET, handler as POST}