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
    },
    initial:{
        opacity:1,
    }
}
export function AnimateOpacity({children,delay,duration}:AnimateUp){
    return(
        <motion.div viewport={{once:true,amount:1}} custom={delay} whileInView="initial" initial="hidden" variants={animates} transition={{ ease: "linear",duration:duration, delay:delay }}> 
            {children}
        </motion.div>
    )
}