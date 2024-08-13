import { Search } from "@/features/Search";

export async function Header(){
    return(
        <div className="grid grid-flow-col place-content-between content-center">
            <div className="font-semibold text-[28px] text-white">Home</div>
            <Search/>
        </div>
    )
}