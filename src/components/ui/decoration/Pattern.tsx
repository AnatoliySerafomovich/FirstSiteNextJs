'use client'
import { MouseEvent, useEffect, useRef, useState } from "react"
import { Circle } from "./Circle"

interface Pattern{
    cols:number,
    rows:number,
    bgCircle:Color,
    gap:number,
    rotate:number,
    roundedCircle:Rounded,
    widthCircle:number,
    heigthCircle:number,
    x:number,
    y:number,
}
export function Pattern({bgCircle,cols,gap,rotate,rows,heigthCircle,roundedCircle,widthCircle,x,y}:Pattern){
    const ArrayFill = new Array(cols*rows).fill(0)

    return(
        <div className="grid absolute" style={{gap:gap,gridTemplateRows:`repeat(${rows},${heigthCircle}px)`,gridTemplateColumns:`repeat(${cols},${widthCircle}px)`,rotate:`${rotate}deg`,left:x+"px",top:y+"px"}} >
            {ArrayFill.map((e,id)=><Circle bg={bgCircle} heigth={heigthCircle} rounded={roundedCircle} width={widthCircle} key={id}/>)}
        </div>
    )
}