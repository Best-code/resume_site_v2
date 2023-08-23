import ColinMaloney from "../../../public/cpm.svg"
import { Navbar } from "./navbar"
import Image from "next/image"
import GH from "../../../public/github-square.svg"
import Mail from "../../../public/mail-bulk.svg"
import Insta from "../../../public/instagram.svg"
import LinkedIn from "../../../public/linkedin.svg"
import { link } from "fs"
import FSU from "../../../public/FSU.svg"

type Social = { logo: any, link: string }
const socials: Social[] = [
    { logo: GH, link: "https://github.com/best-code" },
    { logo: LinkedIn, link: "https://linkedin.com/in/colinpmaloney" },
    { logo: Mail, link: "mailto:cpm22h@fsu.edu" },
    { logo: Insta, link: "https://instagram.com/colinpmelons" },
]

const Titles: String[] = [
    "Software Engineer",
    "Data Scientist",
    "Entrepreneur"
]


export const MainFrame = () => {
    return (
        <section id="HOME" className="w-full h-full flex flex-col items-center">
            <Image className="absolute top-0 left-0 z-[-1] object-cover w-screen h-screen" src={FSU} alt={"Florida State"}></Image>
            <Navbar />
            <div className="w-full flex flex-col items-center gap-y-5 py-48">
                <Image src={ColinMaloney} alt="Colin Maloney" className="scale-[.8]" />
                <span className="w-full justify-center items-center flex flex-col md:flex-row">
                    {Titles.map((title, i) => (
                        <h2 className="px-8 text-center font-subheader text-3xl lg:text-4xl font-medium text-white">
                            {title}
                        </h2>
                    ))}
                </span>
            </div>
            <div className="grid grid-cols-4 gap-x-6 md:gap-x-8 lg:gap-x-10 py-4">
                {socials.map((social) =>
                    <a href={social.link}>
                        <Image src={social.logo} alt={social.link} className="transition-transform duration-200 hover:scale-110 " />
                    </a>
                )}
            </div>
        </section>
    )
}