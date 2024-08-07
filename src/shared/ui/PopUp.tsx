import clsx from "clsx";
import { ReactNode } from "react";

export function PopUp({className,children}:{className:string,children?:ReactNode}){
    return(
        <div className={clsx(className,"w-full h-full absolute backdrop-brightness-[.3]")}>{children}</div>
    )
}