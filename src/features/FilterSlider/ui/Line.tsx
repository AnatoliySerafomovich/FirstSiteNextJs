'use client'

import clsx from "clsx"
import { useCategoryStore } from ".."

export function Line(){
    const {leftLine,widthLine} = useCategoryStore() 
    return(
        <div className="absolute h-[3px] bg-primary rounded-full duration-300 -bottom-[2px] shadow-button" 
             style={{left:leftLine,width:widthLine}}/>
    )
}