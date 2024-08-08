'use client'
import { useDebounce } from "@/shared/lib";
import { SearchIcon, UiInputField } from "@/shared/ui";
import { useEffect, useState } from "react";
import { useSearchStore } from "./Search.model";

export function Search(){
    const [text,setText] = useState("")
    const {setText:setSearch} = useSearchStore()
    const searchText = useDebounce(text,500)
    useEffect(()=>{
        setSearch(searchText)
    },[searchText])

    return(
        <UiInputField before={<SearchIcon className="w-5 h-5 fill-[#979797] top-0 bottom-0 my-auto absolute left-3 z-10"/>} props={{className:"relative pl-10",value:text,placeholder:"Search for food, coffe, etc..",onChange:(e)=>setText(t=>t=e.target.value)}}/>
    )
}