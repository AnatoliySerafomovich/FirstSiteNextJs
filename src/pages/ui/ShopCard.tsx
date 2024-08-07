import { Payment } from "@/features/Payment";
import { UiPopUp } from "@/shared/ui";
import { ListBasket } from "@/widgets/BasketList";
import { BasketPrice } from "@/widgets/BasketPrice";
import { HeaderBasket } from "@/widgets/HeaderBasket";

export default function ShopCard(){
    return(
        <div className="bg-[#1F1D2B] grid grid-rows-basket rounded-lg h-screen p-[24px] gap-[25px] pl-5">
            <HeaderBasket />
            <ListBasket />
            <BasketPrice />
            <Payment />
            {/* <UiPopUp className=" top-0 z-40 left-0 w-[68%] ">
                <div className="right-0 relative w-1/3 h-full bg-[#1F1D2B] rounded-l-[20px] p-[24px] left-[67%] border border-[#393C49]">
                
                </div>
            </UiPopUp> */}
        </div>
    )
}