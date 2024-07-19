'use client'
import { getBg, getRounded } from "@/utils/getStyle"

interface Rect{
    width:number,
    heigth:number,
    bg:Color,
    rounded:Rounded,
    rotate:number,
    x:string,
    y:string,
}
export default function Rect({bg,heigth,rounded,width,rotate,x,y}:Rect){
    const Background = getBg(bg)
    const Rounded = getRounded(rounded)
    return(
        <div className={`${Background} ${Rounded} absolute`} style={{rotate:`${rotate}deg`,height:heigth,width:width,left:x,top:y}}></div>
    )
}