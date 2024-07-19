import Image from "next/image";
import { H4 } from "../text/Title";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href={"/"}>
            <div className="flex items-center">
                <Image alt="logo" src={"/icon/logo.svg"} width={60} height={60}/>
                <H4 bold="700" text="Grid" color="black"/>
            </div>
        </Link>
    )
}