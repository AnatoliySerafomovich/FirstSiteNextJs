import { usePopUpFoodStore } from "@/entities/food"
import { ClosePopup } from "@/features/close-popup-food"


export function FoodPopUp(){
    const {select} = usePopUpFoodStore()
    return(
        <div className="">
            <ClosePopup className="absolute left-5 top-5 hover:rotate-180 duration-200"/>   
        </div>
    )
}