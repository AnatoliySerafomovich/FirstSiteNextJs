
import { UiLoadText} from "@/shared/ui";
import Image from "next/image";

export function LoadItem(){
    return(
        <div className="grid grid-cols-basketItem grid-rows-2 items-center gap-x-[45px] gap-y-[10px] place-content-center animate-pulse">
            <div className="flex gap-1 items-center w-full h-full">
                <div className="col-start-1 col-end-3 h-[50px] w-[60px] bg-[#2D303E] rounded-lg "></div>
                <div className="flex flex-col gap-1 w-full h-full">
                    <UiLoadText className="bg-[#2D303E] w-1/2 h-full p-2"/>
                    <UiLoadText className="bg-[#2D303E] w-1/2 h-full p-2"/>
                </div>
            </div>
            <div className="bg-[#2D303E] py-[10px] px-[20px] rounded-lg h-full">
            </div>
            <UiLoadText className="rounded-lg bg-[#2D303E]"/>
            <div className="col-start-1 col-end-3 h-full bg-[#2D303E] rounded-lg"></div>
            <div className="rounded-lg bg-[#2D303E] w-full h-full "></div>
        </div>
    )
}