type Navlink = {title: string, link?: string}

const nav: Navlink[] = [
    { title: "HOME" },
    { title: "ABOUT" },
    { title: "RESUME", link:"/resume.pdf" },
    { title: "SKILLS" },
    { title: "CONTACT", link:"mailto:cpm22h@fsu.edu" },
]

export const Navbar = () => {
    return (
        <div className="absolute top-0 w-full h-fit px-72 flex items-center justify-between font-header border-b-2 py-2 font-medium">
            {nav.map((nav) =>
                <a href={`${nav.link ? nav.link : "/#"+nav.title}`} className={`transition-colors duration-200 text-white hover:text-[#ababab]`}>
                    {nav.title}
                </a>
            )}
        </div>
    )
}