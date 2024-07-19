interface Text{
    bold:Bold,
    text:string,
    color:Color,
}
export function Text({text,bold,color}:Text){
    return (
    <p className={`text-lg text-wrap break-words  text-${color} font-${bold}`}>
        {text}
    </p>    
    )
}
interface Span{
    bold:Bold,
    text:string,    
    color:Color,
    size: "sm"  
}
export function Span({size, text,bold,color}:Span){
    return (
    <p className={`text-${size} text-wrap break-words  text-${color} font-${bold}`}>
        {text}
    </p>    
    )
}
