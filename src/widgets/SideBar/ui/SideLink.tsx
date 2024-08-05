'use client'
import clsx from "clsx"
import Link from "next/link"
import {  ReactNode } from "react"
import { useActive } from "../lib/hooks/useActive"

type SideLink = {
    href:string,
    className?:string,
    children?: ReactNode | ReactNode[]
}

export function SideLink({href,children}:SideLink){
    const active = useActive(href)
    return(
    <div className={clsx(active && "bg-[#252836] before:absolute before:w-5 before:h-5 before:bg-[#1F1D2B] before:right-0 before:-top-5 before:rounded-br-[20px] before:shadow-topLink  after:absolute after:w-5 after:h-5 after:bg-[#1F1D2B] after:right-0 after:-bottom-5 after:rounded-tr-[20px] after:shadow-bottomLink","rounded-l-[12px] py-[8px] px-[8px] flex relative")}>
        <Link href={href}  className={clsx(active ? "bg-primary fill-white" : "fill-primary","rounded-lg p-[13px]")}>
            {children}
        </Link>
    </div>
    )
}