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
                // if (credentials?.email == null || credentials?.password == null) return null
                // const user = await getUserByEmail(credentials.email!)
                // if (user && user.password == credentials.password){
                //     const {id,email,password,avatar,...other} = user
                //     return {email,password,name:null,id:id.toString(),image:avatar} as User
                // }
                return null
            },
        })
    ],
    pages:{
        signIn:"/signIn",
        newUser:"/login",
        signOut:"/signOut",
        verifyRequest:"/confirm"
    }
}