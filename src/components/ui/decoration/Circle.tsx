import { getBg,getRounded } from "@/utils/getStyle"

interface Circle{
    bg:Color,
    rounded:Rounded,
    width:number,
    heigth:number,

}
export function Circle({bg,heigth,width,rounded}:Circle){
    const Background = getBg(bg)
    const Rounded = getRounded(rounded)

    return(
        <div className={`${Background} ${Rounded} hover:opacity-20 duration-300`} style={{height:heigth,width:width}}></div>
    )
}