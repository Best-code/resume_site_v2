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
        <div className="absolute top-0 w-full container mx-auto flex items-center justify-between font-header font-medium px-4">
            {nav.map((nav) =>
                <a href={`${nav.link ? nav.link : "/#"+nav.title}`} className={`transition-colors duration-200 text-white text-[.75rem] leading-4 sm:text-sm md:text-[1rem] md:leading-6 lg:text-lg  hover:text-[#ababab] text-center`}>
                    {nav.title}
                </a>
            )}
        </div>
    )
}