import { create } from "zustand"
import {immer} from "zustand/middleware/immer"
import {devtools} from "zustand/middleware"

export const useDeliveryStore = create<State & Actions>()(
    devtools(
        immer((set)=>({
            delivery:"dine_in",
            setDelivery:(text) => set((state)=>{
                state.delivery=text
            }),
        }))
    )
)

type State = {
    delivery:string
}
type Actions ={
    setDelivery:(text:string)=>void,
}