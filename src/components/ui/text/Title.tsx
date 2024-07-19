import { getBold, getColorText } from "@/utils/getStyle"

export interface Title{
  text:string,
  color:Color, 
  bold: "400" | "700" | "800" | "900" ,
  shadowColor?:Color
}
export function H1({text,color,bold,shadowColor}:Title) {
  const boldText = getBold(bold)
  const colorText = getColorText(color)
  return(
    <h1 className={`text-8xl ${boldText} ${colorText} text-shadow-${shadowColor}`}>{text}</h1>
  )
}

export function H2({text,color,bold,shadowColor}:Title) {
  const boldText = getBold(bold)
  const colorText = getColorText(color)
  return(
    <h2 className={`text-[64px] ${boldText} ${colorText} text-shadow-${shadowColor}`}>{text}</h2>
  )
}
export function H3({text,color,bold,shadowColor}:Title) {
  const boldText = getBold(bold)
  const colorText = getColorText(color)
  return(
    <h3 className={`text-[62px] ${boldText} ${colorText} text-shadow-${shadowColor}`}>{text}</h3>
  )
}
export function H4({text,color,bold,shadowColor}:Title) {
  const boldText = getBold(bold)
  const colorText = getColorText(color)
  return(
    <h4 className={`text-5xl ${boldText} ${colorText} text-shadow-${shadowColor}`}>{text}</h4>
  )
}

export function H5({text,color,bold,shadowColor}:Title) {
  const boldText = getBold(bold)
  const colorText = getColorText(color)
  return(
    <h5 className={`text-[32px] ${boldText} ${colorText} text-shadow-${shadowColor}`}>{text}</h5>
  )
}

export function H6({text,color,bold,shadowColor}:Title) {
  const boldText = getBold(bold)
  const colorText = getColorText(color)
  return(
    <h6 className={`text-2xl ${boldText} ${colorText} text-shadow-${shadowColor}`}>{text}</h6>
  )
}
