import Image from "next/image"
import Dollar from "../../../public/dollar.svg"

export type FunFactType = {
    image: any,
    title: string,
    subtitle: string,
    desc: string
}

type FunFactObj = {
    obj: FunFactType
}

export const FunFact = ({obj} : FunFactObj) => {
    return (
    <div className="container mx-auto flex flex-col items-center px-6 sm:px-0 text-center w-96">
        <Image width={125} height={75} src={obj.image} alt="Dollar Bill" />
        <span className="flex flex-col items-center pt-2 pb-4">
            <h3 className="font-header font-bold text-3xl">
                {obj.title}
            </h3>
            <h5 className="font-bold font-subheader text-xl ">
                {obj.subtitle} 
            </h5>
        </span>
        <p className="font-subheader">
            {obj.desc}
        </p>
    </div>
    )
}

export default FunFact