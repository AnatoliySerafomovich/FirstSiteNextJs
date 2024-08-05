import { ButtonHTMLAttributes } from "react";
import clsx from "clsx"
type Button ={
    variants:"outline" | "orange",
    isLoading:boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({...props}:Button){
    return(
        <button disabled={props.isLoading} {...props} className={clsx(props.className,{
            "orange": "hover:brightness-[.8] duration-300 rounded-[8px] bg-primary text-white flex justify-center shadow-button disabled:shadow-loading disabled:bg-gray-400 disabled:text-gray-300",
            "outline":"hover:brightness-[.8] duration-300 rounded-[8px] bg-transparent text-primary border flex justify-center border-primary disabled:border-gray-400 disabled:text-gray-400",
        }[props.variants],)}/>

    )
}