'use client'
import { SpinnerIcon } from "."


export function PageSpinner(){
    return(
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#252836] z-20 flex place-content-center items-center">
            <SpinnerIcon className="animate-spin w-12 h-12 text-primary"/>
        </div>
    )
}