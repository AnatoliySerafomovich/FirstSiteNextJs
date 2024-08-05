import clsx from "clsx"
import { InputHTMLAttributes, ReactNode } from "react"
import {FieldError, RegisterOptions} from "react-hook-form"

type InputField = {
    errorField?:FieldError,
    before?:ReactNode,
    after?:ReactNode,
} & InputHTMLAttributes<HTMLInputElement>
export function InputField({...props}:InputField){
    return(
        <label className="relative">
            {props.before}
            <input {...props} className={clsx(props.className,"rounded-lg p-[14px] bg-[#2D303E] placeholder:text-[#889898] text-[#E0E6E9] text-sm")}/>
            {props.errorField &&(
                <div className="text-red-500 font-medium text-lg">{props.errorField.message}</div>
            )}
            {props.after}
        </label>
    )
}