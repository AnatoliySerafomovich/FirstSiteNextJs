import { getBg, getBorder, getRounded } from "@/utils/getStyle"
import { H1, H2, H3, H4, H5, H6 } from "../text/Title"
import { Text } from "../text/Desk"

interface Button{
    colorText:Color,
    text:string,
    boldText: Bold 
    title: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "base",
    colorBg:Color,
    rounded:Rounded,
    fill? :boolean,
    shadowColor?: Color
}
export function Button({boldText,text,colorBg,colorText,rounded,title,fill,shadowColor}:Button){
    const bg = getBg(colorBg)   
    const roundedBtn = getRounded(rounded) 
    return (
        <button className={`${bg} ${roundedBtn} border-none text-center ${fill ? "w-full h-full" : "p-2 px-5"}`} >
            {{   
                "h1"    : (<H1   bold={boldText} text={text} color={colorText} shadowColor={shadowColor}/>),
                "h2"    : (<H2   bold={boldText} text={text} color={colorText} shadowColor={shadowColor}/>),
                "h3"    : (<H3   bold={boldText} text={text} color={colorText} shadowColor={shadowColor}/>),
                "h4"    : (<H4   bold={boldText} text={text} color={colorText} shadowColor={shadowColor}/>),
                "h5"    : (<H5   bold={boldText} text={text} color={colorText} shadowColor={shadowColor}/>),
                "h6"    : (<H6   bold={boldText} text={text} color={colorText} shadowColor={shadowColor}/>),
                "base"  : (<Text bold={boldText} text={text} color={colorText}/>),
            }[title]}
        </button>
    )
}
export function BorderButton({boldText,text,colorBg,colorText,rounded,title,fill,shadowColor}:Button){
    const border = getBorder(colorBg)   
    const roundedBtn = getRounded(rounded) 
    return (
        <button className={`${border} ${roundedBtn}  border bg-opacity-0 text-center ${fill ? "w-full h-full" : "p-2 px-5 "}`}>
            {{
                "h1" : (<H1 bold={boldText} text={text} color={colorText} shadowColor={shadowColor} />),
                "h2" : (<H2 bold={boldText} text={text} color={colorText} shadowColor={shadowColor} />),
                "h3" : (<H3 bold={boldText} text={text} color={colorText} shadowColor={shadowColor} />),
                "h4" : (<H4 bold={boldText} text={text} color={colorText} shadowColor={shadowColor} />),
                "h5" : (<H5 bold={boldText} text={text} color={colorText} shadowColor={shadowColor} />),
                "h6" : (<H6 bold={boldText} text={text} color={colorText} shadowColor={shadowColor} />),
                "base"  : (<Text bold={boldText} text={text} color={colorText} />),
            }[title]}
        </button>
    )
}