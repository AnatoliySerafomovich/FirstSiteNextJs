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
                <motion.div variants={variants} className={className} initial="hidden" whileInView={"initial"}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}