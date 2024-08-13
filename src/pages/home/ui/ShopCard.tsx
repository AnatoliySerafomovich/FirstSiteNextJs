'use client'
import { usePopUpFoodStore } from "@/entities/food";
import { Payment } from "@/features/Payment";
import { UiPopUp, UiViewAnimate } from "@/shared/ui";
import { ListBasket } from "@/widgets/BasketList";
import { BasketPrice } from "@/widgets/BasketPrice";
import { HeaderBasket } from "@/widgets/HeaderBasket";
import { FoodPopUp } from "@/widgets/PopUpFood";
import { PopUpAnimation } from "../config/animate";

export default function ShopCard(){
    const {visible} = usePopUpFoodStore()
    return(
        <div className="bg-[#1F1D2B] grid grid-rows-basket rounded-lg h-screen p-[24px] gap-[25px] pl-5 relative z-20">
            <HeaderBasket />
            <ListBasket />
            <BasketPrice />
            <Payment />
            {visible && 
            <UiPopUp className="absolute w-screen h-screen top-0 right-[100%]">
                <UiViewAnimate visible={visible} variants={PopUpAnimation} className="top-0 right-0 absolute w-1/3 h-screen">
                    <FoodPopUp />
                </UiViewAnimate>
            </UiPopUp>}
        </div>
    )
}