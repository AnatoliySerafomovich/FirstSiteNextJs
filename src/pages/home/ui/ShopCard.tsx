import { usePopUpFoodStore } from "@/entities/food";
import { Payment } from "@/features/Payment";
import { UiPopUp, UiViewAnimate } from "@/shared/ui";
import { ListBasket } from "@/widgets/BasketList";
import { BasketPrice } from "@/widgets/BasketPrice";
import { HeaderBasket } from "@/widgets/HeaderBasket";
import { FoodPopUp } from "@/widgets/PopUpFood";

export default function ShopCard(){
    const {visible,select} = usePopUpFoodStore()
    return(
        <div className="bg-[#1F1D2B] grid grid-rows-basket rounded-lg h-screen p-[24px] gap-[25px] pl-5">
            <HeaderBasket />
            <ListBasket />
            <BasketPrice />
            <Payment />
            {visible && <UiPopUp className=" top-0 left-0 w-[68%] absolute h-full z-20">
                <UiViewAnimate className="h-full" visible={visible} >
                    <div className="right-0 relative w-1/3 h-full bg-[#1F1D2B] rounded-l-[20px] p-[24px] left-[67%] border border-[#393C49]">
                        <FoodPopUp />
                    </div>
                </UiViewAnimate>
            </UiPopUp>}
        </div>
    )
}