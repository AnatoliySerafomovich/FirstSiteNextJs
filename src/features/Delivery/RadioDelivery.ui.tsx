'use client'

import { UiRadioField } from "@/shared/ui";
import { useDeliveryStore } from "./Delivery.model";

export function RadioDelivery({value,label}:{value:string,label:string}){
    const {setDelivery,delivery} = useDeliveryStore()
    return <UiRadioField defaultChecked={delivery==value} name="delivery" onClick={()=>setDelivery(value)} placeholder={label} value={value}/>
}
