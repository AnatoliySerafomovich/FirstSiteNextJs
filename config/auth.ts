import { GetUserByEmail } from "@/entities/user";
import type { AuthOptions, User, } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const authConfig:AuthOptions ={
    providers:[
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_SECRET!
        }),
        Credentials({
            credentials:{
                email:{label:"email",type:"email",required:true},
                password:{label:"password",type:"password",required:true},
            },
            async authorize(credentials,req) {
                if (credentials?.email == null || credentials?.password == null) return null
                const user = await GetUserByEmail(credentials.email!,true)
                if (user && user.password == credentials.password){
                    const {id,password,email,...other} = user
                    return {email,password,name:null,id:id.toString(),image:""} as User
                }
                return null
            },
        })
    ],
    pages:{
        signIn:"/signIn",
        newUser:"/login",
        signOut:"/signOut",
        verifyRequest:"/confirm"
    },
    adapter:{}
}