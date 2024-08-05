import { create } from "zustand"
import {immer} from "zustand/middleware/immer"
export const useSearchStore = create<State & Actions>()(
    immer((set)=>({
        text:"",
        setText:(text)=>set((state)=>{
            state.text =text 
        })
    }))
)

type State = {
    text:string
}
type Actions ={
    setText:(text:string)=>void
}