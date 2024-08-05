import { Search, useSearchStore } from "@/features/Search";

export function Header(){
    const {text} = useSearchStore()
    return(
        <div className="grid grid-flow-col place-content-between content-center">
            <div className="font-semibold text-[28px] text-white">Home</div>
            <Search />
        </div>
    )
}