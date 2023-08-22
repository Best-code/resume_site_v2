
const skills: String[] = [
    "Growth Mindest",
    "Effective Communicator",
    "Problem Solver",
    "Self-Starter"
]
const Top = () => {
    return (
        <div className="container mx-auto py-12 flex flex-col items-center w-full">
            <h1 className="font-header font-black text-5xl pb-8 ">
                Allow me to introduce myself
            </h1>
            <h2 className="font-bold font-header text-3xl pb-2">
                My name is Colin Maloney
            </h2>
            <span className="container mx-auto flex w-full justify-center gap-x-8">
                {skills.map((skill, i) => (
                    <div className="flex gap-x-8 items-center">
                        <p className="w-full text-3xl">{skill}</p>
                        {i < skills.length-1 ? <p className="text-3xl">|</p> : <></>}
                    </div>

                ))}
            </span>
        </div>
    )
}
const Bottom = () => {

}

export const Introduction = () => {
    return (
        <Top />
    )
}

export default Introduction