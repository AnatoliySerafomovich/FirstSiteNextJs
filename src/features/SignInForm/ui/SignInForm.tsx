'use client'
import { useForm } from "react-hook-form"
import { SignInFields } from "../lib/types"
import { UiButton, UiInputField } from "@/shared/ui"
import { options } from "../lib/fieldOptions"
import { useState } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"

export function SignInForm(){
    const [password,setPassword] = useState("")
    const {register,handleSubmit,formState:{errors,isValid}} = useForm<SignInFields>({mode:"all"})

    const onSubmit = async (data:SignInFields) =>{
        await signIn("credentials",{email:data.email,password:data.password,callbackUrl:"/"})  
    }
    return(
     <form className="p-10 bg-[#1F1D2B] rounded-lg grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-white text-3xl font-semibold">Signin</div>
        <UiInputField props={{className:"w-full",placeholder:"Email",...register("email",options["email"])}} errorField={errors.email}/>
        <UiInputField props={{value:password,className:"w-full",placeholder:"Password",type:"password",onInput:(e)=>{setPassword(e.currentTarget.value)},...register("password",options["password"])}} errorField={errors.password}/>
        <Link href={"/login"} className="text-lg font-medium text-primary decoration-primary decoration-2 underline">login</Link>
        <UiButton variants="orange"  isLoading={!isValid } className="p-4">SignIn</UiButton>
     </form>
    )
}
