import { LogoutIcon } from "@/shared/ui";
import { signOut } from "next-auth/react";

export function Logout(){
    return (
        <div className="cursor-pointer place-items-center p-[21px]" onClick={()=>signOut()}>
            <LogoutIcon className="w-5 h-5 fill-primary place-content-center"/>
        </div>
    )
}