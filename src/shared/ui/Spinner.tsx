'use client'
import clsx from "clsx"
import { SpinnerIcon } from "."

export function Spinner({className}:{className:string}){
    return(
        <SpinnerIcon className={clsx( className,"animate-spin")}/>
    )
}