import { RegisterOptions } from "react-hook-form"

export type LoginFields = {
    email:string,
    password:string
}
export interface fieldOptions {
    [target:string]:RegisterOptions<LoginFields>
}