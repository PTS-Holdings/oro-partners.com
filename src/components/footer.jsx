import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
    return (
        <div className="bg-custom-black text-white body-small-regular md:body-medium-regular py-10">
            <div className="container flex gap-6 flex-col md:flex-row justify-between">
                <div>
                    <Image
                        src={"/assets/oro-partners-logo-white.svg"}
                        width={100}
                        height={50}
                        alt={"ORO Partners Logo"}
                    />
                    <div className="mt-4 caption-regular md:body-small-regular">
                        <div>
                            <p>Agora Mall, El Nasr, New Cairo, EGY</p>
                        </div>
                        <div>
                            <p>©ORO Partners 2023</p>
                        </div>
                    </div>
                </div>

                <ul className="space-y-3">
                    <li>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href={"/approach"}>
                            Approach
                        </Link>
                    </li>
                    <li>
                        <Link href={"/blog"}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <ul className="space-y-3">
                    <li>
                        <Link href={"/contact"}>
                            Facebook
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            Twitter
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            Linkedin
                        </Link>
                    </li>
                </ul>

                <div className="self-center">
                    <Button>
                        Get in Touch
                    </Button>
                </div>

            </div>

        </div>

    );
}
