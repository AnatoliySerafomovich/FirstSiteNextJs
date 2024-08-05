import { ReactNode } from "react"
import "./style/body.scss"
import { Provider } from "./Providers/Provider"
import QueryProvider from "./Providers/QueryProvider"
import { Barlow } from "next/font/google";

const font = Barlow({ subsets: ["latin"] ,weight:["700","600","500","400","300"]});

export default function App({children}:{children:ReactNode}){
    return(
        <div className={`${font}`}>
            <Provider>
                <QueryProvider>
                    {children}
                </QueryProvider>
            </Provider>
        </div>
    )
}