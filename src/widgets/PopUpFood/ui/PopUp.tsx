'use client'
import { usePopUpFoodStore } from "@/entities/food"
import { ClosePopup } from "@/features/close-popup-food"
import { StarIcon, UiSpinner } from "@/shared/ui"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"
import { Comment } from "./Comment"
import { AddBasketFood } from "@/features/add-basket-food"


export function FoodPopUp(){
    const {select} = usePopUpFoodStore()
    return(
        <div className="overflow-y-scroll overflow-x-hidden rounded-l-[20px] gap-2 grid auto-rows-max  relative p-10 py-5 border-r border-[#393C49] h-full w-full bg-[#1F1D2B]">
            <div className="flex justify-between place-items">
                <ClosePopup className="w-10 h-10 place-content-center"/>
                <AddBasketFood id={select?.id!} className="w-10 h-10"/>
            </div>
            <Preview src={select?.images[0]}/>
            <div className="text-5xl text-white font-semibold">{select?.title}</div>
            <div className="flex gap-2 items-center text-white text-2xl">{select?.rating}/5 <StarIcon className="w-8 h-8"/></div>
            <div className="text-white text-lg font-medium">{select?.description}</div>
            <div className="text-white text-lg">{select?.warrantyInformation}</div>
            <div className="flex flex-col gap-2 ">
                {select?.reviews.map((e,id)=>(<Comment comment={e} key={id}/>))}
            </div>
        </div>
    )
}
function Preview({src}:{src?:string}){
    const [load,setLoad] = useState(true)
    return(
        <>
            {load && <UiSpinner className="w-1/2 h-1/2 text-primary"/>}
            <Image alt="" onLoad={()=>setLoad(false)} src={src!} unoptimized={true} className={clsx(load &&"opacity-0","object-contain")} width={500} height={500}/>
        </>
    )
}