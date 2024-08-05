import {queryOptions} from "@tanstack/react-query"
import { getFood, getFoodById, getFoodBySkip } from "./get-food"

export const foodQuerys = {
    all: () => ["food"],
    lists:()=>[...foodQuerys.all(),"list"],
    list:()=>queryOptions({
        queryKey:[...foodQuerys.lists()],
        queryFn:()=>getFood(),
        select(data) {
            return data.data
        },
    }),
    details:(id:number)=>[...foodQuerys.all(),id],
    detail:(id:number)=>queryOptions({
        queryKey:[...foodQuerys.details(id)],
        queryFn:()=>getFoodById(id),
        select(data) {
            return data.data
        },
    }),
    skip:(skip:number)=>[...foodQuerys.all(),skip],
    skips:(skip:number)=>queryOptions({
        queryKey:[...foodQuerys.skip(skip)],
        queryFn:()=>getFoodBySkip(skip),
        select(data) {
            return data.data
        },
    }),
}