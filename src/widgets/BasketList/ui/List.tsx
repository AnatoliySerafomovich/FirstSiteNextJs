'use client'
import { useFood } from "@/entities/food"
import { UiPageSpinner } from "@/shared/ui"
import { LoadItem } from "./LoadItem"
import { lazy, Suspense } from "react"
const Item = lazy(()=>import("./Item"))

export function ListBasket(){
    const {data,isLoading, isError} = useFood()
    return(
        <div className="grid auto-rows-max gap-[25px] border-b border-[#393C49] overflow-y-scroll h-full relative">
            <div className="grid grid-cols-basketItem gap-[43px] pb-[25px] border-b border-[#393C49] ">
                <div className="text-[16px] text-white font-semibold">Item</div>
                <div className="text-[16px] text-white font-semibold">Qte</div>
                <div className="text-[16px] text-white font-semibold">Price</div>
            </div>
            <div className="relative grid gap-[25px]">
            {isLoading ? <UiPageSpinner className="py-2 bg-transparent"/> : data ? data.products.map(e=><Suspense fallback={<LoadItem />} key={e.id}><Item item={e} key={e.id}/></Suspense>) : <div className="text-lg text-white font-semibold">Not Found</div>}
            </div>
        </div>
    )
}