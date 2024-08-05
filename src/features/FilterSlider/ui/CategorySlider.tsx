import { CategorySelect } from "./CategorySelect";
import { Line } from "./Line";

export function CategorySlider(){
    return(
        <div className="flex gap-5 border-b border-[#393C49] relative pb-[13px]">
            <CategorySelect  label="Hot Dishes" category="hot_dishes"/>
            <CategorySelect  label="Cold Dishes" category="cold_dishes"/>
            <CategorySelect  label="Soup" category="soup"/>
            <CategorySelect  label="Grill" category="grill"/>
            <CategorySelect  label="Appetizer" category="appetizer"/>
            <CategorySelect  label="Dessert" category="dessert"/>
            <Line />
        </div>
    )
}