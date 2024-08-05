import clsx from "clsx"
import { SelectHTMLAttributes, useState } from "react"
import {FieldError} from "react-hook-form"
import { DownIcon } from ".."
import { Option } from "./Option"

type Option = {
    label:string,
    value:string
}
type SelectField = {
    errorField?:FieldError,
    placeholder:string,
    setValue?:(e:string)=>void,
    label?:string,
    options?:Option[]
}
export function Select({placeholder,errorField,setValue,label,options}:SelectField){
    const [isOpen,setOpen] = useState(false)
    return(
        <div className="relative flex gap-2">
            <div className="flex gap-[10px] p-[15px] rounded-lg bg-[#1F1D2B] border border-[#393C49]" onClick={()=>setOpen(e=>!e)}>
                <DownIcon className={clsx(isOpen && "rotate-180","text-white w-5 h-5 fill-white duration-300")}/>
                <div className="text-sm text-white font-medium ">{label==null ? placeholder : label}</div>
            </div>
            {isOpen &&(
                <div className="absolute right-0 -bottom-7 min-w-full flex flex-col bg-[#1F1D2B] border border-[#393C49] p-2 rounded-lg">
                    {options?.map((e,id)=>(
                        <Option label={e.label} onClick={()=>setValue ? setValue(e.value) : undefined} />
                    ))}
                </div>  
            )}
        </div>
    )
}