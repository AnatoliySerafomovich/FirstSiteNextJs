'use client'
import { usePopUpFoodStore } from "@/entities/food";
import { BackIcon } from "@/shared/ui";
import clsx from "clsx";

export function ClosePopup({className}:{className?:string}){
    const {setVisible} = usePopUpFoodStore()
    return(
        <div className={clsx(className,"peer")} onClick={()=>setVisible(false)}>
            <BackIcon className="text-white w-[30px] h-[20px] cursor-pointer stroke-[#3B5162] duration-200  hover:stroke-white" />
        </div>
    )
}