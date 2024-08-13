'use server'
import {prisma} from "@/shared/lib/prisma"
export async function CreateUser(email:string,password:string,) {
    const firstUser = await GetUserByEmail(email,false)
    if (firstUser?.email != undefined) {
        return false
    }
    const result = await prisma?.user.create({
        data:{
            email,
            password,
            confirm:false
        },
    })
    return result
}
export async function  GetUserByEmail(email:string,whisPass:boolean) {
    const result = await prisma?.user.findUnique({
        where:{
            email
        },
        omit:{
            password:!whisPass
        }
    })
    return result
}