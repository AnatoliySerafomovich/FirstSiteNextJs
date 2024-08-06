export function BasketPrice(){
    return(
        <div className="p-[15   px] grid gap-[16px]">
            <div className="flex items-center place-content-between">
                <div className="text-[#ABBBC2] text-slg">Discount</div>
                <div className="text-white text-[16px] font-medium">$0</div>
            </div>
            <div className="flex items-center place-content-between">
                <div className="text-[#ABBBC2] text-lg ">Sub total</div>
                <div className="text-white text-[16px] font-medium">$0</div>
            </div>
        </div>
    )
}