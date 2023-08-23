import Image from "next/image"
import Growth from "../../../public/growth.svg"

export type Stat = {
    title: String,
    count: number,
    append?: string,
    growth: number
}

const boxes: Stat[] = [
    {
        title: "Swagger",
        count: 23,
        append: "B",
        growth: 99.9
    },
    {
        title: "Github Commits",
        count: 1.3,
        append: "K",
        growth: 1
    },
    {
        title: "Years Programming",
        count: 8,
        growth: 100
    }
];

export const Statbox = ({ title, count, growth, append }: Stat) => {
    return (
        <div className="container mx-auto flex flex-col shadow-2xl px-4 rounded-xl gap-y-4 py-3 transition-all duration-200 hover:scale-110">
            <span className="font-subheader text-[#696969] text-center sm:text-start">
                {title}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end items-center justify-between gap-y-2">
                <span className="font-header text-4xl font-bold text-black">
                    {count}{append}
                </span>
                <div className="text-[#4bb543] flex gap-x-2">
                    <Image src={Growth} alt="Growth" />
                    <span>
                        {growth}%
                    </span>
                </div>
            </div>
        </div>
    )
}

export const Statboxes = () => {
    return (
        <div id="ABOUT" className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-y-12 md:gap-y-0 justify-between py-12 gap-x-8 sm:gap-x-12 lg:gap-x-18">
            {boxes.map((box) => {
                return (<Statbox title={box.title} count={box.count} growth={box.growth} append={box.append} />)
            })}
        </div>
    )
}

export default Statboxes