import FunFact, { FunFactType } from "./FunFact"
import Dollar from "../../../public/dollar.svg"

const skills: String[] = [
    "Growth Mindset",
    "Effective Communicator",
    "Problem Solver",
    "Self-Starter"
]

const FunFacts: FunFactType[] = [
    {
        image: Dollar,
        title: "Co - Founder",
        subtitle: "Webtech CD",
        desc: "A thriving business specializing in Website Development, I have successfully leveraged my skills and knowledge to create impactful solutions for a diverse range of clients."
    },
    {
        image: Dollar,
        title: "Co - Founder",
        subtitle: "Webtech CD",
        desc: "A thriving business specializing in Website Development, I have successfully leveraged my skills and knowledge to create impactful solutions for a diverse range of clients."
    },
    {
        image: Dollar,
        title: "Co - Founder",
        subtitle: "Webtech CD",
        desc: "A thriving business specializing in Website Development, I have successfully leveraged my skills and knowledge to create impactful solutions for a diverse range of clients."
    }
]

const Top = () => {
    return (
        <div className="container mx-auto py-12 flex flex-col items-center w-full px-4">
            <h1 className="font-header font-black text-3xl xl:text-5xl pb-8 text-center ">
                Allow me to introduce myself
            </h1>
            <h2 className="font-bold font-header text-xl xl:text-3xl pb-2">
                My name is Colin Maloney
            </h2>
            <span className="container mx-auto flex flex-wrap w-full justify-center gap-x-8">
                {skills.map((skill, i) => (
                    <div className="flex gap-x-8 items-center">
                        <p className="w-full text-3xl">{skill}</p>
                    </div>

                ))}
            </span>
        </div>
    )
}
const Bottom = () => {
    return (
        <div className="container mx-auto flex gap-x-10 py-12 gap-y-16 flex-wrap">
            {
                FunFacts.map((fact: FunFactType, i) => (
                    <FunFact key={i} obj={fact} />
                ))
            }
        </div>
    )
}

export const Introduction = () => {
    return (
        <div>
            <Top />
            <Bottom />
        </div>
    )
}

export default Introduction