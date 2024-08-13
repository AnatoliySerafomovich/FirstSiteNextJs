import FoodBlock from "./FoodBlock"
import ShopCard from "./ShopCard"

export default async function HomePage(){

    return(
        <div className="grid grid-cols-body w-full h-screen">
            <FoodBlock />
            <ShopCard />
        </div>
    )
}