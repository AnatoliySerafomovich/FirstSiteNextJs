import { ReactNode } from "react";

export function Wrapper({children}:{children:ReactNode}) {
  return(
    <div className="grid grid-cols-wrapper ">
      <div className="col-start-2 col-end-3 ">
        {children}
      </div>
    </div>
  )
}