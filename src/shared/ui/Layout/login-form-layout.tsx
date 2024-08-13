import { ReactNode } from "react";

export function LoginFormLayout({children}:{children:ReactNode[] | ReactNode}){
    return(
        <div className="flex xl:items-start xl:py-10 justify-center items-center w-full ">
            <div className="xl:w-1/4 lg:w-1/3 md:w-[50%] sm:w-[90%]  h-1/4 ">
                {children}
            </div>
        </div> 
    )
}