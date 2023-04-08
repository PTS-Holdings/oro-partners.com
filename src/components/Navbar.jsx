import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Navbar() {
    const router = useRouter()
    const currentPath = router.pathname;


    const [open, setOpen] = useState(false);
    useEffect(() => {
        // Disable scroll when navbar is open
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    let navItems = [
        { name: "About us", link: "/about" },
        { name: "Approach", link: "/approach" },
        // { name: "Blog", link: "/blog" },
    ]

    return (
        <nav className="mt-5  container mb-10">
            <div className="border-b-2 py-4 flex flex-row justify-between items-center ">
                <Link href={"/"}>
                    <Image src={"/assets/oro-partners-logo.svg"} width={95} height={44} alt="logo" className="z-50 relative" />
                </Link>

                {/* desktop nav */}
                <div className="hidden md:block">
                    <div className="flex gap-10 items-center">
                        {navItems.map((item) => (
                            <Link href={item.link} key={item.name}>
                                <p className={`hover:text-custom-orange-light font-medium ${item.link === currentPath ? "text-custom-orange-basic" : "text-[#5B5B5B]"}`}>{item.name}</p>
                            </Link>
                        ))}
                        {currentPath !== "/contact" &&
                            <div>
                                <Link href={"/contact"}>
                                    {/* <div className="text-custom-orange-basic font-medium border-2 border-custom-orange-basic p-2 rounded-xl hover:bg-custom-orange-light hover:text-white ">
                                    Contact us
                                </div> */}
                                    <Button >Let&apos;s Talk</Button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>



                {/* hamburger button icon */}
                <div
                    className={`relative z-50 flex h-6 w-8 flex-col items-center justify-between md:hidden`}
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <span
                        className={`h-1 w-full transform rounded-full  transition duration-300 ease-in-out bg-[#5B5B5B] ${open ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-1 bg-[#5B5B5B] rounded-full transition-all duration-300 ease-in-out ${open ? "h-0 w-0" : "w-full"
                            }`}
                    />
                    <span
                        className={`h-1 w-full bg-[#5B5B5B] transform rounded-full transition duration-300 ease-in-out  ${open ? "-translate-y-3 -rotate-45" : ""
                            }`}
                    />
                </div>

                {/* mobile nav */}
                <div
                    className={`bg-white pt-16 lg:hidden left-0 z-40 block h-screen w-full  transition-all duration-2s00 ease-in-out fixed${open
                        ? " top-0 "
                        : " -top-[100vh] "
                        }`}
                >
                    <ul className="container mt-7">
                        {navItems.map((navLink) => (
                            <div key={navLink.name} >
                                <Link href={navLink.link}>
                                    <li
                                        className={` border-dashed border-b-gray-basic py-6 border-b-2 font-medium ${navLink.link === currentPath ? "text-custom-orange-basic" : "text-[#5B5B5B]"}`}
                                        onClick={() => { setOpen(false) }}
                                    >
                                        {navLink.name}
                                    </li>
                                </Link>
                            </div>
                        ))}
                        <Link href={"/contact"}>
                            <li
                                className={` py-6 font-medium ${currentPath === "/contact" ? "text-custom-orange-basic" : "text-[#5B5B5B]"}`}
                                onClick={() => { setOpen(false) }}
                            >
                                Get in Touch
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}