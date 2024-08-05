import { CategorySlider } from "@/features/FilterSlider";
import { FoodList } from "@/widgets/FoodList";
import { HomeHeader } from "@/widgets/HeaderHome";

export default function FoodBlock(){
    return(
        <div className="bg-[#252836] p-[24px] gap-[24px] flex flex-col h-screen">
            <HomeHeader />
            <CategorySlider />
            <FoodList />
        </div>
    )
}