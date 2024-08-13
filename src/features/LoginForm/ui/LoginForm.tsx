'use client'

import { useForm } from "react-hook-form"
import { LoginFields } from "../lib/types"
import { UiButton, UiInputField } from "@/shared/ui"
import { options } from "../lib/fieldOptions"
import { checkPassword } from "../lib/helper"
import { useState } from "react"
import   clsx from "clsx"
import { CreateUser } from "@/entities/user"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function LoginForm(){
    const [password,setPassword] = useState("")
    const router = useRouter()
    const {register,handleSubmit,formState:{errors,isValid},getValues,setError} = useForm<LoginFields>({mode:"all"})
    let result = checkPassword(password)
    const onSubmit = async (data:LoginFields) =>{
        if ( result != 3){ 
            setError("password",{message:"Danger password"})
            return
        }
        const newUser = await CreateUser(data.email,data.password)  
        if(!newUser){
            setError("email",{message:"Not unique"})
        }
        router.push("/signin")
    }
    return(
     <form className="p-10 bg-[#1F1D2B] rounded-lg grid gap-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-white text-3xl font-semibold">Login</div>
        <UiInputField props={{className:"w-full",placeholder:"Email",...register("email",options["email"])}} errorField={errors.email}/>
        <UiInputField props={{value:password,className:"w-full",placeholder:"Password",type:"password",onInput:(e)=>{setPassword(e.currentTarget.value)},...register("password",options["password"])}} errorField={errors.password}/>
        <ProgressPassword result={result}/>
        <Link href={"/signin"} className="text-lg font-medium text-primary decoration-primary decoration-2 underline">signin</Link>
        <UiButton variants="orange"  isLoading={!isValid } className="p-4">Login</UiButton>
     </form>
    )
}

function ProgressPassword({result}:{result:number}){
    const arrayResult = new Array(3).fill(0)

    return(
        <div>
        <div className="grid gap-1 grid-flow-col"> 
            {arrayResult.map((_,id)=>(
                <div className={clsx(id<result? {
                    1:"bg-red-500",
                    2:"bg-yellow-500",
                    3:"bg-green-500",
                }[result] : "bg-white","duration-300 rounded-lg py-1")} key={id}/>
            ))}
        </div>
        <div className={clsx({
            1:"text-red-500",
            2:"text-yellow-500",
            3:"text-green-500",
        }[result],"font-medium text-lg rounded-sm duration-300")}>{{
            0:"",
            1:"Danger",
            2:"Normal",
            3:"Good",
        }[result]}</div>
        </div>
    )
}