'use client'
import { SelectDine } from "@/features/SelectDine";
import { UiSpinner } from "@/shared/ui";
import { lazy, Suspense, UIEvent, useCallback, useEffect, useRef, useState } from "react";
import { Food, useFoodSkip } from "@/entities/food";
import { LoadCard } from "./LoadCard";
import { isScrolling, isSrollDown } from "../lib/helper";
const FoodCard = lazy(()=>import("./FoodCard"))
export function FoodList(){
    const [skip,setSkip] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const {data,isLoading,isFetched} = useFoodSkip(skip)  
    const [loadData,setLoadData] = useState<Food[]>([])
    useEffect(()=>{
        if(data?.total! > skip*3 && !isScrolling(ref.current!)) {
            setSkip(e=>e+=1)
        }
    },[data])
    useEffect(()=>{
        !isLoading && data!=undefined && setLoadData([...loadData,...data?.products!])
    },[isFetched])
    const onScroll = useCallback((e:UIEvent<HTMLDivElement>)=>{
        const currenEvent = e.currentTarget
        if (isSrollDown(currenEvent,0) && isFetched && (skip+1)*4<=data?.total!){
            setSkip(e=>e+1) 
        }
    },[data])
    return(
        <div className="flex flex-col gap-[22px] overflow-y-scroll pr-2" onScroll={onScroll} ref={ref}>
            <div className="flex place-content-between items-center">
                <div className="font-semibold text-[20px] text-white">Choose Dishes</div>
                <SelectDine />
            </div>
            <div className="grid grid-cols-3 gap-[70px] relative pt-[70px]">
                {loadData.map((e,id)=>(
                    <Suspense key={id} fallback={<LoadCard />}>
                        <FoodCard food={e} key={e.id}/>
                    </Suspense>
                ))}
            </div>
            {!isFetched&& (
                <div className="col-start-1 col-end-4 grid place-content-center ">
                    <UiSpinner className="max-w-10 max-h-10 h-10 w-10 text-primary "/>
                </div>
            )}
        </div>
    )
}