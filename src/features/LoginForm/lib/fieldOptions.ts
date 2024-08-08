import { fieldOptions } from "./types";

export const options:fieldOptions ={
    "email":{required:{message:"please write",value:true},minLength:{message:"Min password 12 symbols",value:12},maxLength:{message:"Max password 36 symbols",value:36}},
    "password":{required:{message:"please write",value:true},minLength:{message:"Min password 12 symbols",value:12},maxLength:{message:"Max password 36 symbols",value:36}},
}