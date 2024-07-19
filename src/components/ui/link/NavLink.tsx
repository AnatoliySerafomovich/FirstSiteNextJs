"use client"
import { getColorText } from "@/utils/getStyle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Router } from "next/router";

interface NavLink{
    text:string,
    color:Color,
    colorActive:Color,
    href:string
}
export function NavLink({color,colorActive,text,href}:NavLink){
    const pathname = usePathname()
    const Color = getColorText(color)
    const ColorActive = getColorText(colorActive)
    const isOpen = pathname == href
    return(
        <Link   className = {{"true" :`text-lg font-700 ${ColorActive}`,
                              "false":`text-lg font-400 ${Color}`}
                            [`${isOpen}`]} 
                href={href}>
            {text}
        </Link>
    )
}