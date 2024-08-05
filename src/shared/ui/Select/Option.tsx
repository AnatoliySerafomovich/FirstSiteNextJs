import clsx from "clsx"
import { HTMLAttributes } from "react"

type Option = {
    label:string,
} & HTMLAttributes<HTMLInputElement>
export function Option({...props}:Option){
    return(
        <div className={clsx(props.className,"text-white text-sm font-medium ")} {...props}>{props.label}</div>
    )
}