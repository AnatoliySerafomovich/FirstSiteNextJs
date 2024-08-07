import { create } from "zustand"
import {immer} from "zustand/middleware/immer"
import {devtools} from "zustand/middleware"
import { Food } from "../lib/types"

export const usePopUpFoodStore = create<State & Actions>()(
    devtools(
        immer((set)=>({
            visible:false,
            select:undefined,
            setSelect:(food) => set((state)=>{
                state.select=food
            }),
            setVisible:(visible) => set((state)=>{
                state.visible=visible
            }),
        }))
    )
)

type State = {
    select?:Food,
    visible:boolean
}
type Actions ={
    setSelect:(food:Food)=>void,
    setVisible:(visible:boolean)=>void,
}