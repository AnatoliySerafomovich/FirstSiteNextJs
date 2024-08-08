import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx"
type Button ={
    variants:"outline" | "orange",
    isLoading?:boolean,
    props?:ButtonHTMLAttributes<HTMLButtonElement>
    children?:ReactNode | ReactNode[],
    className?:string
}

export function Button({props,isLoading,variants,children,className}:Button){

    return(
        <button disabled={isLoading} {...props} className={clsx(className,{
            "orange": "hover:brightness-[.8] duration-300 rounded-[8px] bg-primary text-white flex justify-center shadow-button disabled:shadow-loading disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300",
            "outline":"hover:brightness-[.8] duration-300 rounded-[8px] bg-transparent text-primary border flex justify-center border-primary disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400",
        }[variants],)}>
            {children}
        </button>

    )
}