import { ReactNode } from "react"

interface ImageGrid{
    children:ReactNode | ReactNode[]
}
export function ImageGrid({children}:ImageGrid){
    return(
        <div className="grid gap-8 overflow-hidden relative z-10 place-content-center"
            style={{gridTemplateColumns:"repeat(12,minmax(auto,60px))",gridTemplateRows:"repeat(8,minmax(auto,70px))"}}>
            {children}
        </div>
    )
}