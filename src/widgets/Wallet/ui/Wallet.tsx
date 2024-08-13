'use client'

import { useSession } from "next-auth/react"

export function Wallet(){
   const user =useSession()
    return(
        <div className="place-content-center text-3xl text-primary font-semibold">
        </div>
    )
}