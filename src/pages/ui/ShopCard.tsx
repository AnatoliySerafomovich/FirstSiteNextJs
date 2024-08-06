import { Payment } from "@/features/Payment";
import { ListBasket } from "@/widgets/BasketList";
import { BasketPrice } from "@/widgets/BasketPrice";
import { HeaderBasket } from "@/widgets/HeaderBasket";

export default function ShopCard(){
    return(
        <div className="bg-[#1F1D2B] grid grid-rows-basket rounded-lg h-screen p-[24px] gap-[25px]">
            <HeaderBasket />
            <ListBasket />
            <BasketPrice />
            <Payment />
        </div>
    )
}