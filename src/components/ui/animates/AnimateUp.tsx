import { motion} from "framer-motion"
import { ReactNode } from "react"

interface AnimateUp{
    children?:ReactNode | ReactNode[],
    delay:number,
    duration:number
}
const animates = {
    hidden:{
        opacity:0,
        y:200,
    },
    initial:{
        opacity:1,
        y:0,    
    }
}
export function AnimateUp({children,delay,duration}:AnimateUp){
    return(
        <motion.div viewport={{once:true}} custom={delay} whileInView="initial" initial="hidden" variants={animates} transition={{ ease: "backOut",duration:duration, delay:delay }}> 
            {children}
        </motion.div>
    )
}