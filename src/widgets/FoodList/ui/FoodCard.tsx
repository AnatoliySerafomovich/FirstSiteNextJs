'use client'
import { Food, usePopUpFoodStore} from "@/entities/food";
import { AddBasketFood } from "@/features/add-basket-food";
import { StarIcon, UiSpinner } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function FoodCard({food}:{food:Food}){
    const {setVisible,setSelect} = usePopUpFoodStore() 
    return(
        <div className="bg-[#1F1D2B] relative auto-rows-max content-end place-content-center grid p-[24px]  rounded-[16px] cursor-pointer"
            onClick={()=>{setVisible(true);setSelect(food)}}>
            <div className="h-[90px]"></div>
            <Preview src={food.images[0]} />
            <div className="text-white text-lg text-center font-medium">{food.title}</div>
            <div className="text-white text-sm text-center ">${food.price}</div>
            <Rating rate={Math.floor(food.rating)}/>
            <AddBasketFood id={food.id} className="absolute w-10 h-10 right-5 bottom-5"/>
        </div>
    )
}
function Rating({rate}:{rate:number}){
    const stars = new Array(rate).fill(0)
    return(
        <div className="flex gap-1 place-content-center">
            {stars.map((e,id)=><StarIcon className="w-7 h-7" key={id}/>)}
        </div>
    )
}
function Preview({src}:{src:string}){
    const [loading, setLoading] = useState(true)
    return(
        <>  
            {loading && <UiSpinner className="absolute w-20 h-20 left-0 right-0 m-auto top-0 bottom-[90px] text-white "/> }
            <Image onLoad={()=>setLoading(false)} src={src} alt="preview" className={clsx(loading && "opacity-0"," object-contain w-[90%] -top-[60px] left-[5%] h-[180px] absolute")} unoptimized width={100} height={100}/>
        </>
    )
}