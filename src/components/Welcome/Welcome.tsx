'use client'
import { MouseEvent, useEffect, useState } from "react"
import { AnimateUp } from "../ui/animates/AnimateUp"
import { Button } from "../ui/button/Button"
import ImageCard from "../ui/card/ImageCard"
import { TextCard } from "../ui/card/TextCard"
import { Pattern } from "../ui/decoration/Pattern"
import Rect from "../ui/decoration/Rect"
import { ImageGrid } from "../ui/grid/ImageGrid"
import { Span, Text } from "../ui/text/Desk"
import { TextWithDecoration } from "../ui/text/TextWithDecoration"
import { H1, H2, H4, H5 } from "../ui/text/Title"

export default function Welcome(){
    return(
        <div className="relative grid pt-16 gap-16">
            <Decoration />
            <Title/>
            <Gallery />
        </div>
    )
}

function Gallery(){
    return(
        <ImageGrid> 
            <TextCard align="start" startX={1} startY={1} endX={4} endY={2} >
                <Text bold="400" color="black" text="This is multipurpose grid, it fits for portfolio, services or agency web site"/>
            </TextCard>
            <ImageCard image="/card/1.png" textAlign="end" startX={4} startY={1} endX={9} endY={5}>
                <H5 bold="700" color="white" text="Consider it done!" shadowColor="black"/>
            </ImageCard>
            <TextCard align="end" startX={9} startY={1} endX={13} endY={3} >
                <Text bold="400" color="black" text="This is multipurpose grid, it fits for portfolio, services or agency web site"/>
            </TextCard>
            <ImageCard image="/card/2.png" textAlign="start" startX={1} startY={2} endX={4} endY={7}>
                <div className="pt-10   ">
                    <Text bold="700" color="white" text="We aimed to deliver HQ templates for Figma"/>
                    <Span size="sm" bold="400" color="white" text="Used by 123 people"/>
                </div>
            </ImageCard>
            <ImageCard startX={9}  startY={3} endX={11} endY={5} image="/card/5.png" textAlign="start"></ImageCard>
            <ImageCard startX={11}   startY={3} endX={13} endY={5} image="/card/4.png" textAlign="start"></ImageCard>
            <TextCard align="start" startX={1} startY={7} endX={4} endY={7} >
                <Button fill boldText="700" colorBg="purple" colorText="white" rounded="full" text="Learn more" title="h6"/>
            </TextCard>
            <ImageCard startX={4}   startY={5} endX={7} endY={8} image="/card/3.png" textAlign="start"></ImageCard>
            <ImageCard startX={7}   startY={5} endX={11} endY={9} image="/card/6.png" textAlign="start">
                <H5 bold="700" color="white" text="See my goal?" shadowColor="black"/>
            </ImageCard>
            <ImageCard startX={11}   startY={5} endX={13} endY={7} image="/card/7.png" textAlign="start"></ImageCard>
        </ImageGrid>
    )
}

function Decoration(){
    const [x,setX] = useState(window.innerWidth/2)
    const [y,setY] = useState(0)
    useEffect(()=>{
        document.addEventListener("mousemove",OnMoveMouse)
        return()=>{
            document.removeEventListener("mousemove",OnMoveMouse)
        }
    })
    const OnMoveMouse = (e:MouseEvent<HTMLDivElement>)=>{
        setX(window.innerWidth/2 -(0.1*e.pageX))
        setY(0.1*e.pageY)
    }
    return(
    <div className="absolute " style={{left:x,top:y}}>
        <Rect    x="0px"   y="0px"  bg="yellow"     heigth={600}  rounded="lg"    width={600}    rotate={45}    />
        <Pattern x={500}   y={220} bgCircle="yellowdark" cols={6} gap={20} heigthCircle={10} rotate={45} roundedCircle="full" rows={6} widthCircle={10}/>
    </div>
    )
}
function Title(){
    return (
        <div className="text-center relative">
            <AnimateUp delay={0} duration={0.5}>
                <div className="flex gap-3 place-content-center">
                    <H1 bold="900" color="black" text="Combine" shadowColor="white"/>
                    <AnimateUp delay={1.4} duration={0.4}>
                        <TextWithDecoration bold="700" color="purple" decorationBg="green" size="h1" text="fine" shadowColor="white"/>
                    </AnimateUp>
                    <H1 bold="900" color="black" text="images" shadowColor="white"/>
                </div>
            </AnimateUp>
            <AnimateUp delay={0.5} duration={0.5}>
            <H2 bold="900" color="black" text="To represent a product" />
            </AnimateUp>
        </div>
    )
}