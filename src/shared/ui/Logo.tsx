import Image from "next/image";

export function Logo(){
    return(
        <div className="bg-[#EB966A46] rounded-[12px] flex place-content-center w-[50px] h-[50px] z-40">
            <Image width={30} height={30} src={"/logo.svg"} alt="logo" />
        </div>
    )
}