import { ReactNode } from "react";

export function LoginFormLayout({children}:{children:ReactNode[] | ReactNode}){
    return(
        <div className="flex justify-center items-center w-full ">
            <div className="w-1/4 h-1/4 ">
                {children}
            </div>
        </div> 
    )
}