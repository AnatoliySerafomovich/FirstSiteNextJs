import { getBg } from "@/utils/getStyle";
import { Text } from "./Desk";
import { H1, H2, H3, H4, H5, H6, Title } from "./Title";

interface TextWithDecoration extends Title{
    decorationBg:Color,
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "base" 
}
export function TextWithDecoration({bold,color,decorationBg,size,text,shadowColor}:TextWithDecoration){
    const bg = getBg(decorationBg)
    return(
        <div className="relative">
            <div className="relative z-10">
            {{
                "h1"  :(<H1   bold={bold} color={color} text={text} shadowColor={shadowColor}/>),
                "h2"  :(<H2   bold={bold} color={color} text={text} shadowColor={shadowColor}/>),
                "h3"  :(<H3   bold={bold} color={color} text={text} shadowColor={shadowColor}/>),
                "h4"  :(<H4   bold={bold} color={color} text={text} shadowColor={shadowColor}/>),
                "h5"  :(<H5   bold={bold} color={color} text={text} shadowColor={shadowColor}/>),
                "h6"  :(<H6   bold={bold} color={color} text={text} shadowColor={shadowColor}/>),
                "base":(<Text bold={bold} color={color} text={text} />),
            }[size]}
            </div>
            <div className={`absolute top-2/3 -left-[10%] w-[120%] h-1/2 rounded-full ${bg}`}></div>
        </div>
    )
}