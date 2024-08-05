import clsx from "clsx"
import { CategorySelectType } from "../model/types"
import { useCategoryStore } from ".."
import {  memo, MouseEvent,useCallback } from "react"



export const CategorySelect = memo(function CategorySelect({category,label}:CategorySelectType){
    const {setCategory,setLine, category:CurrentCategory} = useCategoryStore()
    const isCurrent = category == CurrentCategory
    const onClick = useCallback((e:MouseEvent<HTMLDivElement>)=>{
        setCategory(category)
        setLine(`${e.currentTarget.offsetLeft}px`,`${e.currentTarget.clientWidth*0.7}px`)
    },[])
    return(
        <div onClick={onClick} className={clsx("duration-300 font-semibold text-sm cursor-pointer",isCurrent ? "text-primary" : "text-white")}>
            {label}
        </div>
    )
})