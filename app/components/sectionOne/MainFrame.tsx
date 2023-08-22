import ColinMaloney from "../../../public/cpm.svg"
import { Navbar } from "./navbar"
import Image from "next/image"
import GH from "../../../public/github-square.svg"
import Mail from "../../../public/mail-bulk.svg"
import Insta from "../../../public/instagram.svg"
import LinkedIn from "../../../public/linkedin.svg"
import { link } from "fs"

type Social = { logo: any, link: string }
const socials: Social[] = [
    { logo: GH, link: "https://github.com/best-code" },
    { logo: LinkedIn, link: "https://linkedin.com/in/colinpmaloney" },
    { logo: Mail, link: "mailto:cpm22h@fsu.edu" },
    { logo: Insta, link: "https://instagram.com/colinpmelons" },
]


export const MainFrame = () => {
    return (
        <section className="w-screen h-screen bg-center bg-cover bg-[url('/FSU.svg')]">
            <Navbar />
            <div className="w-full h-2/5 flex flex-col items-center justify-end gap-y-5">
                <Image src={ColinMaloney} alt="Colin Maloney" className="scale-[.8]" />
                <h2 className="font-subheader text-4xl font-medium text-white">
                    Software Engineer | Data Scientist | Entrepeneur
                </h2>
            </div>
            <div className="w-full h-3/5 flex items-end justify-between px-[35rem] py-4">
                {socials.map((social) =>
                    <a href={social.link}>
                        <Image src={social.logo} alt={social.link} className="transition-transform duration-200 hover:scale-110"/>
                    </a>
                )}
            </div>
        </section>
    )
}