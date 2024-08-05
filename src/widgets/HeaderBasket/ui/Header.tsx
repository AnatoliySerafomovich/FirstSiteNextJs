import { RadioDelivery } from "@/features/Delivery";

export function Header(){
    return (
        <div className="grid gap-[24px]">
            <div className="text-[20px] text-white font-semibold">Orders</div>
            <div className="flex gap-2 items-center">
                <RadioDelivery label="Dine In" value="dine_in" />
                <RadioDelivery label="To Go" value="dine_in2" />
                <RadioDelivery label="Delivery" value="dine_in3" />
            </div>
        </div>
    )
}