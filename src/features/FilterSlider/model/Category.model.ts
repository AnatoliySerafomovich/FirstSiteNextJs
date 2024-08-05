import { create } from "zustand"
import {immer} from "zustand/middleware/immer"
import {devtools} from "zustand/middleware"
import { Category } from "./types"
export const useCategoryStore = create<State & Actions>()(
    devtools(
        immer((set)=>({
            category:"hot_dishes",
            setCategory:(text)=>set((state)=>{
                state.category =text 
            }),
            widthLine:"40px",
            leftLine:"0px",
            setLine:(x,width) => set((state)=>{
                state.leftLine = x
                state.widthLine = width
            }),
        }))
    )
)

type State = {
    category:Category,
    leftLine:string,
    widthLine:string,
}
type Actions ={
    setCategory:(text:Category)=>void,
    setLine:(x:string,width:string)=>void,

}