'use client'
import { Food } from "@/entities/food";
import { DeleteBasketItem } from "@/features/BasketDeleteItem";
import { UiInputField, UiSpinner } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Item({item}:{item:Food}){
    return(
        <div className="grid grid-cols-basketItem grid-rows-2 items-center gap-x-[45px] gap-y-[10px] place-content-center">
            <div className="flex gap-1 items-center">
                <Preview src={item.images[0]}/>
                <div className="flex flex-col gap-1">
                    <div className="text-lg text-white font-medium">{item.title}</div>
                    <div className="text-[#ABBBC2] text-sm   font-medium">${item.price}</div>
                </div>
            </div>
            <div className="bg-[#2D303E] py-[10px] px-[20px] rounded-lg grid place-content-center items-center font-medium text-[16px] text-white border border-[#393C49]">
                1
            </div>
            <div className="font-medium text-[16px] text-white">
                ${item.price}
            </div>
            <div className="col-start-1 col-end-3 h-full">
                <UiInputField placeholder="Please, just a little bit spicy only." about="" className="w-full h-full text-lg"/>
            </div>
            <DeleteBasketItem />
        </div>
    )
}
function Preview({src}:{src:string}){
    const [load,setLoad] = useState(true)
    return(
        <>
            {load && <UiSpinner className="text-white w-[50px] h-[50px]"/>}
            <Image alt="" unoptimized className={clsx(load && "opacity-0","rounded-full  w-[60px] h-[50px] object-contain")} width={60} height={60} src={src} onLoad={()=>setLoad(false)} />
        </>
    )
}