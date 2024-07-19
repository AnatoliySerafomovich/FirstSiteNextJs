import { getAlign } from "@/utils/getStyle"
import { ReactNode } from "react"
import { AnimateUp } from "../animates/AnimateUp"
import { AnimateOpacity } from "../animates/AnimateOpacity"

interface TextCard{
    align:Align,
    children?:ReactNode | ReactNode[] ,
    startX:number,
    startY:number,
    endX:number,
    endY:number,

}
export function TextCard({align,children,endX,endY,startX,startY}:TextCard){
    const Align = getAlign(align)
    return(
        <div className={`grid ${Align}`} style={{gridColumnStart:startX,gridColumnEnd:endX,gridRowStart:startY,gridRowEnd:endY}}>
                {children}
        </div>
    )
}