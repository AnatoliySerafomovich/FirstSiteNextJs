import {AnimatePresence, motion, Variants} from "framer-motion"
import { ReactNode } from "react"

interface Animate {
    children:ReactNode | ReactNode[],
    variants?:Variants,
    visible?:boolean,
    className?:string
}
export function ViewAnimate({children,variants,visible,className}:Animate){
    return(
        <AnimatePresence>
            {(visible || visible==undefined )&&(
                <motion.div variants={variants} transition={{ease:"backOut",duration:0.5}}  className={className} initial="hidden" whileInView="visible">
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}