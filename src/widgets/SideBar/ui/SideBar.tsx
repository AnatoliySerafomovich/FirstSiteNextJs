'use client'
import { DiscountIcon, GraphIcon, HomeIcon, LoginIcon, LogoutIcon, MessageIcon, NotificationIcon, SettingIcon, UiLogo, UiSpinner } from "@/shared/ui";
import { SideLink } from "./SideLink";
import { useSession } from "next-auth/react";
import { Logout } from "@/features/logout";

export function SideBar(){
    const user = useSession()
    return(
        <div className="grid auto-rows-max gap-[10px] py-[12px] pl-5  bg-[#1F1D2B] rounded-r-[16px] h-screen overflow-hidden">
            <UiLogo />
            <SideLink href="/">
                <HomeIcon className="w-5 h-5"/>
            </SideLink>
            <SideLink href="/home12">
                <DiscountIcon className="w-5 h-5"/>
            </SideLink>
            <SideLink href="/home2">
                <GraphIcon className="w-5 h-5"/>
            </SideLink>
            <SideLink href="/home3">
                <MessageIcon className="w-5 h-5"/>
            </SideLink>
            <SideLink href="/home4">
                <NotificationIcon className="w-5 h-5"/>
            </SideLink>
            <SideLink href="/home5">
                <SettingIcon className="w-5 h-5"/>
            </SideLink>
            {{
                "authenticated":(<Logout />), 
                "unauthenticated":(<SideLink href="/login">
                                    <LoginIcon className="w-5 h-5"/>
                                   </SideLink>), 
                "loading":(
                    <div className="p-[21px]">
                        <UiSpinner className="w-5 h-5 text-primary"/>
                    </div>
                )
            }[user.status]}
        </div>
    )
}