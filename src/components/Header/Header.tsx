import { Button } from "../ui/button/Button";
import { Circle } from "../ui/decoration/Circle";
import { Wrapper } from "../ui/grid/Wrapper";
import { NavLink } from "../ui/link/NavLink";
import Logo from "../ui/logo/Logo";

export default function Header(){
  return(
    <div className="shadow-lg shadow-gray border-b border-gray relative z-30 bg-white w-screen">
        <div  className="grid items-center grid-flow-col place-content-between p-5 w-screen">
          <Logo />
          <div className="gap-4 items-center place-content-center hidden md:flex lg:flex xl:flex ">
            <NavLink color="purple" colorActive="black" href="/" text="How it works"/>
            <Circle bg="yellowdark" heigth={6} rounded="full" width={6}/>
            <NavLink color="purple" colorActive="black" href="#" text="Who we are"/>
            <Circle bg="yellowdark" heigth={6} rounded="full" width={6}/>
            <NavLink color="purple" colorActive="black" href="#" text="What we do"/>
            <Circle bg="yellowdark" heigth={6} rounded="full" width={6}/>
            <NavLink color="purple" colorActive="black" href="#" text="Contact us"/>
          </div>
          <Button boldText="700" colorBg="purple" colorText="white" rounded="full" text="Sign In" title="h6"/>
        </div>
    </div>
  )
}