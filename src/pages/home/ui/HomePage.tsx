'use client'

import FoodBlock from "./FoodBlock"
import ShopCard from "./ShopCard"



export default function HomePage(){

    return(
        <div className="grid grid-cols-body w-full overflow-hidden h-screen">
            <FoodBlock />
            <ShopCard />
        </div>
    )
}