import { usePopUpFoodStore } from "@/entities/food";
import { BackIcon } from "@/shared/ui";

export function ClosePopup({className}:{className?:string}){
    const {setVisible} = usePopUpFoodStore()
    return(
        <div className={className} onClick={()=>setVisible(false)}>
            <BackIcon className="text-white w-[30px] h-[20px] cursor-pointer"/>
        </div>
    )
}