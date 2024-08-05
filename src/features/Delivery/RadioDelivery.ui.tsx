import { UiRadioField } from "@/shared/ui";
import { useDeliveryStore } from "./Delivery.model";

export function RadioDelivery({value,label}:{value:string,label:string}){
    const {setDelivery,delivery} = useDeliveryStore()
    return <UiRadioField checked={delivery==value} onClick={()=>setDelivery(value)} placeholder={label} value={value}/>
}
