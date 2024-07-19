export function getBg(color:Color){
    return {
        "none"      :"bg-none",
        "black"     :"bg-black",
        "purple"    :"bg-purple",
        "gray"      :"bg-gray",
        "yellow"    :"bg-yellow",
        "graysoft"  :"bg-graysoft",
        "yellowdark":"bg-yellowdark",
        "white"     :"bg-white",
        "pink"      :"bg-pink",
        "green"     :"bg-green",
        "blue"      :"bg-blue",
    }[color]
}
export function getBorder(color:Color){
    return {
        "black"     :"border-black",
        "white"     :"border-white",
        "yellow"    :"border-yellow",
        "yellowdark":"border-yellowdark",
        "purple"    :"border-purple",
        "graysoft"  :"border-graysoft",
        "gray"      :"border-gray",
        "pink"      :"border-pink",
        "green"     :"border-green",
        "blue"      :"border-blue",
    }[color]
}
export function getColorText(color:Color){
    return {
        "none"      :"text-none",
        "black"     :"text-black",
        "purple"    :"text-purple",
        "gray"      :"text-gray",
        "yellow"    :"text-yellow",
        "graysoft"  :"text-graysoft",
        "yellowdark":"text-yellowdark",
        "white"     :"text-white",
        "pink"      :"text-pink",
        "green"     :"text-green",
        "blue"      :"text-blue",
    }[color]
}
export function getBold(bold:Bold){
    return {
        "400"      :"font-400",
        "700"      :"font-700",
        "800"      :"font-800",
        "900"      :"font-900",
    }[bold]
}
export function getRounded(rounded:Rounded){
    return {
        "none"      :"rounded-none",
        "sm"        :"rounded-sm",
        "md"        :"rounded-md",
        "lg"        :"rounded-lg",
        "full"      :"rounded-full",
    }[rounded]
}
export function getAlign(align:Align){
    return {
        "start":"items-start",
        "center":"items-center",
        "end":"items-end"
    }[align]
}
