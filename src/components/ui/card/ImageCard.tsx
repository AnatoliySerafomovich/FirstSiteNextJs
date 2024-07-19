'use client'
import { getAlign } from "@/utils/getStyle"
import Image from "next/image"
import { ReactNode } from "react"
import { AnimateUp } from "../animates/AnimateUp"
import { AnimateOpacity } from "../animates/AnimateOpacity"

interface ImageCard{
    textAlign: Align,
    children?:ReactNode | ReactNode[] ,
    image:string,
    startX:number,
    startY:number,
    endX:number,
    endY:number,

}
export default function ImageCard({textAlign,children,endX,image,endY,startX,startY}:ImageCard){
    const align = getAlign(textAlign)
    
    return(
        <div className={`${align} relative grid text-center p-2`} style={{gridColumnStart:startX,gridColumnEnd:endX,gridRowStart:startY,gridRowEnd:endY}}>
                <div className="relative z-20">
                    {children}
                </div>
                <Image alt="" fill src={image}  className="absolute object-cover rounded-[20px]" />
        </div>
    )
}