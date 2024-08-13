import { UseFormSetError } from "react-hook-form";
import { LoginFields } from "./types";

export function checkPassword(text?:string){
    let result = 0
    const test1 = /\d/g
    const test2 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    test1.test(text!) && result++
    test2.test(text!) && result++
    text != text?.toLowerCase() && result++
    return result
}