import { BasketIcon } from "@/shared/ui";
import clsx from "clsx";

export function AddBasketFood({id,className}:{id:number,className?:string}){
    return(
        <div onClick={(e)=>{e.stopPropagation()}} className={clsx(className,"p-2 bg-primary rounded-lg shadow-button cursor-pointer hover:brightness-50 duration-200")}>
            <BasketIcon className="w-full h-full text-white"/>
        </div>
    )
}