import { useForm } from "react-hook-form"
import { LoginFields } from "../lib/types"
import { UiButton, UiInputField } from "@/shared/ui"
import { options } from "../lib/fieldOptions"
import { checkPassword } from "../lib/helper"

export function LoginForm(){
    const {register,handleSubmit,formState:{errors,isValid},getValues} = useForm<LoginFields>({mode:"all"})
    checkPassword(getValues("password"))
    const onSubmit = (data:LoginFields) =>{}
    return(
     <form className="p-10 bg-[#1F1D2B] rounded-lg grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-white text-3xl font-semibold">Login</div>
        <UiInputField props={{className:"w-full",placeholder:"Email",...register("email",options["email"])}} errorField={errors.email}/>
        <UiInputField props={{className:"w-full",placeholder:"Password",type:"password",...register("password",options["password"])}} errorField={errors.password}/>
        <UiButton variants="orange"  isLoading={!isValid} className="p-4">Login</UiButton>
     </form>
    )
}