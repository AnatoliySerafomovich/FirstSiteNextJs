import { TrashIcon } from "@/shared/ui";

export function DeleteItem(){
    return(
        <div className="border border-[#FF7CA3]  rounded-lg grid place-content-center items-center w-full h-full hover:bg-[#FF7CA3] duration-200 cursor-pointer fill-[#FF7CA3] hover:fill-white">
            <TrashIcon className=" w-[20px] h-[20px]"/>
        </div>
    )
}