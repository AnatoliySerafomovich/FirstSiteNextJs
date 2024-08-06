import clsx from "clsx"
import { InputHTMLAttributes } from "react"

type RadioField ={
} & InputHTMLAttributes<HTMLInputElement>
export function RadioField({...props}:RadioField){
    return(
        <label>
            <input type="radio" className="hidden peer" {...props}/>
            <div className={clsx(props.className,"cursor-pointer rounded-lg px-[12px] py-[7px] peer-checked:text-white peer-checked:bg-primary font-semibold text-sm text-primary bg-transparent peer-checked:border-primary duration-300 border border-[#393C49]")}>{props.placeholder}</div>
        </label>
    )
}