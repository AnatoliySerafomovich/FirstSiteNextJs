'use client'
import FoodBlock from "./FoodBlock"
import ShopCard from "./ShopCard"

export default function HomePage(){

    return(
        <div className="grid grid-cols-body w-full h-screen">
            <FoodBlock />
            <ShopCard />
        </div>
    )
}