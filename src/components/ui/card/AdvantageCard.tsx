import { getBg } from "@/utils/getStyle";
import Image from "next/image";
import { H6 } from "../text/Title";
import { Text } from "../text/Desk";
import { BorderButton } from "../button/Button";

interface AdvantageCard{
    title:string,
    desk:string,
    icon:string,
    bg_icon:Color
}
export function AdvantageCard({desk,icon,title,bg_icon}:AdvantageCard){
    const bg = getBg(bg_icon)
    return (
        <div className="flex flex-col items-start gap-2 auto-cols-max">
            <div className={`${bg} p-[20px] rounded-full`}><Image alt="" src={icon} width={30} height={30} /></div>
            <H6 bold="700" color="black" text={title}/>
            <Text bold="400" color="black" text={desk} />
            <BorderButton  boldText="700" colorBg="gray" colorText="purple" rounded="lg" text="Learn more" title="base"/>
        </div>
    )
}