'use client'
import FoodBlock from "./ui/FoodBlock"
import ShopCard from "./ui/ShopCard"


export default function HomePage(){

    return(
        <div className="grid grid-cols-body w-full relative overflow-hidden h-screen">
            <FoodBlock />
            <ShopCard />
        </div>
    )
}