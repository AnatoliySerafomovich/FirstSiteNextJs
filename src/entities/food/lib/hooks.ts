import { useQuery } from "@tanstack/react-query";
import { foodQuerys } from "../api/food.query";

export function useFood(){
    return useQuery(foodQuerys.list())
}
export function useFoodId(id:number){
    return  useQuery(foodQuerys.detail(id))
}
export function useFoodSkip(skip:number){
    return useQuery(foodQuerys.skips(skip))
}