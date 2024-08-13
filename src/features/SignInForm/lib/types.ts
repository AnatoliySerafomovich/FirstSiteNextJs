import { RegisterOptions } from "react-hook-form"

export type SignInFields = {
    email:string,
    password:string
}
export interface fieldOptions {
    [target:string]:RegisterOptions<SignInFields>
}