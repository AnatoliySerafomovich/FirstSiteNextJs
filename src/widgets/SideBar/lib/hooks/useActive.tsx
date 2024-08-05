import { usePathname } from "next/navigation"

export function useActive(href?:string ):boolean{
    const pathname = usePathname()
    return pathname === href
}