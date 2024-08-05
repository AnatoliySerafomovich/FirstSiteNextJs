import { axiosClient } from "@/shared/api";
import { Root } from "../lib/types";

export function getFood(){
    return axiosClient.get<Root>(`/products/category/groceries`)
}
export function getFoodBySkip(skip:number){
    return axiosClient.get<Root>(`/products/category/groceries?skip=${skip*4}&limit=4`)
}
export function getFoodById(id:number){
    return axiosClient.get<Root>(`/products/${id}`)
}